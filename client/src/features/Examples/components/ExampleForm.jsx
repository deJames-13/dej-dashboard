import { useSlug } from '@common';
import { FormikForm } from '@common/components';
import { PageTitle } from '@partials';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { exampleApi } from '../example.api';
import { exampleValidation } from '../example.validation';

const fields = [
  { label: 'Name', name: 'name', type: 'text' },
  // More fields can be added here
];

const altFields = [
  { label: 'Name', name: 'name', type: 'text' },
  // alternate fields can be added here
];

const ExampleForm = ({ title = 'Example Form', action = 'create' }) => {
  const navigate = useNavigate();

  const [example, setExample] = useState(null);
  const [exampleSchema, setExampleSchema] = useState(fields);
  const [createExample, { isLoading: isCreating }] = exampleApi.useCreateExampleMutation();
  const [updateExample, { isLoading: isUpdating }] = exampleApi.useUpdateExampleMutation();
  const [getExample, { isLoading: isFetching }] = exampleApi.useGetExampleMutation();
  const { slug, setSlug, oldSlug } = useSlug();

  const initialValues = useMemo(
    () =>
      exampleSchema.reduce((acc, field) => {
        acc[field.name] = action === 'create' ? '' : example?.[field.name] ?? '';
        return acc;
      }, {}),
    [example, exampleSchema, action]
  );

  useEffect(() => {
    const fetchExample = async () => {
      getExample(slug).then((res) => {
        if (res.error) {
          toast.error(res.error.data.message);
          navigate('/dashboard/examples/table');
        } else if (res.data) setExample(res.data.resource);
      });
    };

    if (slug && slug === oldSlug) fetchExample();
    else setExampleSchema(action === 'create' ? fields : altFields);
  }, [action, slug, getExample, navigate, oldSlug]);

  const handleSubmit = async (values) => {
    try {
      if (action === 'create') {
        await createExample(values).unwrap();
        toast.success('Example created successfully');
        navigate('/dashboard/examples/table');
      } else {
        const res = await updateExample({ id: example.id, example: values }).unwrap();
        const updatedExample = res?.resource || { ...example, ...values };
        toast.success('Example updated successfully');
        setSlug(updatedExample.slug);
      }
    } catch (e) {
      const errors = e?.data?.errors?.details;
      if (Array.isArray(errors)) {
        errors.forEach((error) => {
          toast.error(error?.msg || 'Error while performing action');
        });
      } else toast.error(e?.data?.message || e.error);
    }
  };

  return (
    <div className="w-full h-full">
      <PageTitle title={title}>
        <Button
          type="button"
          variant="outline"
          color="primary"
          onClick={() => navigate('/dashboard/examples/table')}
        >
          Back
        </Button>
      </PageTitle>
      <div className="container p-8">
        <FormikForm
          formikProps={{
            initialValues,
            validationSchema: exampleValidation,
            onSubmit: handleSubmit,
            enableReinitialize: true,
          }}
          className="flex flex-wrap gap-8"
          formSchema={exampleSchema}
          element={({ isSubmitting, values }) => {
            const isFormChanged = !isEqual(initialValues, values);
            const isButtonDisabled = isSubmitting || isCreating || isUpdating || isFetching || !isFormChanged;

            return (
              <div className="flex w-full">
                <Button
                  variant="outline"
                  type="submit"
                  // type="button"
                  // onClick={handleSubmit(values)}
                  color="primary"
                  className="max-w-md"
                  disabled={isButtonDisabled}
                >
                  {action === 'create' ? 'Create Example' : 'Update Example'}
                </Button>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

ExampleForm.propTypes = {
  action: PropTypes.oneOf(['create', 'edit', 'view']),
  title: PropTypes.string,
};

export default ExampleForm;

import { FormikForm } from '@common/components';
import { PageTitle } from '@partials';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-daisyui';
import { useNavigate, useParams } from 'react-router-dom';
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
  const { id } = useParams();
  const [example, setExample] = useState(null);
  const [exampleSchema, setExampleSchema] = useState(fields);
  const [createExample, { isLoading: isCreating }] = exampleApi.useCreateExampleMutation();
  const [updateExample, { isLoading: isUpdating }] = exampleApi.useUpdateExampleMutation();
  const [getExample, { isLoading: isFetching }] = exampleApi.useGetExampleMutation();

  const initialValues = useMemo(
    () =>
      exampleSchema.reduce((acc, field) => {
        acc[field.name] = action === 'create' ? '' : example?.[field.name] ?? '';
        return acc;
      }, {}),
    [example, exampleSchema, action]
  );

  useEffect(() => {
    if (action === 'edit' && id) {
      getExample(id).then((res) => {
        setExample(res.data.resource);
      });
    } else {
      setExampleSchema(action === 'create' ? fields : altFields);
    }
  }, [action, id, getExample]);

  const handleSubmit = (values) => async () => {
    try {
      if (action === 'create') {
        await createExample(values).unwrap();
        toast.success('Example created successfully');
      } else {
        await updateExample({ id, example: values }).unwrap();
        toast.success('Example updated successfully');
      }
      navigate('/dashboard/examples/table');
    } catch (e) {
      const errors = e?.data?.errors?.details;
      if (Array.isArray(errors)) {
        errors.forEach((error) => {
          toast.error(error?.msg || 'test');
        });
      } else toast.error(e?.data?.message || e.error);
    }
  };

  return (
    <div className="w-full h-full">
      <PageTitle title={title} />

      <div className="container p-8">
        <FormikForm
          formikProps={{
            initialValues,
            validationSchema: exampleValidation,
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
                  type="button"
                  onClick={handleSubmit(values)}
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

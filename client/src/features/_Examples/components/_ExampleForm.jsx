import { useSlug } from '@common';
import { FormikForm } from '@common/components';
import { confirmSave } from '@custom';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { _exampleApi } from '../_example.api';
import { getAltFields, getFields } from '../_example.fields';
import { _exampleValidation } from '../_example.validation';
import _ExampleWrapper from './_ExampleWrapper';

const fields = typeof getFields === 'function' ? getFields() : getFields || [];
const altFields = typeof getAltFields === 'function' ? getAltFields() : getAltFields || [];

const _ExampleForm = ({ title = '_Example Form', action = 'create' }) => {
  const navigate = useNavigate();

  const [_example, set_Example] = useState(null);
  const [_exampleSchema, set_ExampleSchema] = useState(fields);
  const [create_Example, { isLoading: isCreating }] = _exampleApi.useCreate_ExampleMutation();
  const [update_Example, { isLoading: isUpdating }] = _exampleApi.useUpdate_ExampleMutation();
  const [get_Example, { isLoading: isFetching }] = _exampleApi.useGet_ExampleMutation();
  const { slug, setSlug, oldSlug } = useSlug();

  const initialValues = useMemo(
    () =>
      _exampleSchema.reduce((acc, field) => {
        acc[field.name] = action === 'create' ? '' : _example?.[field.name] ?? '';
        return acc;
      }, {}),
    [_example, _exampleSchema, action]
  );

  useEffect(() => {
    const fetch_Example = async () => {
      get_Example(slug).then((res) => {
        if (res.error) {
          toast.error(res.error.data.message);
          navigate('/dashboard/_examples/table');
        } else if (res.data) set_Example(res.data.resource);
      });
    };

    if (slug && slug === oldSlug) fetch_Example();
    else set_ExampleSchema(action === 'create' ? fields : altFields);
  }, [action, slug, oldSlug, get_Example, navigate]);

  const handleSubmit = async (values) => {
    confirmSave(async () => {
      try {
        if (action === 'create') {
          await create_Example(values).unwrap();
          toast.success('_Example created successfully');
          navigate('/dashboard/_examples/table');
        } else {
          const res = await update_Example({ id: _example.id, _example: values }).unwrap();
          const updated_Example = res?.resource || { ..._example, ...values };
          setSlug(updated_Example.slug);
          toast.success('_Example updated successfully');
        }
      } catch (error) {
        const errors = error?.data?.errors?.details;
        if (Array.isArray(errors)) {
          errors.forEach((error) => {
            toast.error(error?.msg || 'Error while performing action');
          });
        } else toast.error(error?.data?.message || 'Error while performing action.');
      }
    });
  };

  return (
    <_ExampleWrapper
      title={title}
      prevUrl="/dashboard/_examples/table"
    >
      <FormikForm
        formikProps={{
          initialValues,
          validationSchema: _exampleValidation,
          onSubmit: handleSubmit,
          enableReinitialize: true,
        }}
        className="flex flex-wrap gap-8"
        formSchema={_exampleSchema}
        element={({ isSubmitting, values }) => {
          const isFormChanged = !isEqual(initialValues, values);
          const isProcessing = isSubmitting || isCreating || isUpdating;
          const isButtonDisabled = isProcessing || isFetching || !isFormChanged;

          return (
            <div className="flex w-full">
              <Button
                variant="outline"
                type="submit"
                color="primary"
                className="max-w-md"
                disabled={isButtonDisabled}
              >
                {isProcessing && <span className="loading loading-spinner"></span>}
                {action === 'create' ? 'Create _Example' : 'Update _Example'}
              </Button>
            </div>
          );
        }}
      />
    </_ExampleWrapper>
  );
};

_ExampleForm.propTypes = {
  action: PropTypes.oneOf(['create', 'edit', 'view']),
  title: PropTypes.string,
};

export default _ExampleForm;

import { useSlug } from '@common';
import { FormikForm } from '@common/components';
import { confirmSave, requestError, toFormData } from '@custom';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { imageApi } from '../image.api';
import { getAltFields, getFields } from '../image.fields';
import { imageValidation } from '../image.validation';
import ImageWrapper from './ImageWrapper';

const fields = typeof getFields === 'function' ? getFields() : getFields || [];
const altFields = typeof getAltFields === 'function' ? getAltFields() : getAltFields || [];

const ImageForm = ({ title = 'Image Form', action = 'create' }) => {
  /* DECLARATIONS #################################################### */
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imageSchema, setImageSchema] = useState(fields);
  const [createImage, { isLoading: isCreating }] = imageApi.useCreateImageMutation();
  const [updateImage, { isLoading: isUpdating }] = imageApi.useUpdateImageMutation();
  const [getImage, { isLoading: isFetching }] = imageApi.useGetImageMutation();
  const { slug, setSlug, oldSlug } = useSlug();

  const initialValues = useMemo(
    () =>
      imageSchema.reduce((acc, field) => {
        acc[field.name] = action === 'create' ? '' : image?.[field.name] ?? '';
        return acc;
      }, {}),
    [image, imageSchema, action]
  );
  /* END DECLARATIONS ################################################ */

  const handleCreate = async (values) => {
    await createImage(values).unwrap();
    navigate('/dashboard/images/table');
    toast.success('Create successful!');
  };

  const handleUpdate = async (values) => {
    const res = await updateImage({ id: image.id, image: values }).unwrap();
    const updatedImage = res?.resource || { ...image, ...values };
    setSlug(updatedImage.slug);
    toast.success('Update successful!');
  };

  const onSubmit = async (values) => {
    confirmSave(async () => handleSubmit(values));
  };

  const handleSubmit = async (values) => {
    try {
      values = toFormData(values);
      if (action === 'create') await handleCreate(values);
      else await handleUpdate(values);
    } catch (error) {
      requestError(error);
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      getImage(slug).then((res) => {
        if (res.error) {
          toast.error(res.error.data.message);
          navigate('/dashboard/images/table');
        } else if (res.data) setImage(res.data.resource);
      });
    };

    if (slug && slug === oldSlug) fetchImage();
    else setImageSchema(action === 'create' ? fields : altFields);
  }, [action, slug, oldSlug, getImage, navigate]);

  return (
    <ImageWrapper
      title={title}
      prevUrl="/dashboard/images/table"
    >
      <FormikForm
        formSchema={imageSchema}
        formikProps={{
          initialValues,
          validationSchema: imageValidation,
          onSubmit: onSubmit,
          enableReinitialize: true,
        }}
        className="flex flex-wrap gap-8"
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
                {action === 'create' ? 'Create Image' : 'Update Image'}
              </Button>
            </div>
          );
        }}
      />
    </ImageWrapper>
  );
};

ImageForm.propTypes = {
  action: PropTypes.oneOf(['create', 'edit', 'view']),
  title: PropTypes.string,
};

export default ImageForm;

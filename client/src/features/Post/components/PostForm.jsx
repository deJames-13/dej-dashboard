import { useSlug } from '@common';
import { FormikForm } from '@common/components';
import { confirmSave } from '@custom';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postApi } from '../post.api';
import { altFields, fields } from '../post.fields';
import { postValidation } from '../post.validation';
import PostWrapper from './PostWrapper';

const PostForm = ({ title = 'Post Form', action = 'create' }) => {
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [postSchema, setPostSchema] = useState(fields);
  const [createPost, { isLoading: isCreating }] = postApi.useCreatePostMutation();
  const [updatePost, { isLoading: isUpdating }] = postApi.useUpdatePostMutation();
  const [getPost, { isLoading: isFetching }] = postApi.useGetPostMutation();
  const { slug, setSlug, oldSlug } = useSlug();

  const initialValues = useMemo(
    () =>
      postSchema.reduce((acc, field) => {
        acc[field.name] = action === 'create' ? '' : post?.[field.name] ?? '';
        return acc;
      }, {}),
    [post, postSchema, action]
  );

  useEffect(() => {
    const fetchPost = async () => {
      getPost(slug).then((res) => {
        if (res.error) {
          toast.error(res.error.data.message);
          navigate('/dashboard/posts/table');
        } else if (res.data) setPost(res.data.resource);
      });
    };

    if (slug && slug === oldSlug) fetchPost();
    else setPostSchema(action === 'create' ? fields : altFields);
  }, [action, slug, oldSlug, getPost, navigate]);

  const handleSubmit = async (values) => {
    confirmSave(async () => {
      try {
        if (action === 'create') {
          await createPost(values).unwrap();
          toast.success('Post created successfully');
          navigate('/dashboard/posts/table');
        } else {
          const res = await updatePost({ id: post.id, post: values }).unwrap();
          const updatedPost = res?.resource || { ...post, ...values };
          setSlug(updatedPost.slug);
          toast.success('Post updated successfully');
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
    <PostWrapper
      title={title}
      prevUrl="/dashboard/posts/table"
    >
      <FormikForm
        formikProps={{
          initialValues,
          validationSchema: postValidation,
          onSubmit: handleSubmit,
          enableReinitialize: true,
        }}
        className="flex flex-wrap gap-8"
        formSchema={postSchema}
        element={({ isSubmitting, values }) => {
          const isFormChanged = !isEqual(initialValues, values);
          const isButtonDisabled = isSubmitting || isCreating || isUpdating || isFetching || !isFormChanged;

          return (
            <div className="flex w-full">
              <Button
                variant="outline"
                type="submit"
                color="primary"
                className="max-w-md"
                disabled={isButtonDisabled}
              >
                {action === 'create' ? 'Create Post' : 'Update Post'}
              </Button>
            </div>
          );
        }}
      />
    </PostWrapper>
  );
};

PostForm.propTypes = {
  action: PropTypes.oneOf(['create', 'edit', 'view']),
  title: PropTypes.string,
};

export default PostForm;

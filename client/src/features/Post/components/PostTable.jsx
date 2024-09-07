import { ActionButtons, Table } from '@common';
import { confirmDelete } from '@custom';
import { useEffect, useState } from 'react';
import { Button } from 'react-daisyui';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postApi } from '../post.api';
import PostWrapper from './PostWrapper';

const allowedColumns = () => [
  { key: 'name', label: 'Name' },
  { key: 'actions', label: '' },
  // More columns can be added here
];

const PostTable = () => {
  const navigate = useNavigate();
  const { useGetPostsMutation, useDeletePostMutation } = postApi;
  const [posts, setPosts] = useState([]);
  const [getPosts, { isLoading, isError }] = useGetPostsMutation();
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  const handleDelete = async (id) => {
    try {
      confirmDelete(async () => {
        await deletePost(id).unwrap();
        setPosts(posts.filter((post) => post.id !== id));
        toast.success('Post deleted successfully');
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts().unwrap();
      setPosts(res.resource || []);
    };

    return () => {
      try {
        fetchPosts();
      } catch (error) {
        toast.error(error.message);
      }
    };
  }, [getPosts]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;
  if (!posts.length)
    return (
      <div className="flex items-center justify-center space-x-2 font-bold text-center">
        <span>No data found! Create one. </span>
        <Button
          color="primary"
          className="my-4"
          onClick={() => navigate('/dashboard/posts/create')}
        >
          <FaPlus />
        </Button>
      </div>
    );
  return (
    <>
      <PostWrapper title="Posts Table">
        <Table
          data={posts.map((post) => ({
            ...post,
            actions: (
              <ActionButtons
                key={'action_' + post.slug}
                className="flex justify-end"
                isLoading={isDeleting}
                onDelete={() => handleDelete(post.id)}
                onEdit={() => navigate(`/dashboard/posts/${post.slug}/edit`)}
                onView={() => navigate(`/dashboard/posts/${post.slug}/view`)}
              />
            ),
          }))}
          columns={allowedColumns()}
        />
      </PostWrapper>
    </>
  );
};

export default PostTable;

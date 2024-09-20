import { ActionButtons, Table } from '@common';
import { confirmDelete } from '@custom';
import { useEffect, useState } from 'react';
import { Button } from 'react-daisyui';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { imageApi } from '../image.api';
import ImageWrapper from './ImageWrapper';

const allowedColumns = () => [
  { key: 'name', label: 'Name' },
  { key: 'actions', label: '' },
  // More columns can be added here
];

const ImageTable = () => {
  const navigate = useNavigate();
  const { useGetImagesMutation, useDeleteImageMutation } = imageApi;
  const [images, setImages] = useState([]);
  const [getImages, { isLoading, isError }] = useGetImagesMutation();
  const [deleteImage, { isLoading: isDeleting }] = useDeleteImageMutation();

  const handleDelete = async (id) => {
    try {
      confirmDelete(async () => {
        await deleteImage(id).unwrap();
        setImages(images.filter((image) => image.id !== id));
        toast.success('Image deleted successfully');
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      const res = await getImages().unwrap();
      setImages(res.resource || []);
    };

    return () => {
      try {
        fetchImages();
      } catch (error) {
        toast.error(error.message);
      }
    };
  }, [getImages]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading images</div>;
  if (!images.length)
    return (
      <div className="flex items-center justify-center space-x-2 font-bold text-center">
        <span>No data found! Create one. </span>
        <Button
          color="primary"
          className="my-4"
          onClick={() => navigate('/dashboard/images/create')}
        >
          <FaPlus />
        </Button>
      </div>
    );
  return (
    <>
      <ImageWrapper title="Images Table">
        <Table
          data={images.map((image) => ({
            ...image,
            actions: (
              <ActionButtons
                key={'action_' + image.slug}
                className="flex justify-end"
                isLoading={isDeleting}
                onDelete={() => handleDelete(image.id)}
                onEdit={() => navigate(`/dashboard/images/${image.slug}/edit`)}
                onView={() => navigate(`/dashboard/images/${image.slug}/view`)}
              />
            ),
          }))}
          columns={allowedColumns()}
        />
      </ImageWrapper>
    </>
  );
};

export default ImageTable;

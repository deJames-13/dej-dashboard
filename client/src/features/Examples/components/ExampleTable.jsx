import { ActionButtons, Table } from '@common';
import { confirmDelete } from '@custom';
import { useEffect, useState } from 'react';
import { Button } from 'react-daisyui';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { exampleApi } from '../example.api';
import ExampleWrapper from './ExampleWrapper';

const allowedColumns = () => [
  { key: 'name', label: 'Name' },
  { key: 'actions', label: '' },
  // More columns can be added here
];

const ExampleTable = () => {
  const navigate = useNavigate();
  const { useGetExamplesMutation, useDeleteExampleMutation } = exampleApi;
  const [examples, setExamples] = useState([]);
  const [getExamples, { isLoading, isError }] = useGetExamplesMutation();
  const [deleteExample, { isLoading: isDeleting }] = useDeleteExampleMutation();

  const handleDelete = async (id) => {
    try {
      confirmDelete(async () => {
        await deleteExample(id).unwrap();
        setExamples(examples.filter((example) => example.id !== id));
        toast.success('Example deleted successfully');
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchExamples = async () => {
      const res = await getExamples().unwrap();
      setExamples(res.resource || []);
    };

    return () => {
      try {
        fetchExamples();
      } catch (error) {
        toast.error(error.message);
      }
    };
  }, [getExamples]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading examples</div>;
  if (!examples.length)
    return (
      <div className="flex items-center justify-center space-x-2 font-bold text-center">
        <span>No data found! Create one. </span>
        <Button
          color="primary"
          className="my-4"
          onClick={() => navigate('/dashboard/examples/create')}
        >
          <FaPlus />
        </Button>
      </div>
    );
  return (
    <>
      <ExampleWrapper title="Examples Table">
        <Table
          data={examples.map((example) => ({
            ...example,
            actions: (
              <ActionButtons
                key={'action_' + example.slug}
                className="flex justify-end"
                isLoading={isDeleting}
                onDelete={() => handleDelete(example.id)}
                onEdit={() => navigate(`/dashboard/examples/${example.slug}/edit`)}
                onView={() => navigate(`/dashboard/examples/${example.slug}/view`)}
              />
            ),
          }))}
          columns={allowedColumns()}
        />
      </ExampleWrapper>
    </>
  );
};

export default ExampleTable;

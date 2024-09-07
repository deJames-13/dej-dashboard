import { ActionButtons, Table } from '@common';
import { PageTitle } from '@partials';
import { useEffect, useState } from 'react';
import { Button } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { exampleApi } from '../example.api';

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
      await deleteExample(id).unwrap();
      setExamples(examples.filter((example) => example.id !== id));
      toast.success('Example deleted successfully');
    } catch (e) {
      toast.error(e?.data?.message || 'Error while deleting resource.');
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
  return (
    <>
      <div className="w-full h-full">
        <PageTitle title="Examples Table" />
        <div className="p-4">
          <div className="flex justify-end mb-4">
            <Button
              color="primary"
              className="my-4"
              onClick={() => navigate('/dashboard/examples/create')}
            >
              Create Example
            </Button>
          </div>
          <Table
            data={examples.map((example) => ({
              ...example,
              actions: (
                <ActionButtons
                  key={'action_' + example.id}
                  className="flex justify-end"
                  isLoading={isDeleting}
                  onDelete={() => handleDelete(example.id)}
                  onEdit={() => navigate(`/dashboard/examples/${example.id}/edit`)}
                  onView={() => navigate(`/dashboard/examples/${example.id}/view`)}
                />
              ),
            }))}
            columns={allowedColumns()}
          />
        </div>
      </div>
    </>
  );
};

export default ExampleTable;

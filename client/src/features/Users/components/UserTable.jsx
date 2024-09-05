import { ActionButtons, Table } from '@common';
import { PageTitle } from '@partials';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { userApi } from '../user.api';

const allowedColumns = () => [
  { key: 'username', label: 'User' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'actions', label: 'Actions' },
];

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [getUsers, { isLoading, isError }] = userApi.useGetUsersMutation();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers().unwrap();
      setUsers(res.resource || []);
    };

    return () => {
      try {
        fetchUsers();
      } catch (error) {
        toast.error(error.message);
      }
    };
  }, [getUsers]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;
  return (
    <div className="w-full h-full p-4">
      <PageTitle title="Users Table" />
      <Table
        data={users.map((user) => ({
          ...user,
          actions: <ActionButtons />,
        }))}
        columns={allowedColumns()}
      />
    </div>
  );
};

export default UserTable;

import { ActionButtons, Table } from '@common';
import { PageTitle } from '@partials';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Moderator' },
];

function UserTable() {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'actions', label: 'Actions' },
  ];

  return (
    <div className="w-full h-full p-4">
      <PageTitle title="Users Table" />
      <Table
        data={users.map((user) => ({
          ...user,
          actions: <ActionButtons />,
        }))}
        columns={columns}
      />
    </div>
  );
}

export default UserTable;

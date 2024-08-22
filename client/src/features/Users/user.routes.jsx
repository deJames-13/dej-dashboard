import { UserForm, UserList, UserPage, UserTable } from '.';

export const userRoutes = [
  { path: '/dashboard/users', element: <UserPage /> },
  { path: '/dashboard/users/table', element: <UserTable /> },
  { path: '/dashboard/users/list', element: <UserList /> },
  { path: '/dashboard/users/form', element: <UserForm /> },
];

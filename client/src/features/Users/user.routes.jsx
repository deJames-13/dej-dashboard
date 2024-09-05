import React from 'react';
import { UserList, UserPage, UserTable } from '.';

const UserForm = React.lazy(() => import('./components/UserForm'));

export const userRoutes = [
  { path: '/dashboard/users', element: <UserPage /> },
  { path: '/dashboard/users/table', element: <UserTable /> },
  { path: '/dashboard/users/list', element: <UserList /> },
  {
    path: '/dashboard/users/:id/edit',
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserForm
          action="edit"
          title="Edit User"
        />
      </React.Suspense>
    ),
  },
  {
    path: '/dashboard/users/:id/view',
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserForm
          action="view"
          title="View User"
        />
      </React.Suspense>
    ),
  },
  {
    path: '/dashboard/users/create',
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserForm
          action="create"
          title="Create User"
        />
      </React.Suspense>
    ),
  },
];

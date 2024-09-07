import React from 'react';

const ExampleForm = React.lazy(() => import('./components/ExampleForm'));
const ExamplePage = React.lazy(() => import('./components/ExamplePage'));
const ExampleList = React.lazy(() => import('./components/ExampleList'));
const ExampleTable = React.lazy(() => import('./components/ExampleTable'));

export const examplesRoutes = [
  { path: '/dashboard/examples/table', element: <ExampleTable /> },
  { path: '/dashboard/examples/list', element: <ExampleList /> },
  { path: '/dashboard/examples', element: <ExamplePage /> },
  {
    path: '/dashboard/examples/create',
    element: (
      <ExampleForm
        action="create"
        title="Create Example"
      />
    ),
  },
  {
    path: '/dashboard/examples/:slug/view',
    element: (
      <ExampleForm
        action="view"
        title="View Example"
      />
    ),
  },
  {
    path: '/dashboard/examples/:slug/edit',
    element: (
      <ExampleForm
        action="edit"
        title="Edit Example"
      />
    ),
  },
];

import React from 'react';

const _ExampleForm = React.lazy(() => import('./components/_ExampleForm'));
const _ExamplePage = React.lazy(() => import('./components/_ExamplePage'));
const _ExampleList = React.lazy(() => import('./components/_ExampleList'));
const _ExampleTable = React.lazy(() => import('./components/_ExampleTable'));

export const _exampleRoutes = [
  { path: '/dashboard/_examples/table', element: <_ExampleTable /> },
  { path: '/dashboard/_examples/list', element: <_ExampleList /> },
  { path: '/dashboard/_examples', element: <_ExamplePage /> },
  {
    path: '/dashboard/_examples/create',
    element: (
      <_ExampleForm
        action="create"
        title="Create _Example"
      />
    ),
  },
  {
    path: '/dashboard/_examples/:slug/view',
    element: (
      <_ExampleForm
        action="view"
        title="View _Example"
      />
    ),
  },
  {
    path: '/dashboard/_examples/:slug/edit',
    element: (
      <_ExampleForm
        action="edit"
        title="Edit _Example"
      />
    ),
  },
];

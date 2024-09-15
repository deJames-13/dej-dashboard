import React from 'react';

const _ExampleForm = React.lazy(() => import('./components/_ExampleForm'));
const _ExamplePage = React.lazy(() => import('./components/_ExamplePage'));
const _ExampleList = React.lazy(() => import('./components/_ExampleList'));
const _ExampleTable = React.lazy(() => import('./components/_ExampleTable'));

const mainUrl = '/dashboard/_examples';

export const _exampleRoutes = [
  { path: `${mainUrl}/table`, element: <_ExampleTable /> },
  { path: `${mainUrl}/list`, element: <_ExampleList /> },
  { path: mainUrl, element: <_ExamplePage /> },
  {
    path: `${mainUrl}/create`,
    element: (
      <_ExampleForm
        action="create"
        title="Create _Example"
      />
    ),
  },
  {
    path: `${mainUrl}/:slug/view`,
    element: (
      <_ExampleForm
        action="view"
        title="View _Example"
      />
    ),
  },
  {
    path: `${mainUrl}/:slug/edit`,
    element: (
      <_ExampleForm
        action="edit"
        title="Edit _Example"
      />
    ),
  },
];

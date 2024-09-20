import React from 'react';
import { dashUrl as mainUrl } from './image.api';

const ImageForm = React.lazy(() => import('./components/ImageForm'));
const ImagePage = React.lazy(() => import('./components/ImagePage'));
const ImageList = React.lazy(() => import('./components/ImageList'));
const ImageTable = React.lazy(() => import('./components/ImageTable'));

export const imageRoutes = [
  { path: `${mainUrl}/table`, element: <ImageTable /> },
  { path: `${mainUrl}/list`, element: <ImageList /> },
  { path: mainUrl, element: <ImagePage /> },
  {
    path: `${mainUrl}/create`,
    element: (
      <ImageForm
        action="create"
        title="Create Image"
      />
    ),
  },
  {
    path: `${mainUrl}/:slug/view`,
    element: (
      <ImageForm
        action="view"
        title="View Image"
      />
    ),
  },
  {
    path: `${mainUrl}/:slug/edit`,
    element: (
      <ImageForm
        action="edit"
        title="Edit Image"
      />
    ),
  },
];

import React from 'react';

const PostForm = React.lazy(() => import('./components/PostForm'));
const PostPage = React.lazy(() => import('./components/PostPage'));
const PostList = React.lazy(() => import('./components/PostList'));
const PostTable = React.lazy(() => import('./components/PostTable'));

export const postsRoutes = [
  { path: '/dashboard/posts/table', element: <PostTable /> },
  { path: '/dashboard/posts/list', element: <PostList /> },
  { path: '/dashboard/posts', element: <PostPage /> },
  {
    path: '/dashboard/posts/create',
    element: (
      <PostForm
        action="create"
        title="Create Post"
      />
    ),
  },
  {
    path: '/dashboard/posts/:slug/view',
    element: (
      <PostForm
        action="view"
        title="View Post"
      />
    ),
  },
  {
    path: '/dashboard/posts/:slug/edit',
    element: (
      <PostForm
        action="edit"
        title="Edit Post"
      />
    ),
  },
];

import { examplesRoutes, userRoutes } from '@features';
import { PrivateLayout } from '@layouts';
import { Dashboard } from '@screens';

const privateRoutes = [
  {
    path: '/',
    element: <PrivateLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      ...userRoutes,
      ...examplesRoutes,
    ],
  },
];

export default privateRoutes;

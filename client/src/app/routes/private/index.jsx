import { userRoutes } from '@features';
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
      ...userRoutes
    ],
  },
];

export default privateRoutes;

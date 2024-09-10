import privateFeatures from '@features/private.routes';
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
      // NEW ROUTE HERE ->
      ...privateFeatures,
    ],
  },
];

export default privateRoutes;

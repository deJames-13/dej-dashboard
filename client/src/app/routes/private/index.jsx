import * as features from '@features';
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
    ...features.imageRoutes,
      ...features.userRoutes,
      ...features._exampleRoutes,
    ],
  },
];

export default privateRoutes;

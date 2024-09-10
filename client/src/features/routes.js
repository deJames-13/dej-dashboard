import { _exampleRoutes } from './_Examples';
import { userRoutes } from './Users';

export default [
  // NEW ROUTE HERE ->
  ...userRoutes,
  ..._exampleRoutes,
];


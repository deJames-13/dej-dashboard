import { FEATURES_URL } from '#constants';
import * as features from '#features';

const v1 = [
  {
    url: FEATURES_URL.USERS,
    router: features.userRoutes,
  },
  {
    url: FEATURES_URL.EXAMPLES,
    router: features.exampleRoutes,
  },
];
export default v1;

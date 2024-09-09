import * as features from '@features';
import { FaHome } from 'react-icons/fa';
const makeMenu = () => [
  {
    label: 'Home',
    type: 'link',
    to: '/dashboard',
    icon: <FaHome />,
  },
  // NEW ROUTE HERE ->
  ...features.userMenu,
  ...features._exampleMenu,
];

export default makeMenu;


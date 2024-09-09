import * as features from '@features';
import { FaHome } from 'react-icons/fa';
console.log(features);
const menuList = [
  {
    label: 'Home',
    type: 'link',
    to: '/dashboard',
    icon: <FaHome />,
  },
  // NEW ROUTE HERE -->
];

export default menuList;


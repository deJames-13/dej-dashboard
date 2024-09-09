import * as features from '@features';
import { FaHome, FaPlus, FaTable, FaUsers } from 'react-icons/fa';

export const menuList = [
  {
    label: 'Home',
    type: 'link',
    to: '/dashboard',
    icon: <FaHome />,
  },
  // NEW ROUTE HERE -->
  ...features.exampleMenu,
  ...features.userMenu,
];


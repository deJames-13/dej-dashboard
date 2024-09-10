import featureMenus from '@features/menu';
import { FaHome } from 'react-icons/fa';
const makeMenu = () => [
  {
    label: 'Home',
    type: 'link',
    to: '/dashboard',
    icon: <FaHome />,
  },
  // NEW ROUTE HERE ->
  ...featureMenus,
];

export default makeMenu;


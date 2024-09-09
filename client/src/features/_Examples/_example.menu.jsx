import { FaPlus, FaTable, FaUsers } from 'react-icons/fa';

export const _exampleMenus = [
  {
    label: 'Manage _Examples',
    type: 'dropdown',
    to: '/dashboard/_examples',
    icon: <FaTable />,
    subLinks: [
      { to: '/dashboard/_examples/table', label: '_Examples Table', icon: <FaTable /> },
      { to: '/dashboard/_examples/create', label: 'Create _Examples', icon: <FaPlus /> },
      { to: '/dashboard/_examples/list', label: '_Examples List', icon: <FaUsers /> },
    ],
  },
];


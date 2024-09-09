import { FaPlus, FaTable, FaUsers } from 'react-icons/fa';

export const exampleMenu = [
  {
    label: 'Manage Examples',
    type: 'dropdown',
    to: '/dashboard/examples',
    icon: <FaTable />,
    subLinks: [
      { to: '/dashboard/examples/table', label: 'Examples Table', icon: <FaTable /> },
      { to: '/dashboard/examples/create', label: 'Create Examples', icon: <FaPlus /> },
      { to: '/dashboard/examples/list', label: 'Examples List', icon: <FaUsers /> },
    ],
  },
];

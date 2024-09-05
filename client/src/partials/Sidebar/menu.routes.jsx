import { FaHome, FaPlus, FaTable, FaUsers } from 'react-icons/fa';

export const menuList = [
  {
    label: 'Home',
    type: 'link',
    to: '/dashboard',
    icon: <FaHome />,
  },
  {
    label: 'Manage Users',
    type: 'dropdown',
    to: '/dashboard/users',
    icon: <FaTable />,
    subLinks: [
      { to: '/dashboard/users/table', label: 'Users Table', icon: <FaTable /> },
      { to: '/dashboard/users/create', label: 'Creat Users', icon: <FaPlus /> },
      { to: '/dashboard/users/list', label: 'Users List', icon: <FaUsers /> },
    ],
  },
];


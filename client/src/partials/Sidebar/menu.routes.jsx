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
  {
    label: 'Manage Posts',
    type: 'dropdown',
    to: '/dashboard/posts',
    icon: <FaTable />,
    subLinks: [
      { to: '/dashboard/posts/table', label: 'Posts Table', icon: <FaTable /> },
      { to: '/dashboard/posts/create', label: 'Create Posts', icon: <FaPlus /> },
      { to: '/dashboard/posts/list', label: 'Posts List', icon: <FaUsers /> },
    ],
  },
];


import { Menu } from 'react-daisyui';
import { FaHome, FaTable, FaUsers } from 'react-icons/fa';
import MenuDropdown from './MenuDropdown';
import MenuLink from './MenuLink';

const menuList = [
  {
    type: 'link',
    to: '/dashboard',
    icon: <FaHome />,
    label: 'Home',
  },
  {
    type: 'dropdown',
    to: '/dashboard/users',
    icon: <FaTable />,
    label: 'Manage Users',
    contentMap: [
      { to: '/dashboard/users/table', label: 'Users Table', icon: <FaTable /> },
      { to: '/dashboard/users/list', label: 'Users List', icon: <FaUsers /> },
      { to: '/dashboard/users/form', label: 'Users Form', icon: <FaTable /> },
    ],
  },
];

const SidebarMenu = () => {
  return (
    <Menu>
      {menuList.map((value, index) => {
        const { type, ...props } = value;

        return (
          <Menu.Item key={index}>{type === 'link' ? <MenuLink {...props} /> : <MenuDropdown {...props} />}</Menu.Item>
        );
      })}
    </Menu>
  );
};
SidebarMenu.propTypes = {};

export default SidebarMenu;

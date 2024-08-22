import { Menu } from 'react-daisyui';
import { FaHome, FaTable, FaUsers } from 'react-icons/fa';
import MenuDropdown from './MenuDropdown';
import MenuLink from './MenuLink';

const menuList = [
  {
    type: 'link',
    to: '#',
    icon: <FaHome />,
    label: 'Home',
  },
  {
    type: 'dropdown',
    to: '/dashboard/users',
    icon: <FaTable />,
    label: 'Manage Users',
    contentMap: [
      { to: '#', label: 'Users Table', icon: <FaTable /> },
      { to: '#', label: 'Users List', icon: <FaUsers /> },
      { to: '#', label: 'Users Charts', icon: <FaTable /> },
    ],
  },
];

const SidebarMenu = () => {
  return (
    <Menu>
      {menuList.map((value, index) => {
        const { type, ...props } = value;

        return (
          <>
            <Menu.Item key={index}>
              {type === 'link' ? (
                <MenuLink
                  key={index}
                  {...props}
                />
              ) : (
                <MenuDropdown
                  key={index}
                  {...props}
                />
              )}
            </Menu.Item>
          </>
        );
      })}
    </Menu>
  );
};
SidebarMenu.propTypes = {};

export default SidebarMenu;

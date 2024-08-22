import { Menu } from 'react-daisyui';
import { FaHome, FaTable, FaUsers } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
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
    to: '/users',
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
        return (
          <>
            <Menu.Item>
              {value.type === 'link' ? (
                <MenuLink
                  key={index}
                  {...value}
                />
              ) : (
                <MenuDropdown
                  key={index}
                  {...value}
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

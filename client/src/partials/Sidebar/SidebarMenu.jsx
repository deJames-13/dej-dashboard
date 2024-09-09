import { Menu } from 'react-daisyui';
import MenuDropdown from './MenuDropdown';
import MenuLink from './MenuLink';
import menuList from './menu';

const SidebarMenu = () => {
  return (
    <Menu>
      {menuList.map((value, index) => {
        const { type, ...props } = value;

        return (
          <Menu.Item key={index}>
            {type === 'dropdown' ? <MenuDropdown {...props} /> : <MenuLink {...props} />}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
SidebarMenu.propTypes = {};

export default SidebarMenu;

import { useToggle } from '@common';
import { CustomSidebar } from '@custom';
import PropTypes from 'prop-types';
import SideContent from './SideContent';

function Sidebar(props) {
  const [pin, togglePin] = useToggle(false);

  return (
    <CustomSidebar
      open={props.visible || pin}
      onClickOverlay={props.toggleVisible(pin)}
      sideClassName={`w-60 md:min-w-60 md:w-80 md:max-w-xs  ${props.visible || pin ? '2xl:block 2xl:relative' : ''} `}
      side={
        <SideContent
          togglePin={togglePin}
          {...props}
        />
      }
      {...props}
    >
      {props.children}
    </CustomSidebar>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  toggleVisible: PropTypes.func,
  side: PropTypes.node,
  noOverlayEvent: PropTypes.bool,
  noOverlay: PropTypes.bool,
};

export default Sidebar;
export { default as SidebarIcons } from './SidebarIcons';

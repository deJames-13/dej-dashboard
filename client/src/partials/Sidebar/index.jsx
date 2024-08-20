import { Sidebar as SidebarComponent, useToggle } from '@common';
import PropTypes from 'prop-types';
import SideContent from './SideContent';

function Sidebar({ children, visible, toggleVisible, ...props }) {
  const [pin, togglePin] = useToggle(false);

  return (
    <SidebarComponent
      open={visible || pin}
      onClickOverlay={toggleVisible(pin)}
      sideClassName={`z-[70] w-60 md:min-w-60 md:w-80 md:max-w-xs  ${visible || pin ? '2xl:block 2xl:relative' : ''} `}
      className="sticky flex-row-reverse max-h-screen overflow-auto 2xl:flex"
      contentClassName="scrollbar-thin 2xl:w-full 2xl:max-h-screen overflow-y-auto transition-all ease-in-out"
      overlayClassName="w-0"
      side={
        <SideContent
          toggleVisible={toggleVisible}
          togglePin={togglePin}
          {...props}
        />
      }
      {...props}
    >
      {children}
    </SidebarComponent>
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

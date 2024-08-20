import { Sidebar } from '@common/components';
import PropTypes from 'prop-types';

function CustomSidebar({ children, side, ...props }) {
  return (
    <Sidebar
      open={props.visible}
      onClickOverlay={props.toggleVisible()}
      className="sticky flex-row-reverse max-h-screen overflow-auto 2xl:flex"
      contentClassName="scrollbar-thin 2xl:w-full 2xl:max-h-screen overflow-y-auto transition-all ease-in-out"
      sideClassName={`w-60 md:min-w-60 md:w-80 md:max-w-xs  ${props.visible ? '2xl:block 2xl:relative' : ''} `}
      overlayClassName="w-0"
      side={side}
      {...props}
    >
      {children}
    </Sidebar>
  );
}

CustomSidebar.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  toggleVisible: PropTypes.func,
  side: PropTypes.node,
  noOverlayEvent: PropTypes.bool,
  noOverlay: PropTypes.bool,
};

export default CustomSidebar;

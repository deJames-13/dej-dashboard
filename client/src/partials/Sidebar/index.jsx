import { useToggle } from '@common';
import { Sidebar as SidebarComponent, TextRainbow } from '@common/components';
import { AuthLogout } from '@features';
import PropTypes from 'prop-types';
import { Menu } from 'react-daisyui';
import { BsPinAngleFill } from 'react-icons/bs';
import { FaBoxes, FaCartPlus, FaHome, FaTable, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideContent = ({ pin, togglePin, toggleVisible, side, noOverlayEvent = false, noOverlay = false }) => {
  return (
    <>
      {!pin && (
        <div
          onClick={toggleVisible()}
          className={`fixed top-0 w-screen h-full max-h-screen overflow-auto ${
            noOverlay ? '' : 'bg-black bg-opacity-50'
          } ${noOverlayEvent ? 'pointer-events-none' : ''} `}
        ></div>
      )}
      <div className="relative flex flex-col w-full h-full overflow-visible">
        <div className="flex items-center w-full gap-2 p-2 bg-base-200">
          <div className="flex-grow ">
            <TextRainbow
              text="Dashboard"
              className="text-lg font-extrabold btn btn-ghost"
              onClick={toggleVisible()}
            />
          </div>

          <button
            className={`hidden 2xl:flex btn btn-primary ${pin ? 'ml-auto' : 'btn-outline'}`}
            onClick={togglePin()}
          >
            <BsPinAngleFill />
          </button>
        </div>
        <div className="flex flex-col flex-grow bg-base-200">
          <div className="divider"></div>

          <Menu>
            <Menu.Item>
              <Link to="#">
                <span className="flex items-center gap-2 font-bold ">
                  <FaHome />
                  Home
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <div className="p-0 m-0 collapse collapse-arrow">
                <input
                  type="checkbox"
                  className="peer"
                />
                <div className="flex items-center collapse-title">
                  <span className="flex items-center gap-2 font-bold">
                    <FaUsers />
                    Manage Users
                  </span>
                </div>
                <div className="collapse-content">
                  <Link to="#">
                    <span className="flex items-center gap-2 px-2 text-sm hover:text-primary hover:font-semibold ">
                      <FaTable />
                      Table
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="flex items-center gap-2 px-2 text-sm hover:text-primary hover:font-semibold ">
                      <FaTable />
                      List
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="flex items-center gap-2 px-2 text-sm hover:text-primary hover:font-semibold ">
                      <FaTable />
                      Charts
                    </span>
                  </Link>
                </div>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="p-0 m-0 collapse collapse-arrow">
                <input
                  type="checkbox"
                  className="peer"
                />
                <div className="flex items-center collapse-title">
                  <span className="flex items-center gap-2 font-bold">
                    <FaCartPlus />
                    Manage Orders
                  </span>
                </div>
                <div className="collapse-content">
                  <Link to="#">
                    <span className="flex items-center gap-2 px-2 text-sm hover:text-primary hover:font-semibold ">
                      <FaTable />
                      Table
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="flex items-center gap-2 px-2 text-sm hover:text-primary hover:font-semibold ">
                      <FaTable />
                      List
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="flex items-center gap-2 px-2 text-sm hover:text-primary hover:font-semibold ">
                      <FaTable />
                      Charts
                    </span>
                  </Link>
                </div>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="p-0 m-0 collapse collapse-arrow">
                <input
                  type="checkbox"
                  className="peer"
                />
                <div className="flex items-center collapse-title">
                  <span className="flex items-center gap-2 font-bold">
                    <FaBoxes />
                    Manage Products
                  </span>
                </div>
                <div className="collapse-content">
                  <Link to="#">
                    <span className="flex items-center gap-2 px-2 text-sm hover:text-primary hover:font-semibold ">
                      <FaTable />
                      Table
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="flex items-center gap-2 px-2 text-sm hover:text-primary hover:font-semibold ">
                      <FaTable />
                      List
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="flex items-center gap-2 px-2 text-sm hover:text-primary hover:font-semibold ">
                      <FaTable />
                      Charts
                    </span>
                  </Link>
                </div>
              </div>
            </Menu.Item>
          </Menu>

          {side}
          <div className="mt-auto">
            <div className="divider"></div>
            <div className="p-4 ">
              <AuthLogout
                color="error"
                variant="outline"
                className="w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SideContent.propTypes = {
  pin: PropTypes.bool,
  togglePin: PropTypes.func,
  toggleVisible: PropTypes.func,
  side: PropTypes.node,
  noOverlayEvent: PropTypes.bool,
  noOverlay: PropTypes.bool,
};

function Sidebar({ children, visible, toggleVisible, side, ...props }) {
  const [pin, togglePin] = useToggle(false);
  const { noOverlayEvent, noOverlay } = props;
  const sideProps = { pin, togglePin, toggleVisible, side, noOverlayEvent, noOverlay };

  return (
    <SidebarComponent
      open={visible || pin}
      onClickOverlay={toggleVisible(pin)}
      className="sticky flex-row-reverse max-h-screen overflow-auto 2xl:flex"
      contentClassName="scrollbar-thin 2xl:w-full 2xl:max-h-screen overflow-y-auto transition-all ease-in-out"
      sideClassName={`w-60 md:min-w-60 md:w-80 md:max-w-xs  ${visible || pin ? '2xl:block 2xl:relative' : ''} `}
      overlayClassName="w-0"
      side={<SideContent {...sideProps} />}
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


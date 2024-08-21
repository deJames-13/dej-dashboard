import { TextRainbow, ThemeToggler } from '@common/components';
import { AuthLogout } from '@features';
import PropTypes from 'prop-types';
import { Button, Dropdown, Navbar } from 'react-daisyui';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuList = () => {
  return (
    <>
      <Link
        to="/dashboard"
        className="btn btn-ghost"
      >
        Inventory
      </Link>
      <Link
        to="/dashboard"
        className="btn btn-ghost"
      >
        Orders
      </Link>
      <Link
        to="/dashboard"
        className="btn btn-ghost"
      >
        Profile
      </Link>
    </>
  );
};
function DashboardHeader({ toggleVisible, visible }) {
  return (
    <>
      <Navbar
        className={`fixed z-[10001] top-0 w-screen bg-base-200 animate__animated ${
          !visible ? 'animate__fadeOutUp' : 'animate__fadeInDown'
        }`}
      >
        <Navbar.Start>
          <Button
            color="primary"
            variant="outline"
            onClick={toggleVisible()}
          >
            <FaArrowAltCircleRight />
          </Button>

          <TextRainbow
            text="ACME"
            className="text-xl font-extrabold btn btn-ghost"
            onClick={toggleVisible()}
          />
          <ThemeToggler />
        </Navbar.Start>
        <Navbar.End>
          <div className="hidden lg:flex">
            <MenuList />
          </div>

          <Dropdown className=" md:hidden">
            <Dropdown.Toggle>
              <FaBars />
            </Dropdown.Toggle>
            <Dropdown.Menu className="border border-gray-400 rounded border-opacity-30 bg-base-200 w-52">
              <MenuList />
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.End>
      </Navbar>
    </>
  );
}

DashboardHeader.propTypes = {
  toggleVisible: PropTypes.func,
  visible: PropTypes.bool,
};

export default DashboardHeader;

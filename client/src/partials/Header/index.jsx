import { TextRainbow, ThemeToggler } from '@common/components';
import { AuthLogout } from '@features';
import { PropTypes } from 'prop-types';
import { Dropdown, Navbar } from 'react-daisyui';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuList = () => {
  return (
    <>
      <Link
        to="/"
        className="btn btn-ghost"
      >
        Home
      </Link>
      <Link
        to="/dashboard"
        className="btn btn-ghost"
      >
        Dashboard
      </Link>
      <Link
        to="/about"
        className="btn btn-ghost"
      >
        About
      </Link>
    </>
  );
};

function Header({ clickLogo }) {
  return (
    <>
      <Navbar className="sticky z-[69] top-0 w-full bg-base-200">
        <Navbar.Start>
          <Dropdown className=" md:hidden">
            <Dropdown.Toggle>
              <FaBars />
            </Dropdown.Toggle>
            <Dropdown.Menu className="border border-gray-400 rounded border-opacity-30 bg-base-200 w-52">
              <MenuList />
            </Dropdown.Menu>
          </Dropdown>
          <TextRainbow
            text="ACME"
            className="text-xl font-extrabold btn btn-ghost"
            onClick={clickLogo}
          />
          <ThemeToggler />
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <MenuList />
        </Navbar.Center>
        <Navbar.End>
          <AuthLogout />
        </Navbar.End>
      </Navbar>
    </>
  );
}

Header.propTypes = {
  clickLogo: PropTypes.func,
};

export default Header;
export { default as DashboardHeader } from './DashboardHeader';

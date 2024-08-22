import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const MenuLink = ({ icon, label, ...props }) => {
  return (
    <Link {...props}>
      <span className="flex items-center gap-2 font-bold transition-transform ease-in-out hover:text-primary hover:text-lg hover:z-10">
        {icon}
        {label}
      </span>
    </Link>
  );
};

MenuLink.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
};

export default MenuLink;

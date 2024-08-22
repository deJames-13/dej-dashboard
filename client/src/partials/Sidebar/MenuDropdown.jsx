import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import MenuLink from './MenuLink';

const MenuDropdown = ({ to, label, icon, contentMap, ...props }) => {
  const navigate = useNavigate();
  return (
    <div
      className="p-0 m-0 font-bold collapse collapse-arrow group"
      {...props}
      onDoubleClick={() => navigate(to)}
    >
      <input
        type="checkbox"
        className="peer"
      />
      <div className="flex items-center gap-2 collapse-title ">
        {icon}
        {label}
      </div>
      <div className="collapse-content">
        {contentMap.map((item, index) =>
          item?.to || item?.label ? (
            <MenuLink
              key={index}
              to={item.to || '#'}
              icon={item?.icon || ''}
              label={item.label}
              className="px-2"
            />
          ) : (
            ''
          )
        )}
      </div>
    </div>
  );
};

MenuDropdown.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  contentMap: PropTypes.array,
};

export default MenuDropdown;

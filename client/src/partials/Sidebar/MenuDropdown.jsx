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
      <div className="flex items-center gap-2 collapse-title py-0">
        {icon}
        {label}
      </div>
      <div className="collapse-content py-0">
        {contentMap.map((item, index) =>
          item?.to || item?.label ? (
            <span key={index}>
              <MenuLink
                to={item.to || '#'}
                icon={item?.icon || ''}
                label={item.label}
                addClass="px-2"
              />
            </span>
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

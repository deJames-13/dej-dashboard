import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import ViewButton from './ViewButton';

const ActionButtons = ({
  onView,
  onEdit,
  onDelete,
  showView = true,
  showEdit = true,
  showDelete = true,
  className = '',
}) => {
  return (
    <div className={'d-flex justify-content-between' + className}>
      {showView && <ViewButton onClick={onView} />}
      {showEdit && <EditButton onClick={onEdit} />}
      {showDelete && <DeleteButton onClick={onDelete} />}
    </div>
  );
};

ActionButtons.propTypes = {
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  showView: PropTypes.bool,
  showEdit: PropTypes.bool,
  showDelete: PropTypes.bool,
  className: PropTypes.string,
};

export default ActionButtons;


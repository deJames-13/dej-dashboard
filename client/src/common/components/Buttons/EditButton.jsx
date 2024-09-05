import PropTypes from 'prop-types';

const EditButton = ({ onClick, text = '', className = '' }) => {
  return (
    <button
      className={`btn btn-primary btn-sm ${className}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
      {text && <span className="ml-2">{text}</span>}
    </button>
  );
};

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default EditButton;


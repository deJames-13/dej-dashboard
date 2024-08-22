import PropTypes from 'prop-types';

function PageTitle({ title, ...props }) {
  return (
    <div className="p-7  border-b border-gray-500 border-opacity-50">
      <div className="h-12 flex items-center ">
        <h1
          className="text-2xl align-middle font-semibold"
          {...props}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;


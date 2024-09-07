import PropTypes from 'prop-types';

function PageTitle({ title, children, ...props }) {
  return (
    <div className="border-b border-gray-500 border-opacity-50 p-7">
      <div className="flex items-center justify-between h-12">
        <h1
          className="text-2xl font-semibold align-middle"
          {...props}
        >
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PageTitle;


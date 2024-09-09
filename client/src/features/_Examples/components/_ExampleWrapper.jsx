import { PageTitle } from '@partials';
import PropTypes from 'prop-types';
import { Button } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';

function _ExampleWrapper({ children, title, prevUrl }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full">
        <PageTitle title={title}>
          <Button
            color="primary"
            className="my-4"
            onClick={() => navigate(prevUrl || '/dashboard/_examples')}
          >
            Back
          </Button>
        </PageTitle>
        <div className="p-8">{children}</div>
      </div>
    </>
  );
}

_ExampleWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  prevUrl: PropTypes.string,
};

export default _ExampleWrapper;


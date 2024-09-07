import PropTypes from 'prop-types';
import React from 'react';

function ExampleView({ example }) {
  console.log(example);
  return <div></div>;
}

ExampleView.propTypes = {
  example: PropTypes.object,
};

export default ExampleView;


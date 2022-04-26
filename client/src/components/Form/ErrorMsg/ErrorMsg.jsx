/*  */
import React from 'react';
import PropTypes from 'prop-types';

function TextError({ children }) {
  return <div className="alert-danger">{children}</div>;
}

export default TextError;

TextError.propTypes = {
  children: PropTypes.node.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClick }) {
  return (
    <button className="btn btn-primary" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

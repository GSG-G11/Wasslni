import React from 'react';
import PropTypes from 'prop-types';

function Title({ children }) {
  return (
    <h2 className="text-primary">{children}</h2>

  );
}
Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;

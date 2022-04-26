import React from 'react';
import { PropTypes } from 'prop-types';
import './Card.css';

function Card({ children }) {
  return (
    <div className="Card m-5">
      {children}
    </div>
  );
}
export default Card;
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

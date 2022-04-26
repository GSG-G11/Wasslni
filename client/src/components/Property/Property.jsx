import React from 'react';
import propTypes from 'prop-types';
import './Property.css';

function Property({ keyWord, value }) {
  return (
    <div className="parcelContainer">
      <span className="keyWord">
        {keyWord}
        :
      </span>
      <span className="value">{value}</span>
    </div>
  );
}

Property.propTypes = {
  keyWord: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
};

export default Property;

import React from 'react';
import propTypes from 'prop-types';
import './Property.css';

function Property({ keyWord, value }) {
  return (
    <div className="parcel-container m-3">
      <span>
        {keyWord}
        :
      </span>
      <span>{value}</span>
    </div>
  );
}

Property.propTypes = {
  keyWord: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
};

export default Property;

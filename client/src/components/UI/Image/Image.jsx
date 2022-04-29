import React from 'react';
import { propTypes } from 'prop-types';

// eslint-disable-next-line react/prop-types
function Image({ alt, src }) {
  return (
    <img alt={alt} src={src} />
  );
}

Image.propTypes = {
  // alt: propTypes.string.isRequired,
  // src: propTypes.string.isRequired,
};

export default Image;

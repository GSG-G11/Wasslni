import React from 'react';
import { propTypes } from 'prop-types';

function Image({ alt, src }) {
  return (
    <div>
      <img alt={alt} src={src} />
    </div>
  );
}

Image.propTypes = {
  alt: propTypes.string.isRequired,
  src: propTypes.string.isRequired,
};

export default Image;

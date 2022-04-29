import React from 'react';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';

function SubmitButton({ title }) {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={!isValid}>
      {title}
    </button>
  );
}

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubmitButton;

import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './Input.css';

import PropTypes from 'prop-types';
import TextError from '../../Form/ErrorMsg/ErrorMsg';

function Input({
  name, type, placeholder, onChange, handleChange, ...props
}) {
  return (
    <div className=" m-4">

      <Field
        id={name}
        className="form-control"
        name={name}
        type={type}
        placeholder={placeholder}
        onchange={onChange}
        handleChange={handleChange}
        {...props}
      />

      <ErrorMessage name={name} component={TextError} className="error-message" />
    </div>
  );
}

Input.propTypes = {

  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Input;

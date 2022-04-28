/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './Input.css';

import PropTypes from 'prop-types';
import TextError from '../../Form/ErrorMsg/ErrorMsg';

function Input({
  name, type, placeholder,
}) {
  return (

    <div className="form-label-group">

      <Field type={type} className="form-control" name={name} id={name} placeholder={placeholder} />

      <label htmlFor={name}>
        {placeholder}
        {' '}
      </label>

      <ErrorMessage name={name} component={TextError} className="error-message" />
    </div>
  );
}

Input.propTypes = {

  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,

};
export default Input;

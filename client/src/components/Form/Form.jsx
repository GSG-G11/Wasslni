import React from 'react';
import { PropTypes } from 'prop-types';
import { Formik } from 'formik';
import './Form.css';

function Form({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => children }
    </Formik>
  );
}

Form.propTypes = {
  initialValues: PropTypes.func.isRequired,
  validationSchema: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;

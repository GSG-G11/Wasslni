import React from 'react';
import { propTypes } from 'prop-types';
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
      {() => <>{children}</>}
    </Formik>
  );
}

Form.propTypes = {
  initialValues: propTypes.func.isRequired,
  validationSchema: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
};

export default Form;

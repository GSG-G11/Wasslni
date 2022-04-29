import React from 'react';
import { PropTypes } from 'prop-types';
import { Formik, Form as FormikForm } from 'formik';
import './Form.css';

function Form({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  onChange,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      onChange={onChange}
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};

export default Form;

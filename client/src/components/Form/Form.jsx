import React from 'react';
import { PropTypes } from 'prop-types';
import { Formik, Form as FormikForm } from 'formik';
import './Form.css';

function Form({
  initialValues,
  // eslint-disable-next-line react/prop-types
  validationSchema,
  onSubmit,
  children,
  onChange,
  onBlur,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      onChange={onChange}
      onBlur={onBlur}
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Form;

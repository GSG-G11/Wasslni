import { Field } from 'formik';
import React from 'react';

function Select() {
  return (
    <Field name="isSeller" as="select" className="form-select" aria-label="Default select example">
      <option value="true">بائع</option>
      <option value="false">مشتري</option>
    </Field>
  );
}

export default Select;

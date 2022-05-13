import { Field } from 'formik';
import React from 'react';

function Select() {
  return (

    <Field name="isSeller" as="select" className="form-select" aria-label="Default select example">
      <option value label="بائع">
        بائع
      </option>
      <option value={false} label="مشتري">
        مشتري
      </option>
    </Field>
  );
}

export default Select;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './AddParcel.css';
import { Form, Input, SubmitButton } from '../../components';

function AddParcelPage() {
  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        name: '', phoneNumber: '', price: '', image: '',
      }}
    >
      <Input name="name" type="text" placeholder="ادخل اسم الطرد" />
      <Input name="phoneNumber" type="text" placeholder="ادخل رقم هاتف الزبون" />
      <Input name="price" type="text" placeholder="ادخل سعر الطرد" />
      <input type="file" className="form-control" id="customFile" />
      <SubmitButton title="click" />
    </Form>
  );
}
export default AddParcelPage;

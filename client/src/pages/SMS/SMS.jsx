/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Input } from '../../components';
import { smsValidation } from '../../utils';
import { SubmitButton } from '../../components/Form';

function SMS() {
  const onSubmit = (e) => {
    fetch('/api/v1/auth/sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: e.phoneNumber,
      }),
    });
  };
  return (
    <div>
      <Form initialValues={{ phoneNumber: '' }} validationSchema={smsValidation} onSubmit={onSubmit}>
        <Input name="phoneNumber" type="text" placeholder=" أدخل رقم جوالك" />
        <SubmitButton title="تأكيد" />
      </Form>
    </div>
  );
}
export default SMS;

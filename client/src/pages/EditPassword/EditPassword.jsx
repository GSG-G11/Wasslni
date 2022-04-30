import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Title, Form, Input, TextError,
} from '../../components';
import { SubmitButton } from '../../components/Form';

function EditPassword() {
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    if (e.newPassword === e.oldPassword) {
      setErrMessage('كلمة المرور القديمة وكلمة المرور الجديدة متشابهتان ');
    } else {
      try {
        const response = await axios.put('/api/v1/profile/password', e);
        navigate('/signin');
      } catch (err) {
        if (err.response.status === 400) {
          setErrMessage('كلمة المرور غير صحيحة');
        } else if (err.response.status === 500) {
          navigate('/error');
        }
      }
    }
  };
  return (
    <div>
      <Title>تغيير كلمة المرور</Title>
      <Form
        initialValues={{ newPassword: '', oldPassword: '' }}
        onSubmit={onSubmit}
      >

        <Input
          name="oldPassword"
          type="password"
          placeholder="ادخل كلمة المرور القديمة"
          className="pass-input"
        />
        <Input
          name="newPassword"
          type="password"
          placeholder="ادخل كلمة المرور الجديدة"
          className="pass-input"
        />

        {errMessage && <TextError>{errMessage}</TextError>}

        <SubmitButton title="تأكيد" />
      </Form>
    </div>
  );
}

export default EditPassword;

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Form, Image, Input, Logo, TextError, Title,
} from '../../components';
import { smsValidation } from '../../utils';
import { SubmitButton } from '../../components/Form';

import './SMS.css';

function SMS() {
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    try {
      const response = await axios.post('/api/v1/auth/sms', {
        phoneNumber: `+970${e.phoneNumber}`,
      });
      navigate('/signup');
    } catch (err) {
      if (err.response.status === 400) {
        setErrMessage('هذا الرقم موجود بالفعل ');
      } else if (err.response.status === 500) {
        navigate('/error');
      }
    }
  };
  return (
    <>
      <Logo />

      <Title>إنشاء حساب</Title>

      <Form
        initialValues={{ phoneNumber: '' }}
        validationSchema={smsValidation}
        onSubmit={onSubmit}
      >

        <Input
          name="phoneNumber"
          type="text"
          placeholder="ادخل رقم هاتفك مبدوء ب 59"
        />

        {errMessage && <TextError>{errMessage}</TextError>}

        <SubmitButton title="تأكيد" />
      </Form>
      <Link to="/signin" className="mt-2">
        هل لديك حساب بالفعل ؟
      </Link>
    </>

  );
}
export default SMS;

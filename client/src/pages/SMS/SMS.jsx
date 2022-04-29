/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Form, Image, Input, Logo, TextError, Title,
} from '../../components';
import { smsValidation } from '../../utils';
import { SubmitButton } from '../../components/Form';
import sms from '../../assets/sms.jpg';
import './SMS.css';

function SMS() {
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    try {
      const response = await axios.post('/api/v1/auth/sms', { phoneNumber: `+970${e.phoneNumber}` });
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
    <div className="container-fluid mh-100">
      <div className="row">
        <div className="h-25" />
        <div className="col-sm-1">
          <Logo />
        </div>
        <div className="col-sm-6">
          <div className="h-50">
            <div className="h-50" />
            <div className="h-sm-25">
              <Title>إنشاء حساب</Title>
            </div>
          </div>
          <Form initialValues={{ phoneNumber: '' }} validationSchema={smsValidation} onSubmit={onSubmit}>
            <Input name="phoneNumber" type="text" placeholder="(55 55 55 599) أدخل رقم جوالك" />
            {errMessage && <TextError>{errMessage}</TextError>}
            <SubmitButton title="تأكيد" />
          </Form>
          <Link to="/signin" className="mt-2">هل لديك حساب بالفعل ؟</Link>
        </div>
        <div className="col-sm-5">
          <div className="row">
            <Image src={sms} alt="صورة الغلاف" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SMS;

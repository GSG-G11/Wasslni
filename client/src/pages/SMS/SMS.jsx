/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Form, Input, Logo, TextError, Title,
} from '../../components';
import { smsValidation } from '../../utils';
import { SubmitButton } from '../../components/Form';
import UserContext from '../../context/userContext';
import './SMS.css';

function SMS() {
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const onSubmit = async (e) => {
    try {
      const response = await axios.post('/api/v1/auth/sms', {
        phoneNumber: `+970${e.phoneNumber}`,
      });
      setUser({ ...user, phoneNumber: e.phoneNumber });
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
    <div className="background">
      <div className="sms-container">
        <Logo />
        <div className="big-container">
          <div className="card-sms">
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
                className="sms-input"
              />

              {errMessage && <TextError>{errMessage}</TextError>}

              <SubmitButton title="تأكيد" />
            </Form>
            <Link to="/login" className="mt-2">
              هل لديك حساب بالفعل ؟
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SMS;

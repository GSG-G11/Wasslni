import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Form, Input, Logo, TextError, Title,
} from '../../components';
import { getUserInfo, loginValidation } from '../../utils';
import { SubmitButton } from '../../components/Form';
import UserContext from '../../context/userContext';
import http from '../../services/http';

function Login() {
  const [errMessage, setErrMessage] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const onSubmit = async (e) => {
    try {
      const response = await http.post('/api/v1/auth/login', {
        phoneNumber: `+970${e.phoneNumber}`, password: e.password,
      });
      if (response.message === 'login successfully') {
        const userInfo = getUserInfo();
        setUser({
          username: userInfo.userName,
          phoneNumber: userInfo.phoneNumber,
          image: userInfo.urlImg,
          lat: userInfo.lat,
          lng: userInfo.lng,
          isSeller: userInfo.role,
          isLoggedIn: true,
          id: userInfo.id,
        });
        navigate('/parcels');
      }
    } catch (err) {
      if (err.response.status === 400) {
        setErrMessage('كلمة المرور أو رقم الهاتف غير صحيح');
      }
    }
  };
  return (
    <div className="sms-container">
      <Logo />
      <div className="big-container">
        <div className="card-sms">
          <Title>تسجيل الدخول</Title>

          <Form
            initialValues={{ phoneNumber: '', password: '' }}
            validationSchema={loginValidation}
            onSubmit={onSubmit}
          >

            <Input
              name="phoneNumber"
              type="text"
              placeholder="ادخل رقم هاتفك مبدوء ب 59"
              className="sms-input"

            />
            <Input
              name="password"
              type="password"
              placeholder="ادخل كلمة المرور"
              className="sms-input"
            />

            {errMessage && <TextError>{errMessage}</TextError>}

            <SubmitButton title="تأكيد" />
          </Form>
          <Link to="/verify" className="mt-2">
            ليس لديك حساب ؟
          </Link>
        </div>

      </div>
    </div>

  );
}
export default Login;

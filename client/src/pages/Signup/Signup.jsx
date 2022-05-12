import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Logo, Title, Input, Form, TextError, Map,
} from '../../components';
import { SubmitButton } from '../../components/Form';
import Select from '../../components/UI/Select/Select';
import { signupValidation, getBase64Image, getUserInfo } from '../../utils';
import UserContext from '../../context/userContext';
import './Signup.css';

function Signup() {
  const { user, setUser } = useContext(UserContext);

  const [img, setImage] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [imgError, setImgError] = useState('');
  const navigate = useNavigate();

  const onChangeImage = async (e) => {
    try {
      const file = await getBase64Image(e.target.files[0]);
      setImgError('');
      setImage(file);
    } catch (error) {
      setImgError(error.message);
    }
  };

  const onSubmit = async ({
    code, phoneNumber, userName, password, isSeller,
  }) => {
    try {
      if (!img) {
        setErrMessage('الرجاء اختيار صورة');
        return;
      }
      if (!user.lat) {
        setErrMessage('الرجاء اختيار موقع على الخريطة');
        return;
      }
      if (isSeller === 'true') {
        isSeller = true;
      } else {
        isSeller = false;
      }
      const response = await axios.post('/api/v1/auth/signup', {
        code,
        phoneNumber: `+970${phoneNumber}`,
        userName,
        password,
        isSeller,
        img,
        lat: user.lat,
        lng: user.lng,
      });
      const userInfo = getUserInfo();
      setUser({
        userName: userInfo.userName,
        img: userInfo.urlImg,
        isSeller: userInfo.role,
        lat: userInfo.lat,
        lng: userInfo.lng,
        isLoggedIn: true,
      });
      navigate('/parcles');
    } catch (error) {
      if (error.response.status === 406) {
        setErrMessage('رمز التأكيد الذي أدخلته غير صحيح');
      }
    }
  };

  return (
    <div className="signUp-container">
      <Logo />
      <div className="signup-title">
        <Title>إنشاء حساب</Title>
      </div>

      <Form
        className="Form"
        initialValues={{
          code: '', phoneNumber: user.phoneNumber, userName: '', password: '', isSeller: 'true',
        }}
        validationSchema={signupValidation}
        onSubmit={onSubmit}
      >
        <div className="signUp-body">

          <div className="input-filed">

            <Input
              name="code"
              type="text"
              placeholder="أدخل رمز التأكيد"
            />
            <Input
              name="phoneNumber"
              type="text"
              placeholder="أدخل رقم هاتفك"
            />
            <Input
              name="userName"
              type="text"
              placeholder="أدخل اسمك"
            />
            <Input
              name="password"
              type="password"
              placeholder="أدخل كلمة المرور"
            />
            <Select
              name="isSeller"
            />

            <label htmlFor="customFile" style={{ marginTop: '20px' }}>اختر صورة الطرد</label>
            <input name="image" type="file" className="form-control" id="customFile" onChange={onChangeImage} style={{ marginBottom: '20px' }} />
            {imgError && <TextError>{imgError}</TextError>}
          </div>

          <div className="map-div">
            <div className="h4">
              قم بتحديد موقعك
            </div>
            <Map setPosition />
          </div>

        </div>
        <SubmitButton title="تأكيد" className="button" />
        {errMessage && <TextError>{errMessage}</TextError>}
      </Form>

    </div>

  );
}

export default Signup;

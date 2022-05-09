import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Logo, Title, Input, Form, TextError, Map,
} from '../../components';
import { SubmitButton } from '../../components/Form';
import Select from '../../components/UI/Select/Select';
import { signupValidation, getBase64Image } from '../../utils';
import UserContext from '../../context/userContext';
import './Signup.css';

function Signup() {
  const { user, setUser } = useContext(UserContext);

  const [img, setImage] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [imgError, setimgError] = useState('');
  const navigate = useNavigate();

  const onChangeImage = async (e) => {
    try {
      const file = await getBase64Image(e.target.files[0]);
      setimgError('');
      setImage(file);
    } catch (error) {
      setimgError(error.message);
    }
  };

  const onSubmit = async ({
    code, phoneNumber, userName, password, isSeller,
  }) => {
    try {
      // if (phoneNumber !== user.phoneNumber) {
      //   setErrMessage('الرجاء ادخال الرقم بشكل صحيح');
      //   return;
      // }
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
      setUser({
        ...user, userName, img, isSeller, isLoggedIn: true,
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
      <div className="">
        <div className="">
          <Title>إنشاء حساب</Title>

          <Form
            initialValues={{
              code: '', phoneNumber: user.phoneNumber, userName: '', password: '', isSeller: 'true',
            }}
            validationSchema={signupValidation}
            onSubmit={onSubmit}
          >

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

            <label htmlFor="customFile" style={{ marginBottom: '5px' }}>اختر صورة الطرد</label>
            <input name="image" type="file" className="form-control" id="customFile" onChange={onChangeImage} />
            {imgError && <TextError>{imgError}</TextError>}
            <Map setPosition className="map" />
            <SubmitButton title="تأكيد" />
            {errMessage && <TextError>{errMessage}</TextError>}

          </Form>

        </div>

      </div>
    </div>

  );
}

export default Signup;

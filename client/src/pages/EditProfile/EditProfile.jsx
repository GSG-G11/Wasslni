import React, { useState, useContext, useEffect } from 'react';
import './EditProfile.css';

import { useNavigate } from 'react-router-dom';

import {
  Title, Form, Input, TextError, Toasts,
} from '../../components';
import { SubmitButton } from '../../components/Form';
import {
  editPasswordValidation,
  editProfileValidaiton,
  getBase64Image,
  getUserInfo,
} from '../../utils';
import UserContext from '../../context/userContext';
import Map from '../../components/Map/Map';
import http from '../../services/http';

function EditProfile() {
  const { user, setUser } = useContext(UserContext);
  const {
    username, image, lat, lng,
  } = user;

  let { phoneNumber } = user;

  phoneNumber = phoneNumber.replace(/^\+970/, '');
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');
  const [passwordErrMessage, setPasswordErrMessage] = useState('');
  const [imgErr, setImgErr] = useState();
  const [img, setImg] = useState(undefined);
  const [oldLat, setOldLat] = useState(lat);
  const [oldLng, setOldLng] = useState(lng);
  const [toast, setToast] = useState(false);

  const onChangeImage = async (e) => {
    try {
      const file = await getBase64Image(e.target.files[0]);
      setImgErr('');
      setImg(file);
    } catch (err) {
      setImg('');
      setImgErr(err.message);
    }
  };

  const handleSubmitInfo = async (values) => {
    if (imgErr) {
      setErrMessage(' الرجاء اختيار صورة');
      return;
    }
    if (
      oldLat === lat
      && oldLng === lng
      && !img
      && values.username === username
      && values.phoneNumber === phoneNumber
    ) {
      setErrMessage('لا يوجد تغييرات');
      return;
    }

    try {
      const response = await http.put('/api/v1/profile', {
        userName: values.username,
        phoneNumber: `+970${values.phoneNumber}`,
        img,
        lat,
        lng,
      });

      if (response.message === 'edit profile successfully') {
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
        setToast(true);
        setErrMessage('');
        setTimeout(() => {
          setToast(false);
        }, 2000);
      }
    } catch (err) {
      if (err.response.status === 400) {
        setErrMessage('رقم الهاتف موجود بالفعل');
      }
    }
  };
  const handleSumbitPassword = async (values) => {
    if (values.newPassword === values.oldPassword) {
      setPasswordErrMessage(
        'كلمة المرور القديمة وكلمة المرور الجديدة متشابهتان ',
      );
    } else {
      try {
        const response = await http.put('/api/v1/profile/password', values);
        if (response.message === 'password edited') {
          const logoutResponse = await http.delete('/api/v1/auth/logout');
          setUser({});
          navigate('/login');
        }
      } catch (err) {
        if (err.response.status === 400) {
          setPasswordErrMessage('كلمة المرور غير صحيحة');
        }
      }
    }
  };
  return (
    <div className="pages-container">
      {toast && (
        <Toasts
          title="تم بنجاح"
          body="تم تعديل بياناتك بنجاح"
          color="#30d94d"
        />
      )}
      <Title>تعديل الملف الشخصي</Title>
      <div className=" mt-5">
        <div className="h3 mb-4">تعديل معلومات التواصل</div>
        <Form
          initialValues={{ username, phoneNumber }}
          onSubmit={handleSubmitInfo}
          validationSchema={editProfileValidaiton}
        >
          <div className="edit-profile-container">
            <div className="edit-profile-inputs-container">
              <div className="h5 mb-4">تعديل الصورة الشخصية</div>

              <input
                name="image"
                type="file"
                className="form-control mb-2"
                id="customFile"
                onChange={onChangeImage}
              />
              {imgErr && <TextError>{imgErr}</TextError>}
              {!img && !imgErr && (
                <img
                  src={image}
                  alt="profile"
                  className="edit-profile-img mb-3"
                />
              )}
              {img && (
                <img
                  src={img}
                  alt="profile"
                  className="edit-profile-img mb-3"
                />
              )}
              <Input name="username" type="text" placeholder="اسم المستخدم" />
              <Input name="phoneNumber" type="text" placeholder="رقم الهاتف " />
            </div>
            <div className="editProfile-map">
              <div className="h5 mb-4">تعديل موقع التوصيل </div>

              <Map setPosition />
            </div>
          </div>
          <SubmitButton title="تأكيد" />
          <div className="mt-3 w-75 m-auto">
            {errMessage && <TextError>{errMessage}</TextError>}
          </div>
        </Form>
      </div>

      <div className="edit-password-container mt-5">
        <div className="h3 mb-4">تغيير كلمة السر</div>
        <Form
          initialValues={{ newPassword: '', oldPassword: '' }}
          onSubmit={handleSumbitPassword}
          validationSchema={editPasswordValidation}
        >
          <div className="edit-password-form">
            <Input
              name="oldPassword"
              type="password"
              placeholder="ادخل كلمة المرور القديمة"
            />
            <Input
              name="newPassword"
              type="password"
              placeholder="ادخل كلمة المرور الجديدة"
            />
            <SubmitButton title="تأكيد" />
          </div>

          {passwordErrMessage && <TextError>{passwordErrMessage}</TextError>}
        </Form>
      </div>
    </div>
  );
}
export default EditProfile;

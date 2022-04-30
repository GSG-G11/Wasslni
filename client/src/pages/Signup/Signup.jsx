/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import {
  Logo, Title, Input, Form,
} from '../../components';
import { SubmitButton } from '../../components/Form';
import Select from '../../components/UI/Select/Select';
import { signupValidation } from '../../utils';
import UserContext from '../../context/userContext';

function Signup() {
  const { user, setUser } = useContext(UserContext);

  const onSubmit = () => {
    console.log('wessal');
  };

  return (
    <div className="signUp-container">
      <Logo />
      <div className="big-container">
        <div className="input-field">
          <Title>إنشاء حساب</Title>

          <Form
            initialValues={{
              codeNumber: '', phoneNumber: user.phoneNumber, yourName: '', password: '', isSeller: '', img: '',
            }}
            validationSchema={signupValidation}
            onSubmit={onSubmit}
          >

            <Input
              name="codeNumber"
              type="text"
              placeholder="أدخل رمز التأكيد"

            />
            <Input
              name="phoneNumber"
              type="text"
              placeholder="أدخل رقم هاتفك"
            />
            <Input
              name="yourName"
              type="text"
              placeholder="أدخل اسمك"
            />
            <Input
              name="password"
              type="text"
              placeholder="أدخل كلمة المرور"
            />
            <Select
              name="isSeller"
            />

            <Input
              name="img"
              type="file"
              placeholder="اختر صورة"
            />

            <SubmitButton title="تأكيد" />
          </Form>

        </div>

      </div>
    </div>

  );
}

export default Signup;

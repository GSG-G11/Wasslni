import * as Yup from 'yup';

const signupValidation = Yup.object().shape({
  code: Yup.string()
    .required('Required'),
  phoneNumber: Yup.string().min(9, 'الرقم يجب ان يتكون من 9 أرقام').max(9, 'الرقم يجب ان يتكون من 9 أرقام').matches(/^[0-9]*$/, 'الرقم يجب ان يتكون من 9 أرقام')
    .required(' هذه الخانة مطلوبة'),
  userName: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
  isSeller: Yup.string()
    .required('Required'),
  img: Yup.string()
    .required('Required'),
});

export default signupValidation;

import * as Yup from 'yup';

const signupValidation = Yup.object().shape({
  code: Yup.string()
    .required('Required'),
  phoneNumber: Yup.string()
    .required('Required'),
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

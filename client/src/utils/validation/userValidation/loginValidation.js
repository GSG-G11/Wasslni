import * as Yup from 'yup';

const loginValidation = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

export default loginValidation;

import * as Yup from 'yup';

const loginValidation = Yup.object().shape({
  phoneNumber: Yup.string().min(9, 'الرقم يجب ان يتكون من 9 أرقام').max(9, 'الرقم يجب ان يتكون من 9 أرقام').matches(/^[0-9]*$/, 'الرقم يجب ان يتكون من 9 أرقام')
    .required(' هذه الخانة مطلوبة'),
  password: Yup.string()
    .required(' هذه الخانة مطلوبة'),
});

export default loginValidation;

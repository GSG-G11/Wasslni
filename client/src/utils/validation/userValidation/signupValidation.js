import * as Yup from 'yup';

const signupValidation = Yup.object().shape({
  code: Yup.string()
    .min(6, 'الكود يجب أن يتكون من 6 أرقام').max(6, 'الرقم يجب أن يتكون من 6 أرقام').required(' هذه الخانة مطلوبة'),
  phoneNumber: Yup.string().min(9, 'الرقم يجب ان يتكون من 9 أرقام').max(9, 'الرقم يجب ان يتكون من 9 أرقام').matches(/^[0-9]*$/, 'الرقم يجب ان يتكون من 9 أرقام')
    .required(' هذه الخانة مطلوبة'),
  userName: Yup.string().min(3, 'الاسم لا يقل عن 3 أحرف').max(10, 'الاسم لا يزيد عن 10 أحرف').required(' هذه الخانة مطلوبة'),
  password: Yup.string().min(6, 'كلمة المرور تتكون من 6 أرقام').max(6, 'كلمة المرور تتكون من 6 أرقام').required('هذه الخانة مطلوبة'),
  isSeller: Yup.boolean()
    .required('هذه الخانة مطلوبة'),
  img: Yup.string()
    .required('هذه الخانة مطلوبة'),
});

export default signupValidation;

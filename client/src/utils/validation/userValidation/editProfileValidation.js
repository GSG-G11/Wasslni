import * as Yup from 'yup';

const editProfileValidaiton = Yup.object().shape({
  username: Yup.string().min(3, 'الاسم يجب ان يتكون من 3 حروف على الاقل').required('هذه الخانة مطلوبة'),
  phoneNumber: Yup.string().min(9, 'الرقم يجب ان يتكون من 9 أرقام').max(9, 'الرقم يجب ان يتكون من 9 أرقام').matches(/^[0-9]*$/, 'الرقم يجب ان يتكون من 9 أرقام'),
});
export default editProfileValidaiton;

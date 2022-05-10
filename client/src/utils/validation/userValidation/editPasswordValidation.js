import * as Yup from 'yup';

const editPasswordValidation = Yup.object().shape({
  oldPassword: Yup.string()
    .required('هذه الخانة مطلوبة'),
  newPassword: Yup.string().min(6, 'كلمة المرور يجب ان تتكون من 6 حروف على الاقل').required('هذه الخانة مطلوبة'),
});
export default editPasswordValidation;

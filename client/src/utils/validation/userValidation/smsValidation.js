import * as Yup from 'yup';

const smsValidation = Yup.object().shape({
  phoneNumber: Yup.string().min(9, 'الرقم يجب ان يتكون من 9 أرقام').max(9, 'الرقم يجب ان يتكون من 9 أرقام').required('هذه الخانة مطلوبة '),
});
export default smsValidation;

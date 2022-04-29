import * as Yup from 'yup';

const smsValidation = Yup.object().shape({
  phoneNumber: Yup.string().required('Required'),
});
export default smsValidation;

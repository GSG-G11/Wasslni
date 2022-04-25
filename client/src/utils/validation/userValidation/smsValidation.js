import * as Yup from 'yup';

const smsValidation = Yup.object({
  phoneNumber: Yup.string.length(13, 'must be 13 numbers no more no less'),
});
export default smsValidation;

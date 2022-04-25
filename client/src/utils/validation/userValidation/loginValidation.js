import * as Yup from 'yup';

const loginValidation = Yup.object({
  phoneNumber: Yup.string.length(13, 'must be 13 numbers no more no less'),
  password: Yup.string.required(),
});
export default loginValidation;

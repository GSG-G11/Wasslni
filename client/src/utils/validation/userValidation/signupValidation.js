import * as Yup from 'yup';

const signupValidation = Yup.object({
  code: Yup.string().length(6, 'must be 6 numbers no more no less').required(),
  phoneNumber: Yup.string.length(13, 'must be 13 numbers no more no less'),
  userName: Yup.string().required(),
  password: Yup.string.required(),
  isSeller: Yup.boolean().required(),
  img: Yup.string().required(),
});
export default signupValidation;

import joi from 'joi';

const signUpSchema = joi.object({
  userName: joi.string().required(),
  password: joi.string().required(),
  phoneNumber: joi.string().length(13).required(),
  lng: joi.number().min(34.23).max(34.56).required(),
  lat: joi.number().min(31.25).max(31.6).required(),
  img: joi.string(),
  isSeller: joi.boolean().required(),
  code: joi.string().length(6).required(),
});

export default signUpSchema;

import joi from 'joi';

const loginSchema = joi.object({
  phoneNumber: joi.string().length(13).required(),
  password: joi.string().required(),
});

export default loginSchema;

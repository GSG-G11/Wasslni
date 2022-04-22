import joi from 'joi';

const editPasswordSchema = joi.object({
  oldPassword: joi.string().required(),
  newPassword: joi.string().required(),
});

export default editPasswordSchema;

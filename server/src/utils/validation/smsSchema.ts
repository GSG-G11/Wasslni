import joi from 'joi';

const smsSchema = joi.object({
  phoneNumber: joi.string().length(13).required(),
});

export default smsSchema;

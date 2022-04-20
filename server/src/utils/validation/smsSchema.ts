import joi from 'joi';

const smsSchema = joi.object({
  phoneNumber: joi.string().required(),
});

export default smsSchema;

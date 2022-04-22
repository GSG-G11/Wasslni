import joi from 'joi';

const addParcelSchema = joi.object({
  name: joi.string().required(),
  deliveryPrice: joi.number().required(),
  price: joi.number().required(),
  status: joi.boolean().required(),
  phoneNumber: joi.string().length(13).required(),
  image: joi.string().required(),
});
export default addParcelSchema;

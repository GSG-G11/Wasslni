import joi from 'joi';

const editProfileInfoSchema = joi.object({
  userName: joi.string().required(),
  phoneNumber: joi.string().length(13).required(),
  lng: joi.number().min(34.23).max(34.56).required(),
  lat: joi.number().min(31.25).max(31.6).required(),
  img: joi.string(),
});

export default editProfileInfoSchema;

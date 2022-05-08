import { signupValidation, smsValidation, loginValidation } from './validation';
import getBase64Image from './getBase64';
import staticData from './staticData';
import { addParcelSchema } from './validation/ParcelValidation';
import getUserInfo from './userInfo/getUserInfo';

export {
  signupValidation, smsValidation,
  loginValidation, getBase64Image,
  staticData, addParcelSchema, getUserInfo,
};

/* eslint-disable consistent-return */
import { signUpDB } from '../../database/queries';
import {
  signUpSchema, CustomError, verifySMS, hashPassword, cloudinaryImg, createToken,
} from '../../utils';

const signUp = async (req, res, next) => {
  const {
    phoneNumber, code, img, userName, password, lng, lat, isSeller,
  } = req.body;
  try {
    await signUpSchema.validateAsync(req.body);
    const status = await verifySMS(phoneNumber, code);
    if (status === 'approved') {
      const hashedPassword = await hashPassword(password);
      const urlImg = await cloudinaryImg(img);
      // eslint-disable-next-line max-len
      const { rows } = await signUpDB(userName, phoneNumber, urlImg, hashedPassword, lng, lat, isSeller);
      const { id } = rows[0];
      const role = rows[0].isSeller;
      const token = await createToken({ id, role });
      res.cookie('token', token, {
        httpOnly: true,
      })
        .status(201).json({ message: 'signup succeeded' });
    } else {
      next(CustomError('your code dose not match the code was send to your phone', 406));
    }
  } catch (error) {
    if (error.details) {
      next(CustomError(error.details[0].message, 400));
    } else if (error.message === 'cloudinary error') {
      next(CustomError('cloudinary can not upload photo', 503));
    } else if (error.status === 404) {
      next(CustomError('twilio can not compare code', 503));
    }
    return next(error);
  }
};
export default signUp;

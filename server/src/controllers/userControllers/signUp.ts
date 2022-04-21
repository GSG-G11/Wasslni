/* eslint-disable consistent-return */
import { signUpDB } from '../../database/queries';
import {
  signUpSchema, verifySMS, hashPassword, cloudinaryImg, createToken,
} from '../../utils';

const signUp = async (req, res) => {
  const {
    phoneNumber, code, img, userName, password, lng, lat, isSeller,
  } = req.body;
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
    res.status(201).cookie('token', token, {
      httpOnly: true,
    })
      .json({ message: 'signup succeeded' });
  } else {
    return res.status(406).json({ message: 'your code dose not match the code was send to your phone' });
  }
};
export default signUp;

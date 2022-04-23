import { Response, Request } from 'express';
import { signUpDB } from '../../database/queries';
import {
  signUpSchema, verifySMS, hashPassword, cloudinaryImg, createToken,
} from '../../utils';

const signUp = async (req:Request, res:Response) => {
  const {
    phoneNumber, code, img, userName, password, lng, lat, isSeller,
  } = req.body;
  await signUpSchema.validateAsync(req.body);
  const status = await verifySMS(phoneNumber, code);
  if (status === 'approved') {
    const hashedPassword = await hashPassword(password);
    const urlImg = await cloudinaryImg(img);
    const { rows } = await signUpDB({
      userName, phoneNumber, urlImg, password: hashedPassword, lng, lat, isSeller,
    });
    const { id } = rows[0];
    const role = rows[0].isseller;
    const token = await createToken({ id, role });
    return res.status(201).cookie('token', token, {
      httpOnly: true,
    })
      .json({ message: 'signup succeeded' });
  }
  return res.status(406).json({ message: 'your code does not match the code was send to your phone' });
};
export default signUp;

import { Request, Response } from 'express';
import { editProfileQuery, getUserById } from '../../database/queries';
import {
  cloudinaryImg, comparePassword, createToken, editProfileInfoSchema,
} from '../../utils';

const editProfile = async (req: Request, res: Response) => {
  const { userId: id }:any = req;
  const {
    userName, img, phoneNumber, password, lat, lng,
  } = req.body;
  await editProfileInfoSchema.validateAsync(req.body);
  const { rows, rowCount } = await getUserById(id);
  if (!rowCount) {
    return res.status(400).json({ message: 'user not found' });
  }

  const { password: hashedPassword, isseller: role } = rows[0];
  const isMatch: Boolean = await comparePassword(password, hashedPassword);
  if (!isMatch) {
    return res.status(400).json({ message: 'password wrong' });
  }
  const urlImg = await cloudinaryImg(img);

  await editProfileQuery({
    id, userName, urlImg, lat, lng, phoneNumber,
  });
  const token = await createToken({
    id, role, phoneNumber, userName, lng, lat, urlImg,
  });
  return res.status(201).cookie('token', token, {
    httpOnly: false,
  }).json({ message: 'edit profile successfully' });
};

export default editProfile;

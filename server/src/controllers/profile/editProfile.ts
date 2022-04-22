import { Request, Response } from 'express';
import { editProfileQuery, getUserById } from '../../database/queries';
import { cloudinaryImg, comparePassword, editProfileInfoSchema } from '../../utils';

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

  const hashedPassword = rows[0].password;
  const isMatch: Boolean = await comparePassword(password, hashedPassword);
  if (!isMatch) {
    return res.status(400).json({ message: 'password wrong' });
  }
  const urlImg = await cloudinaryImg(img);

  const { rowCount: edited } = await editProfileQuery({
    id, userName, urlImg, lat, lng, phoneNumber,
  });
  if (!edited) {
    return res.status(400).json({ message: 'edit profil failed' });
  }
  return res.status(200).json({ message: 'edit profile successfully' });
};

export default editProfile;

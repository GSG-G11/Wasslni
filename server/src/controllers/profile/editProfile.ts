import { Request, Response } from 'express';
import {
  checkPhoneNumber,
  editProfileQuery,
  getUserById,
} from '../../database/queries';
import { cloudinaryImg, createToken, editProfileInfoSchema } from '../../utils';

const editProfile = async (req: Request, res: Response) => {
  const { userId: id } = req;
  const {
    userName, img: newImg, phoneNumber, lat, lng,
  } = req.body;

  await editProfileInfoSchema.validateAsync(req.body);
  const { rows, rowCount } = await getUserById(id);
  if (!rowCount) {
    return res.status(400).json({ message: 'user not found' });
  }

  const {
    isseller: role,
    image: oldImg,
    phonenumber: oldPhoneNumber,
  } = rows[0];
  if (oldPhoneNumber !== phoneNumber) {
    const { rowCount: existedUser } = await checkPhoneNumber(phoneNumber);
    if (existedUser) {
      return res.status(400).json({ message: 'phone number already exists' });
    }
  }
  let urlImg = oldImg;
  if (newImg) {
    urlImg = await cloudinaryImg(newImg);
  }

  await editProfileQuery({
    id,
    userName,
    urlImg,
    lat,
    lng,
    phoneNumber,
  });
  const token = await createToken({
    id,
    role,
    phoneNumber,
    userName,
    lng,
    lat,
    urlImg,
  });
  return res
    .status(201)
    .cookie('token', token, {
      httpOnly: false,
    })
    .json({ message: 'edit profile successfully' });
};

export default editProfile;

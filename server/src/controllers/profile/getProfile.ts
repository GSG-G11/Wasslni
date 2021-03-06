import { Response, Request } from 'express';
import { getUserById } from '../../database/queries';

const getProfile = async (req:Request, res: Response) => {
  const { userId } = req;

  const { rows } = await getUserById(userId);
  if (!rows[0]) {
    return res.status(400).json({ message: 'user not found' });
  }
  const {
    name, phonenumber: phoneNumber, lng, lat, isseller: isSeller, image,
  } = rows[0];
  return res.json({
    message: 'success',
    data: [{
      name, phoneNumber, lng, lat, isSeller, image,
    }],
  });
};

export default getProfile;

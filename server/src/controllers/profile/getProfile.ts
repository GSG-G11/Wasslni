import { getUserById } from '../../database/queries';

const getProfile = async (req: any, res: any) => {
  const { userId } = req;

  const { rows } = await getUserById(userId);
  if (!rows[0]) {
    return res.status(400).json({ message: 'user not found' });
  }
  console.log(rows[0]);
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

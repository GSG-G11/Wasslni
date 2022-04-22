import { addParcelQuery, checkPhoneNumber, getUserById } from '../../database/queries';
import { addParcelSchema, cloudinaryImg } from '../../utils';

// eslint-disable-next-line consistent-return
const addParcel = async (req, res) => {
  const { userId } = req;
  const { rows } = await getUserById(userId);
  const { isseller, id: sellerId } = rows[0];
  if (!isseller) {
    return res.status(400).json('you is not a seller ,  so you can not add a parcel ');
  }
  const {
    name, deliveryPrice, price, status, phoneNumber, image,
  } = req.body;
  await addParcelSchema.validateAsync(req.body);
  const { rowCount } = await checkPhoneNumber(phoneNumber);
  if (!rowCount) {
    return res.status(400).json({ message: ' buyer phone number was not found' });
  }
  const urlImg = await cloudinaryImg(image);
  // addParcelQuery();
};
export default addParcel;

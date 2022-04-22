import { checkPhoneNumber } from '../../database/queries';
import { addParcelSchema, cloudinaryImg } from '../../utils';

const addParcel = async (req, res) => {
  const {
    name, deliveryPrice, price, status, phoneNumber, image,
  } = req.body;
  await addParcelSchema.validateAsync(req.body);
  const { rowCount } = await checkPhoneNumber(phoneNumber);
  if (rowCount) {
    return res.status(400).json({ message: ' buyer phone number was not found' });
  }
  const urlImg = await cloudinaryImg(image);
};
export default addParcel;

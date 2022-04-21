import { sendSMS, smsSchema } from '../../utils';
import { checkPhoneNumber } from '../../database/queries';

const SMS = async (req, res) => {
  const { phoneNumber } = req.body;
  await smsSchema.validateAsync(req.body);
  const { rowCount } = await checkPhoneNumber(phoneNumber);
  if (rowCount) {
    return res.status(400).json({ message: 'user already registered ' });
  }
  await sendSMS(phoneNumber);
  return res.status(200).json({ message: 'message send to user', data: phoneNumber });
};
export default SMS;

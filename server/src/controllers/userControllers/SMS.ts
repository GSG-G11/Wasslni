import { sendSMS, smsSchema, CustomError } from '../../utils';
import { checkPhoneNumber } from '../../database/queries';

const SMS = async (req, res, next) => {
  const { phoneNumber } = req.body;
  try {
    await smsSchema.validateAsync(req.body);
    const { rowCount } = await checkPhoneNumber(phoneNumber);
    if (rowCount) {
      throw CustomError('user already registered ', 400);
    }
    await sendSMS(phoneNumber);
    return res.status(200).json({ message: 'message send to user', data: phoneNumber });
  } catch (error) {
    if (error.details) {
      return next(CustomError(error.details[0].message, 400));
    } if (error.status === 404) {
      return next(CustomError('twilio can not send message ', 503));
    }
    return next(error);
  }
};
export default SMS;

import { smsSchema, CustomError } from '../../utils';
import { sendSMS } from '../../utils/twilio';
import checkPhoneNumber from '../../database/queries';

const SMS = (req, res, next) => {
  const { phoneNumber } = req.body;
  smsSchema.validateAsync(req.body)
    .then(({ phoneNumberDB }) => checkPhoneNumber(phoneNumberDB))
    .then((data) => {
      if (!data.rows.length) {
        sendSMS(res, next, phoneNumber);
      }
      throw new CustomError('phone number is EXISTS', 401);
    })
    .catch((error) => next(error));
};
export default SMS;

import { Twilio } from 'twilio';

import * as dotenv from 'dotenv';

dotenv.config();

const client = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

const sendSMS = async (req, res, next) => {
  const { phoneNumber } = req.body;
  try {
    const verification = await client
      .verify.services(process.env.TWILIO_VERIFY_SERVICES).verifications.create({
        to: phoneNumber,
        channel: 'sms',
      });
    if (verification.status === 'pending') {
      res.status(201).json({ message: 'code sent and your account need to verification' });
    } else {
      res.status(400).json({ message: 'Error sending verification code' });
    }
  } catch (err) {
    next(err);
  }
};

export default sendSMS;

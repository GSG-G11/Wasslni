import { Twilio } from 'twilio';

import * as dotenv from 'dotenv';

dotenv.config();

const client = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

const verifySMS = async (req, res, next) => {
  const { phoneNumber, code } = req.body;
  try {
    const verification = await client.verify
      .services(process.env.TWILIO_VERIFY_SERVICES)
      .verificationChecks.create({ to: `${phoneNumber}`, code });
    if (verification.status === 'approved') {
      next();
    } else {
      res.status(400).json({
        message: 'Verification failed',
      });
    }
  } catch (error) {
    next(error);
  }
};

export default verifySMS;

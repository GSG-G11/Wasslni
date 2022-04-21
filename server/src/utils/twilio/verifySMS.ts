import { Twilio } from 'twilio';

import * as dotenv from 'dotenv';

dotenv.config();

const client = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

const verifySMS = async (phoneNumber, code) => new Promise((resolve, reject) => {
  client.verify
    .services(process.env.TWILIO_VERIFY_SERVICES)
    .verificationChecks.create({ to: `${phoneNumber}`, code }, (error, verification) => {
      if (error) {
        reject(error);
      } else {
        resolve(verification.status);
      }
    });
});

export default verifySMS;

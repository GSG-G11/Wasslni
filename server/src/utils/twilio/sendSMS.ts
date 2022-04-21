import { Twilio } from 'twilio';

import * as dotenv from 'dotenv';

dotenv.config();

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = (phoneNumber) => new Promise((resolve, reject) => {
  client.verify
    .services(process.env.TWILIO_VERIFY_SERVICES)
    .verifications.create({
      to: phoneNumber,
      channel: 'sms',
    }, (error, verification) => {
      if (error) {
        reject(error);
      } else {
        resolve(verification.status);
      }
    });
});

export default sendSMS;

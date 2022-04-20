import * as dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';

dotenv.config();

const createToken = (payLoad) => new Promise((resolve, reject) => {
  sign(payLoad, process.env.PRIVATE_KEY, (err, token) => {
    if (err) {
      return reject(err);
    }

    return resolve(token);
  });
});

export default createToken;

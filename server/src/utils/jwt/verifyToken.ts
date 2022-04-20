import { verify } from 'jsonwebtoken';

const verifyToken = (token, privateKey) => new Promise((resolve, reject) => {
  verify(token, privateKey, (err, decoded) => {
    if (err) return reject(err);

    return resolve(decoded);
  });
});

export default verifyToken;

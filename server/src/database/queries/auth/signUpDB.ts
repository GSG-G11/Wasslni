import connection from '../../config/connection';

const signUpDB = (userName, phoneNumber, urlImg, password, lng, lat, isSeller) => connection.query({
  text: 'INSERT INTO users (name, phonenumber, image, password, lng, lat, isseller) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
  values: [userName, phoneNumber, urlImg, password, lng, lat, isSeller],
});

export default signUpDB;

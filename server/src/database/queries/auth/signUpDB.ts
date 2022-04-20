import connection from '../../config/connection';

const signUpDB = (name, phoneNumber, image, password, lng, lat, isSeller) => connection.query({
  text: 'INSERT INTO users (name, phonenumber, image, password, lng, lat, isseller) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
  values: [name, phoneNumber, image, password, lng, lat, isSeller],
});

export default signUpDB;

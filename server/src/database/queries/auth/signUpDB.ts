import connection from '../../config/connection';

const signUpDB = (name, phoneNumber, image, password, location, isSeller) => connection.query({
  text: 'INSERT INTO users (name, phonenumber, image, password, location, isseller) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
  values: [name, phoneNumber, image, password, location, isSeller],
});

export default signUpDB;

import connection from '../../config/connection';

const checkPhoneNumber = (phoneNumber) => connection.query({
  text: 'SELECT * FROM users WHERE phonenumber = $1',
  values: [phoneNumber],
});

export default checkPhoneNumber;

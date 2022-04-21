import connection from '../../config/connection';

const checkPhoneNumber = (phoneNumberDB) => connection.query({
  text: 'SELECT * FROM users WHERE phonenumber = $1',
  values: [phoneNumberDB],
});

export default checkPhoneNumber;

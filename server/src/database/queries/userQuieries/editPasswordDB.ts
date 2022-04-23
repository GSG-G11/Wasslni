import connection from '../../config/connection';

const editPasswordDB = ({ hashedNewPassword, userId }) => connection.query({
  text: 'UPDATE users SET password = $1 WHERE (id = $2)',
  values: [hashedNewPassword, userId],
});

export default editPasswordDB;

import connection from '../../config/connection';

const editPasswordDB = ({ hashedNewPassword, id }) => connection.query({
  text: 'UPDATE users SET password = $1 WHERE (id = $2)',
  values: [hashedNewPassword, id],
});

export default editPasswordDB;

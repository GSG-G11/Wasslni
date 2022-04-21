import connection from '../../config/connection';

const getUserById = (userId) => connection.query({
  text: 'SELECT * FROM users WHERE id = $1',
  values: [userId],
});
export default getUserById;

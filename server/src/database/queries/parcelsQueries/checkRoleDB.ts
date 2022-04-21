import connection from '../../config/connection';

const checkRoleDB = (id) => connection.query({
  text: 'SELECT * FROM users WHERE id = $1',
  values: [id],
});

export default checkRoleDB;

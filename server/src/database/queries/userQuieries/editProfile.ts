import connection from '../../config/connection';

const editProfileQuery = ({
  id, userName, urlImg, lat, lng, phoneNumber,
}) => connection.query({
  text: 'UPDATE users SET name = $2, image = $3, lat = $4, lng = $5, phonenumber = $6 WHERE id = $1 RETURNING *',
  values: [id, userName, urlImg, lat, lng, phoneNumber],
});

export default editProfileQuery;

import connection from '../../config/connection';

const getParcelsQuery = (id) => connection.query({
  text: 'SELECT name,status,id FROM parcel WHERE (buyer_id = $1 OR seller_id = $1)',
  values: [id],
});
export default getParcelsQuery;

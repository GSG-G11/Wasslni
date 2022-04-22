import connection from '../../config/connection';

const parcelDetailsDB = ({ id, userId }) => connection.query({
  text: 'SELECT * FROM parcel WHERE id = $1 AND (buyer_id = $2 OR seller_id = $2)',
  values: [id, userId],
});

export default parcelDetailsDB;

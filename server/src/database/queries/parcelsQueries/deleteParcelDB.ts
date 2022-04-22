import connection from '../../config/connection';

const deleteParcelDB = (id, userId) => connection.query({
  text: 'DELETE FROM parcel WHERE id = $1 AND seller_id = $2',
  values: [id, userId],
});

export default deleteParcelDB;

import connection from '../../config/connection';

const parcelDetailsDB = ({ id, userId }) => connection.query({
  text: 'SELECT * FROM route inner join parcel  on (parcel.id = route.parcel_id) WHERE parcel.id = $1 AND (parcel.buyer_id = $2 OR parcel.seller_id = $2)',
  values: [id, userId],
});

export default parcelDetailsDB;

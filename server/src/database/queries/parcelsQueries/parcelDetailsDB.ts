import connection from '../../config/connection';

const parcelDetailsDB = ({ id, userId }) => connection.query({
  text: ' SELECT route.distance_km , route.duration_mins , route.coordinates , users.name , parcel.deliveryprice , parcel.price , parcel.image , parcel.status , parcel.created_at , users.phonenumber , users.lng, users.lat FROM route inner join parcel  on (parcel.id = route.parcel_id) inner join users on (parcel.buyer_id = users.id ) WHERE parcel.id = $1 AND (parcel.buyer_id = $2 OR parcel.seller_id = $2)',
  values: [id, userId],
});

export default parcelDetailsDB;

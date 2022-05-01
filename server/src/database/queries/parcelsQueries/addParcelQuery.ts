import connection from '../../config/connection';

const addParcelQuery = ({
  name, deliveryPrice, price, urlImg, buyerId, sellerId,
}) => connection.query({
  text: 'INSERT INTO parcel (name, deliveryprice, price, image , buyer_id, seller_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
  values: [name, deliveryPrice, price, urlImg, buyerId, sellerId],
});
export default addParcelQuery;

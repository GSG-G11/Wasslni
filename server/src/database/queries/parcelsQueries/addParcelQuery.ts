import connection from '../../config/connection';

const addParcelQuery = ({
  name, deliveryPrice, price, status, image, buyerId, sellerId,
}) => connection.queries({
  text: 'INSERT INTO parcel (name, deliveryprice, price, status, image , buyer_id, seller_id) VALUES (1$ , 2$, 3$ , 4$ , 5$ , 6$ , 7$) RETURNING *',
  values: [name, deliveryPrice, price, status, image, buyerId, sellerId],
});
export default addParcelQuery;

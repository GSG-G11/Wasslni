import connection from '../../config/connection';

const changeStatusQuery = ({ sellerId, ParcelId }) => connection.query({
  text: 'UPDATE parcel SET status = true WHERE (id=$1 AND seller_id=$2)',
  values: [ParcelId, sellerId],
});
export default changeStatusQuery;

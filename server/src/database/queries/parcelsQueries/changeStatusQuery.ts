import connection from '../../config/connection';

const changeStatusQuery = ({ sellerId, parcelId }) => connection.query({
  text: 'UPDATE parcel SET status = true WHERE (id=$1 AND seller_id=$2)',
  values: [parcelId, sellerId],
});
export default changeStatusQuery;

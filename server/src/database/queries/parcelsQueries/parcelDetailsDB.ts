import connection from '../../config/connection';

const parcelDetails = (id) => connection.query({
  text: 'SELECT * FROM parcel WHERE id = $1',
  values: [id],
});

export default parcelDetails;

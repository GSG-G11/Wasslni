import connection from '../../config/connection';

const addRouteQuery = ({
  distanceKM, durationMINS, coordinates, parcelId,
}) => connection.query({
  text: 'INSERT INTO route (distance_KM, duration_MINS, coordinates , parcel_id) VALUES ($1, $2, $3 , $4) RETURNING *',
  // eslint-disable-next-line max-len
  values: [Number((distanceKM / 1000).toFixed(2)), Number((durationMINS / 60).toFixed(2)), JSON.stringify(coordinates), parcelId],
});

export default addRouteQuery;

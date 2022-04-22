import { getParcelsQuery } from '../../database/queries';

const getParcels = async (req:any, res:any) => {
  const { userId } = req;

  const { rows, rowCount } = await getParcelsQuery(userId);
  if (rowCount === 0) {
    return res.status(404).json({ message: 'no parcels found' });
  }
  return res.status(200).json({ message: 'parcels uploaded', data: rows[0] });
};
export default getParcels;

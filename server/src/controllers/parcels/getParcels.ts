import { Response, Request } from 'express';
import { getParcelsQuery } from '../../database/queries';

const getParcels = async (req:Request, res:Response) => {
  const { userId } = req;

  const { rows, rowCount } = await getParcelsQuery(userId);
  if (!rowCount) {
    return res.status(404).json({ message: 'no parcels found' });
  }

  return res.status(200).json({ message: 'parcels uploaded', data: rows });
};
export default getParcels;

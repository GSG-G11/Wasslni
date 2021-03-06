import { Response, Request } from 'express';
import { parcelDetailsDB } from '../../database/queries';

const parcelDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req;
  const { rowCount, rows } = await parcelDetailsDB({ id, userId });
  if (!rowCount) {
    return res.status(404).json({ message: 'Parcel not found' });
  }
  return res.status(200).json({ message: 'parcels uploaded successfully', data: rows[0] });
};

export default parcelDetails;

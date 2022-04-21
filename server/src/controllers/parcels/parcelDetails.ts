import parcelDetailsDB from '../../database/queries/parcelsQueries';

const parcelDetails = async (req: any, res: any) => {
  const { id } = req.params;
  const { rows } = await parcelDetailsDB(id);
  if (rows.length === 0) {
    return res.status(404).json({ message: 'Parcel not found' });
  }
  return res.status(200).json({ message: 'Parcel found', data: rows[0] });
};

export default parcelDetails;

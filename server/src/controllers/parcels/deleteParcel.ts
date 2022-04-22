import { deleteParcelDB, parcelDetailsDB } from '../../database/queries';

const deleteParcel = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;
  const { rowCount, rows } = await parcelDetailsDB(id, userId);
  if (!rowCount) {
    return res.status(404).json({ message: 'No Parcel !' });
  } if (rows[0].status) {
    return res.status(400).json({ message: 'the parcel delivered' });
  }
  await deleteParcelDB(id, userId);
  return res.status(200).json({ message: 'parcel deleted' });
};

export default deleteParcel;

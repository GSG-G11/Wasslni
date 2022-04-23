import { changeStatusQuery } from '../../database/queries';

const changeStatus = async (req:any, res:any) => {
  const { userId: sellerId } = req;
  const { id: parcelId } = req.params;
  await changeStatusQuery({ sellerId, parcelId });
  return res.status(200).json({ message: 'status has changed' });
};
export default changeStatus;

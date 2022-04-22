import { changeStatusQuery } from '../../database/queries';

const changeStatus = async (req:any, res:any) => {
  const { userId: sellerId } = req;
  const { id } = req.params;
  const ParcelId = +id;
  const { rows, rowCount } = await changeStatusQuery({ sellerId, ParcelId });
  if (!rowCount) {
    return res.status(400).json({ Message: 'status not change' });
  }
  return res.status(200).json({ Message: 'status has changed', data: rows[0] });
};
export default changeStatus;

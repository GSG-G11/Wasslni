import * as dotenv from 'dotenv';
import { verifyToken } from '../utils';

dotenv.config();

const checkSeller = async (req: any, res: any, next: any) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const decoded: any = await verifyToken(token, process.env.PRIVATE_KEY);
  const { id, role } = decoded;

  if (!role) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  req.userId = id;
  return next();
};

export default checkSeller;

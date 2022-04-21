import * as dotenv from 'dotenv';
import { verifyToken } from '../utils';

dotenv.config();

const checkAuth = async (req: any, res: any, next: any) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const decoded: any = await verifyToken(token, process.env.PRIVATE_KEY);
  const { id } = decoded;
  req.userId = id;
  return next();
};

export default checkAuth;

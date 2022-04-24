import { Response, Request, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import { verifyToken } from '../utils';

dotenv.config();

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const decoded: any = await verifyToken(token, process.env.PRIVATE_KEY);
  const { id, role } = decoded;
  req.userId = id;
  req.role = role;
  return next();
};

export default checkAuth;

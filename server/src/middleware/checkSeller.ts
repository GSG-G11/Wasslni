import { Response, Request, NextFunction } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const checkSeller = async (req: Request, res: Response, next: NextFunction) => {
  const { role } = req;
  if (!role) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  return next();
};

export default checkSeller;

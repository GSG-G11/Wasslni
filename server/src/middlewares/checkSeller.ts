import * as dotenv from 'dotenv';
import { CustomError, verifyToken } from '../utils';

dotenv.config();

const checkSeller = async (req: any, res: any, next: any) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new CustomError('You are not authorized', 401);
    }
    const decoded:any = await verifyToken(token, process.env.PRIVATE_KEY);
    const { id, isSeller } = decoded;

    if (!isSeller) {
      throw new CustomError('You are not authorized', 401);
    }
    req.userId = id;
    next();
  } catch (error) {
    next(error);
  }
};

export default checkSeller;

import { Response, Request } from 'express';

const logout = (req: Request, res: Response) => {
  res.clearCookie('token');
  return res.status(200).json({ message: 'logout successfully' });
};

export default logout;

import { Response, Request, NextFunction } from 'express';

// eslint-disable-next-line no-unused-vars
const clientError = (req: Request, res: Response, next:NextFunction) => {
  res.status(404).json({ message: 'Page Not Found' });
};

export default clientError;

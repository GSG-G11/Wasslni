import { Response, Request, NextFunction } from 'express';

const asyncMiddleware = (handler) => async (req:Request, res:Response, next:NextFunction) => {
  try {
    await handler(req, res, next);
  } catch (error) {
    next(error);
  }
};

export default asyncMiddleware;

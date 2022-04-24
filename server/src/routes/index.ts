/* eslint-disable max-len */
import { Router } from 'express';

import authRouter from './authRouter';
import profileRouter from './profileRouter';
import parcelRouter from './parcelRouter';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/parcels', parcelRouter);

export default router;

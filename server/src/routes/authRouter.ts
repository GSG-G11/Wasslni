import { Router } from 'express';
import {
  login, logout, signUp, SMS,
} from '../controllers';
import { asyncMiddleware } from '../middleware';

const router = Router();

router.post('/sms', asyncMiddleware(SMS));
router.post('/signup', asyncMiddleware(signUp));
router.post('/login', asyncMiddleware(login));
router.delete('/logout', asyncMiddleware(logout));

export default router;

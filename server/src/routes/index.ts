import { Router } from 'express';
import { signUp, SMS, login } from '../controllers';
import { asyncMiddleware } from '../middleware';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.post('/sms', asyncMiddleware(SMS));
router.post('/signup', asyncMiddleware(signUp));
router.post('/login', asyncMiddleware(login));

export default router;

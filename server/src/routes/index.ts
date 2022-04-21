import { Router } from 'express';
import { signUp, SMS, login } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.post('/sms', SMS);
router.post('/signup', signUp);
router.post('/login', login);

export default router;

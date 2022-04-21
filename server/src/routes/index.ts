import { Router } from 'express';
import { signUp, SMS } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.post('/sms', SMS);
router.post('/signup', signUp);

export default router;

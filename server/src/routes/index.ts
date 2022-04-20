import { Router } from 'express';
import SMS from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.post('/sms', SMS);
// router.post('/verifySMS');

export default router;

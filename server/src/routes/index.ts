import { Router } from 'express';
import { sendSMS, verifySMS } from '../utils/twilio';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.post('/signup', sendSMS);
router.post('/verifySMS', verifySMS);

export default router;

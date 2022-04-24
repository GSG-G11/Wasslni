import { Router } from 'express';
import { editPassword, editProfile, getProfile } from '../controllers';
import { asyncMiddleware, checkAuth } from '../middleware';

const router = Router();

router.use(asyncMiddleware(checkAuth));
router.put('/', asyncMiddleware(editProfile));
router.get('/', asyncMiddleware(getProfile));
router.put('/password', asyncMiddleware(editPassword));

export default router;

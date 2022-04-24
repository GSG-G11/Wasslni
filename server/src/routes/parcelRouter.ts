import { Router } from 'express';
import {
  addParcel, changeStatus, deleteParcel, getParcels, parcelDetails,
} from '../controllers';
import { asyncMiddleware, checkAuth, checkSeller } from '../middleware';

const router = Router();

router.use(asyncMiddleware(checkAuth));
router.get('/:id', asyncMiddleware(parcelDetails));
router.get('/', asyncMiddleware(getParcels));
router.use(asyncMiddleware(checkSeller));
router.put('/status/:id', asyncMiddleware(changeStatus));
router.post('/', asyncMiddleware(addParcel));
router.delete('/:id', asyncMiddleware(deleteParcel));

export default router;

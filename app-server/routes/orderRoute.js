import express from 'express';
import * as OrderController from '../controllers/order';
const router = express.Router();
router.post('/', OrderController.create);

export default router;
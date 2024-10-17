import express from 'express';
import { createLoan, getLoans, updateLoanStatus } from '../controllers/loanController';
import { auth, authorize } from '../middleware/auth';

const router = express.Router();

router.post('/', auth, createLoan);
router.get('/', auth, getLoans);
router.put('/:id/status', auth, authorize('verifier', 'admin'), updateLoanStatus);

export default router;
import { Request, Response } from 'express';
import Loan, { ILoan } from '../models/Loan';

export const createLoan = async (req: Request, res: Response) => {
  try {
    const { amount, reason } = req.body;
    const userId = req.user!.id;

    const loan: ILoan = new Loan({ userId, amount, reason });
    await loan.save();

    res.status(201).json(loan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating loan', error });
  }
};

export const getLoans = async (req: Request, res: Response) => {
  try {
    const loans: ILoan[] = await Loan.find().populate('userId', 'name email');
    res.status(200).json(loans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching loans', error });
  }
};

export const updateLoanStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const verifierId = req.user!.id;

    const loan = await Loan.findByIdAndUpdate(
      id,
      { status, verifierId },
      { new: true }
    );

    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }

    res.status(200).json(loan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating loan status', error });
  }
};

// src/components/LoanList.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';

const loans = [
  { id: 1, amount: '₦50,000', date: 'June 09, 2021', status: 'Pending' },
  { id: 2, amount: '₦100,000', date: 'June 07, 2021', status: 'Verified' },
  { id: 3, amount: '₦100,000', date: 'June 02, 2021', status: 'Rejected' },
  { id: 4, amount: '₦100,000', date: 'May 27, 2021', status: 'Approved' },
];

const statusColors = {
  Pending: 'warning',
  Verified: 'success',
  Rejected: 'error',
  Approved: 'primary',
};

const LoanList = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loans.map((loan) => (
            <TableRow key={loan.id}>
              <TableCell>{loan.amount}</TableCell>
              <TableCell>{loan.date}</TableCell>
              <TableCell>
                <Chip label={loan.status} color={statusColors[loan.status]} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LoanList;

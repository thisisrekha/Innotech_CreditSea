// src/components/VerifierPage.js
import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';
import Sidebar from './Sidebar';

const loans = [
  { id: 1, borrower: 'John Okoh', amount: '₦50,000', status: 'Pending' },
  { id: 2, borrower: 'Jane Doe', amount: '₦100,000', status: 'Verified' },
  { id: 3, borrower: 'James Smith', amount: '₦80,000', status: 'Rejected' },
  { id: 4, borrower: 'Emily Johnson', amount: '₦120,000', status: 'Approved' },
];

const statusColors = {
  Pending: 'warning',
  Verified: 'success',
  Rejected: 'error',
  Approved: 'primary',
};

const VerifierPage = () => {
  const stats = {
    loans: 50,
    cashReceived: '1,000,000',
    cashDisbursed: '550,000',
    activeUsers: 200,
    repaidLoans: 30,
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar stats={stats} />
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        <Typography variant="h4" gutterBottom>Verifier Dashboard</Typography>
        <Typography variant="h6" gutterBottom>Loans to be Verified</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Borrower</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>{loan.borrower}</TableCell>
                  <TableCell>{loan.amount}</TableCell>
                  <TableCell>
                    <Chip label={loan.status} color={statusColors[loan.status]} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default VerifierPage;

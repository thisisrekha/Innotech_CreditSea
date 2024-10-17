// src/components/UserDashboard.js
import React, { useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import LoanFormModal from './LoanFormModal';
import Sidebar from './Sidebar';
import LoanList from './LoanList';

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = {
    loans: 50,
    cashReceived: '1,000,000',
    cashDisbursed: '550,000',
    activeUsers: 200,
    repaidLoans: 30,
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar stats={stats} />
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        <Typography variant="h4" gutterBottom>User Dashboard</Typography>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>Get A Loan</Button>
        <LoanList />
        <LoanFormModal open={isModalOpen} handleClose={handleCloseModal} />
      </Box>
    </Box>
  );
};

export default UserDashboard;

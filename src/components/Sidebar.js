// src/components/Sidebar.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Sidebar = ({ stats }) => {
  return (
    <Box sx={{ backgroundColor: '#003c58', color: '#fff', padding: '20px', height: '100vh', width: '250px' }}>
      <Typography variant="h5" gutterBottom>CREDIT APP</Typography>
      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="body1">Cash Received: ₦{stats.cashReceived}</Typography>
        <Typography variant="body1">Loans: {stats.loans}</Typography>
        <Typography variant="body1">Cash Disbursed: ₦{stats.cashDisbursed}</Typography>
        <Typography variant="body1">Repaid Loans: {stats.repaidLoans}</Typography>
        <Typography variant="body1">Active Users: {stats.activeUsers}</Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;

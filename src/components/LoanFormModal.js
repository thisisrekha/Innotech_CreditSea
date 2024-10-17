// src/components/LoanFormModal.js
import React from 'react';
import { Modal, Box } from '@mui/material';
import LoanApplicationForm from './LoanApplicationForm'; // Import your form component

const LoanFormModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        width: 400,  // Adjust the width as needed
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        margin: 'auto',
        marginTop: '100px', // Adjust to position the modal vertically
      }}>
        <LoanApplicationForm />
      </Box>
    </Modal>
  );
};

export default LoanFormModal;

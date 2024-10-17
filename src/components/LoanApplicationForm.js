import React, { useState } from 'react';
import { TextField, Button, Box, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import './LoanApplicationForm.css';  // Custom CSS for extra styling

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    loanAmount: '',
    loanTenure: '',
    employmentStatus: '',
    reason: '',
    employmentAddress: '',
    acceptedTerms: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      acceptedTerms: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log(formData);
  };

  return (
    <Box className="loan-application-form">
      <Typography variant="h5" className="form-title">Apply for a Loan</Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full name as it appears on bank account"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="How much do you need?"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Loan tenure (in months)"
              name="loanTenure"
              value={formData.loanTenure}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Employment status"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Reason for loan"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Employment address"
              name="employmentAddress"
              value={formData.employmentAddress}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox checked={formData.acceptedTerms} onChange={handleCheckboxChange} />}
              label="I have read the important information and accept the terms."
            />
          </Grid>

          <Grid item xs={12} className="submit-btn-container">
            <Button variant="contained" color="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LoanApplicationForm;

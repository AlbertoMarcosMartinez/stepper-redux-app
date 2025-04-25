import React from 'react';
// import { Box, TextField, Button } from '@mui/material';

interface Step2PlanProps {
  onNext: () => void;
}

const Step2Plan: React.FC<Step2PlanProps> = ({ onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      
      


      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ minWidth: 200 }}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

export default Step2Plan;
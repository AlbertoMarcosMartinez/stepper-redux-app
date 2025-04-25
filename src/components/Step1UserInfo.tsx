import React from 'react';
import { Box, TextField, Button } from '@mui/material';

interface Step1UserInfoProps {
  onNext: () => void;
}

const Step1UserInfo: React.FC<Step1UserInfoProps> = ({ onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Nombre"
        margin="normal"
        required
        name="firstName"
      />
      <TextField
        fullWidth
        label="Apellido"
        margin="normal"
        required
        name="lastName"
      />
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        required
        type="email"
        name="email"
      />
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

export default Step1UserInfo;
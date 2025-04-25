import React from 'react';
import StepperForm from './components/stepperForm';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <h1>Multi-Step Form</h1>
        <StepperForm />
      </Container>
    </>
  );
}

export default App;
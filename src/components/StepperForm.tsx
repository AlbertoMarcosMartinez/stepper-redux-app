import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Box, Paper } from '@mui/material';
// Ensure the following components exist in src/components/
// If not, you can create stub components temporarily
import Step1UserInfo from './Step1UserInfo';
import Step2Plan from './Step2Plan';
import Step3Payment from './Step3Payment';
import Step4Review from './Step4Review';
import Step5ThankYou from './Step5ThankYou';

const steps = ['Información', 'Plan', 'Pago', 'Revisión', 'Gracias'];

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Step1UserInfo onNext={handleNext} />;
      case 1:
        return <Step2Plan onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <Step3Payment onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Step4Review onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <Step5ThankYou />;
      default:
        return null;
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mt={4}>{getStepContent(activeStep)}</Box>
    </Paper>
  );
};

export default StepperForm;
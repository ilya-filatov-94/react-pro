import { Box, Button, Alert } from '@mui/material';
import { useSubscriptionWizard } from '../model';
import { StepOneForm } from './StepOneForm';
import { StepTwoForm } from './StepTwoForm';

export const WizardForm = () => {
  const {
    step,
    email,
    emailError,
    isPending,
    state,
    handleNext,
    handleBack,
    handleEmailChange,
    formAction,
  } = useSubscriptionWizard();

  if (state.success) {
    return (
      <Box sx={{ textAlign: 'center', p: 4 }}>
        <Alert
          severity="success"
          sx={{ mb: 2 }}
        >
          {state.message}
        </Alert>
        <Button
          variant="contained"
          onClick={() => window.location.reload()}
        >
          Начать заново
        </Button>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      action={formAction}
      sx={{
        width: 630,
        margin: '0 auto',
        p: 3,
        boxShadow: '0px 0px 25px -10px rgba(0,0,0,0.38)',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {step === 1 ? (
        <StepOneForm
          email={email}
          onChange={handleEmailChange}
          error={{ email: emailError }}
          isPending={isPending}
          onNext={handleNext}
        />
      ) : (
        <StepTwoForm
          email={email}
          isPending={isPending}
          errorMessage={emailError}
          onBack={handleBack}
        />
      )}
    </Box>
  );
};

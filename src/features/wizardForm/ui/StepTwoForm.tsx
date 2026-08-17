import { Button, Typography, CircularProgress, Alert } from '@mui/material';
import { type StepTwoFormProps } from '../model';

export const StepTwoForm = ({
  email,
  errorMessage,
  isPending,
  onBack,
}: StepTwoFormProps) => {
  return (
    <>
      <input
        type="hidden"
        name="email"
        value={email}
      />
      <Typography
        variant="h6"
        align="center"
        sx={{ margin: '10px 20px' }}
      >
        Шаг 2: Подтверждение подписки
      </Typography>
      {errorMessage ? (
        <Alert
          severity="error"
          sx={{ mb: 2 }}
        >
          <p style={{ margin: 0 }}>{errorMessage}</p>
        </Alert>
      ) : (
        <Typography sx={{ textAlign: 'center' }}>
          Вы подписываетесь с email: <strong>{email}</strong>
        </Typography>
      )}
      <Button
        type="button"
        variant="outlined"
        onClick={onBack}
        disabled={isPending}
      >
        Назад
      </Button>
      <Button
        type="submit"
        variant="contained"
        disabled={isPending}
        endIcon={isPending ? <CircularProgress size={20} /> : null}
      >
        Подтвердить
      </Button>
    </>
  );
};

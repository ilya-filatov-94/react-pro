import { TextField, Typography, Button } from '@mui/material';
import { type StepOneFormProps } from '../model';

export const StepOneForm = ({
  email,
  onChange,
  error,
  isPending,
  onNext,
}: StepOneFormProps) => {
  return (
    <>
      <Typography
        variant="h6"
        align="center"
        sx={{ margin: '10px 20px' }}
      >
        Шаг 1: Введите email
      </Typography>
      <TextField
        name="email"
        label="Введите email"
        value={email}
        onChange={e => onChange(e.target.value)}
        error={!!error.email}
        helperText={error.email}
        disabled={isPending}
      />
      <Button
        type="button"
        variant="contained"
        onClick={onNext}
        disabled={email === '' || isPending}
      >
        Далее
      </Button>
    </>
  );
};

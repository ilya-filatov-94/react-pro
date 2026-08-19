import { z } from 'zod';

export const schema = z.object({
  email: z.email({ message: 'Некорректный формат email' }),
});

export type FormFieldsValues = z.infer<typeof schema>;

export type FormState = {
  success: boolean;
  error: Record<keyof FormFieldsValues, string | null>;
  message: string | null;
};

type BaseStepProps = {
  isPending: boolean;
  email: FormFieldsValues['email'];
};

export type StepOneFormProps = BaseStepProps & {
  onChange: (value: string) => void;
  error: FormState['error'];
  onNext: () => void;
};

export type StepTwoFormProps = BaseStepProps & {
  errorMessage: string | null;
  onBack: () => void;
};

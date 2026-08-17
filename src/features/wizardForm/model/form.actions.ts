import { type FormState } from './form.types';
import { schema } from './form.types';

export const initialState: FormState = {
  success: false,
  error: {
    email: null,
  },
  message: null,
};

export async function subscribeAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const rawData = {
    email: formData.get('email'),
  };

  const validatedFields = schema.safeParse(rawData);

  if (!validatedFields.success) {
    const emailIssue = validatedFields.error.issues.find(
      issue => issue.path[0] === 'email',
    );
    const emailError = emailIssue?.message ?? '';

    return {
      success: false,
      error: { email: emailError },
      message: 'Пожалуйста, исправьте ошибки в форме',
    };
  }

  return {
    ...prevState,
    success: true,
    error: {
      email: null,
    },
    message: `Подписка успешно оформлена! На адрес ${validatedFields.data.email} отправлено письмо.`,
  };
}

import type { SignUpFormValues } from './types';

export const signUpDefaultValues: SignUpFormValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  socialMediaLinks: [
    {
      nameSocialMedia: '',
      urlSocialMedia: '',
    },
  ],
};

export const mainFieldsConfig: Array<{
  name: keyof Pick<
    SignUpFormValues,
    'username' | 'email' | 'password' | 'confirmPassword'
  >;
  label: string;
  type: 'text' | 'email' | 'password';
}> = [
  { name: 'username', label: 'Имя пользователя', type: 'text' },
  { name: 'email', label: 'Email пользователя', type: 'email' },
  { name: 'password', label: 'Пароль', type: 'password' },
  { name: 'confirmPassword', label: 'Подтверждение пароля', type: 'password' },
];

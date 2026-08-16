import { z } from 'zod';

export const socialMediaLinks = z.object({
  nameSocialMedia: z
    .string()
    .trim()
    .min(1, 'Название социальной сети обязательно'),
  urlSocialMedia: z.url({ message: 'Некорректный URL' }),
});

export const signUpSchema = z
  .object({
    username: z.string().trim().min(1, 'Имя пользователя обязательно'),
    email: z.email({ message: 'Введите корректный email' }),
    password: z.string().min(6, 'Пароль не должен быть короче 6 символов'),
    confirmPassword: z
      .string()
      .trim()
      .min(1, 'Поле обязательно для заполнения'),
    socialMediaLinks: z
      .array(socialMediaLinks)
      .min(1, 'Должна быть хотя бы одна ссылка'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

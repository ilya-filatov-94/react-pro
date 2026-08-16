import type { FC } from 'react';
import {
  Controller,
  FormProvider,
  useForm,
  useFieldArray,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Stack,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import type { SignUpFormValues } from '../model';
import { signUpSchema, signUpDefaultValues, mainFieldsConfig } from '../model';

const sxPropForm = {
  height: '700px',
  width: '680px',
  overflowY: 'auto',
  margin: '16px',
  padding: '20px',
  boxShadow: '0px 0px 25px -10px rgba(0, 0, 0, 0.38)',
  borderRadius: '20px',
};

export const SignUpForm: FC = () => {
  const form = useForm<SignUpFormValues>({
    defaultValues: signUpDefaultValues,
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  const {
    formState: { isValid, isSubmitted },
    control,
    handleSubmit,
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socialMediaLinks',
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={sxPropForm}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ margin: '10px 20px' }}
        >
          Регистрация
        </Typography>
        <Box
          sx={{ display: 'flex', flexFlow: 'column', justifyContent: 'center' }}
          maxWidth="sm"
        >
          {mainFieldsConfig.map(({ name, label, type }) => (
            <Controller
              key={name}
              control={control}
              name={name}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type={type}
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  label={label}
                  slotProps={{
                    formHelperText: {
                      sx: { height: '20px' },
                    },
                  }}
                  sx={{ minHeight: '79px', mb: 2 }}
                />
              )}
            />
          ))}
          <Box
            sx={{
              padding: 2,
              bgcolor: '#f7fafc',
              border: '1px solid #edf2f7',
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ mt: 0, mb: 2, color: '#2d3748' }}
            >
              Ссылки на социальные сети
            </Typography>
            <Stack spacing={2}>
              {fields.map((field, index) => (
                <Box
                  key={field.id}
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    alignItems: 'flex-start',
                    mb: 2,
                  }}
                >
                  <Controller
                    control={control}
                    name={`socialMediaLinks.${index}.nameSocialMedia`}
                    render={({ field: inputField, fieldState }) => (
                      <TextField
                        {...inputField}
                        label={`Название социальной сети #${index + 1}`}
                        fullWidth
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name={`socialMediaLinks.${index}.urlSocialMedia`}
                    render={({ field: inputField, fieldState }) => (
                      <TextField
                        {...inputField}
                        label={`URL #${index + 1}`}
                        fullWidth
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />
                  {fields.length > 1 && (
                    <IconButton
                      type="button"
                      onClick={() => remove(index)}
                      aria-label="Удалить ссылку"
                      sx={{
                        mt: 0.5,
                        color: '#c53030',
                        bgcolor: '#fff5f5',
                        '&:hover': { bgcolor: '#fed7d7' },
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  )}
                </Box>
              ))}
            </Stack>
            <Button
              type="button"
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() =>
                append({ nameSocialMedia: '', urlSocialMedia: '' })
              }
              sx={{
                mt: 1,
                bgcolor: '#ebf8ff',
                color: '#2b6cb0',
                fontWeight: 600,
                '&:hover': { bgcolor: '#e2f2ff' },
              }}
            >
              Добавить ссылку на соц. сеть
            </Button>
          </Box>
          <Button
            disabled={!isValid && isSubmitted}
            type="submit"
            variant="contained"
          >
            Отправить
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};

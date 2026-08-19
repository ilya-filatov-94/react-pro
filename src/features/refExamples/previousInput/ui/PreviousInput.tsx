import { type FC, useEffect, useRef, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import styles from './PreviousInput.module.css';

export const PreviousInput: FC = () => {
  const [textValue, setTextValue] = useState('');
  const previousValue = useRef('');

  useEffect(() => {
    if (previousValue.current !== textValue) {
      previousValue.current = textValue;
    }
  }, [textValue]);

  const handleChange = (value: string) => {
    setTextValue(value);
  };

  return (
    <div className={styles.WrapperContent}>
      <TextField
        label="Текущее значение"
        fullWidth
        value={textValue}
        onChange={e => handleChange(e.target.value)}
      />
      <div className={styles.WrapperPrevField}>
        <Typography
          component="span"
          sx={{ fontWeight: 'bold' }}
        >
          Предыдущее значение:
        </Typography>
        {previousValue.current && (
          <Typography component="span">{previousValue.current}</Typography>
        )}
      </div>
    </div>
  );
};

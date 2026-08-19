import { type FC, useEffect, useRef, useState, type ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import styles from './DebouncedLogger.module.css';

export const DebouncedLogger: FC = () => {
  const [textValue, setTextValue] = useState('');
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTextValue(value);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      console.log(`логи: ${value}`);
    }, 1e3);
  };

  return (
    <div className={styles.WrapperContent}>
      <TextField
        label="Введите текст"
        fullWidth
        value={textValue}
        onChange={handleChange}
      />
    </div>
  );
};

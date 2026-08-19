import { type FC, useRef, type FocusEvent } from 'react';
import { TextField, Button } from '@mui/material';
import styles from './FocusTracker.module.css';

export const FocusTracker: FC = () => {
  const firstInput = useRef<HTMLInputElement>(null);
  const secondInput = useRef<HTMLInputElement>(null);
  const focusCounter = useRef(0);

  const setFocusFirstInput = () => {
    if (firstInput.current) {
      firstInput.current.focus();
    }
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    const related = event.relatedTarget as HTMLElement | null;
    const isField =
      related === firstInput.current || related === secondInput.current;
    if (isField) {
      focusCounter.current += 1;
      console.log(
        `Количество переходов фокуса с инпутов: ${focusCounter.current}`,
      );
    }
  };

  return (
    <div className={styles.WrapperContent}>
      <TextField
        inputRef={firstInput}
        label="Первое поле ввода"
        fullWidth
        onFocus={handleFocus}
      />
      <TextField
        inputRef={secondInput}
        label="Второе поле ввода"
        fullWidth
        onFocus={handleFocus}
      />
      <Button
        type="button"
        variant="contained"
        onClick={setFocusFirstInput}
      >
        Сфокусировать на первом
      </Button>
    </div>
  );
};

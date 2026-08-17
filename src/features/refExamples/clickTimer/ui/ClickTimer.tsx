import { type FC, useRef } from 'react';
import { Button } from '@mui/material';
import { type ClickData } from '../model/types';

export const ClickTimer: FC = () => {
  const clickDataRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  });

  const handleClick = () => {
    const now = Date.now();
    const data = clickDataRef.current;

    if (data.startTime === null) {
      data.startTime = now;
      data.clickCount = 1;
      console.log('Первый клик');
    } else {
      data.clickCount += 1;
      const difference = now - data.startTime;
      console.log(
        `Разница: ${difference} мс, Количество кликов: ${data.clickCount}`,
      );
    }
  };

  return (
    <Button
      type="button"
      variant="contained"
      onClick={handleClick}
    >
      Счётчик кликов
    </Button>
  );
};

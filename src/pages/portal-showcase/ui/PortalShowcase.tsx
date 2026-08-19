import { type FC } from 'react';
import { Button, Typography } from '@mui/material';
import { Tooltip, ToolTipPositions } from 'shared/ui/tooltip';
import styles from './PortalShowcase.module.css';

const PortalShowcase: FC = () => {
  const handleDelete = async () => {};

  return (
    <div className={styles.WrapperPage}>
      <h1>Демонстрационные примеры с React Portal</h1>
      <div className={styles.WrapperPortalCases}>
        <div className={styles.WrapperCase}>
          <Typography
            component="p"
            sx={{ fontWeight: 'bold' }}
          >
            Tooltip:
          </Typography>
          <Tooltip
            position={ToolTipPositions.Top}
            content="Текст подсказки"
          >
            <Typography>Наведи на меня</Typography>
          </Tooltip>
        </div>
        <div className={styles.WrapperCase}>
          <Typography
            component="p"
            sx={{ fontWeight: 'bold' }}
          >
            Confirm Window:
          </Typography>
          <Button
            variant="contained"
            onClick={handleDelete}
          >
            Закрытие окна
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortalShowcase;

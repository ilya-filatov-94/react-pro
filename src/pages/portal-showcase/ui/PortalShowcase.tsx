import { type FC } from 'react';
import { Button, Typography } from '@mui/material';
import { useTheme } from 'shared/lib/ThemeContext';
import { Tooltip, ToolTipPositions } from 'shared/ui/tooltip';
import { useConfirmDialog } from 'shared/ui/confirmDialog';
import styles from './PortalShowcase.module.css';

const PortalShowcase: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { confirmDialog, showConfirmDialog } = useConfirmDialog();

  const deleteItem = () => {
    console.log('Элемент удалён');
  };

  const handleDelete = async () => {
    const confirmed = await showConfirmDialog({
      title: 'Удалить элемент?',
      description: 'Это действие необратимо.',
    });
    if (confirmed) {
      deleteItem();
    }
  };

  return (
    <>
      <div className={styles.WrapperPage}>
        <h1>Демонстрационные примеры с React Portal</h1>
        <div className={styles.WrapperPortalCases}>
          <Button
            variant="contained"
            onClick={toggleTheme}
          >
            Тема: {theme === 'light' ? 'Светлая' : 'Тёмная'}
          </Button>
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
              Удалить
            </Button>
          </div>
        </div>
      </div>
      {confirmDialog}
    </>
  );
};

export default PortalShowcase;

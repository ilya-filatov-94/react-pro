import { type FC } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@mui/material';
import { useTheme } from 'shared/lib/ThemeContext';
import { type ConfirmDialogProps } from './types';
import styles from './ConfirmDialog.module.css';

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  title,
  description,
  onConfirm,
  onCancel,
}) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`${styles.overlay} ${theme === 'dark' ? styles['overlay--dark'] : ''}`}
      onClick={onCancel}
    >
      <div
        className={`${styles.dialog} ${theme === 'dark' ? styles['dialog--dark'] : ''}`}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.actions}>
          <Button
            className={styles.cancelButton}
            onClick={onCancel}
          >
            Отмена
          </Button>
          <Button
            className={styles.confirmButton}
            onClick={onConfirm}
          >
            Подтвердить
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

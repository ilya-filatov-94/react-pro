import {
  type FC,
  useEffect,
  type MouseEvent,
  type KeyboardEvent as SyntheticKeyboardEvent,
} from 'react';
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

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCancel();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  const handleOverlayKeyDown = (
    event: SyntheticKeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onCancel();
    }
  };

  return createPortal(
    <div
      className={`${styles.overlay} ${theme === 'dark' ? styles['overlay--dark'] : ''}`}
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
      role="button"
      tabIndex={0}
    >
      <div
        className={`${styles.dialog} ${theme === 'dark' ? styles['dialog--dark'] : ''}`}
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

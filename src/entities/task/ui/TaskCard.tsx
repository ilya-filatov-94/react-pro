import type { FC } from 'react';
import type { Task } from '../model/types';
import styles from './TaskCard.module.css';

export const TaskCard: FC<Task> = ({ id, title, completed, removeTask }) => {
  return (
    <div className={styles.card}>
      <label className={styles.cardLabel}>
        <div className={styles.cardContentWrapper}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => {}}
          />
          <span className={styles.cardTitle}>{title}</span>
        </div>
        <button
          className={styles.deleteButton}
          onClick={e => {
            e.stopPropagation();
            removeTask(id);
          }}
          aria-label="Удалить задачу"
        >
          ✕
        </button>
      </label>
    </div>
  );
};

import type { FC } from 'react';
import { TaskList } from 'features/taskList';
import styles from './TaskWidget.module.css';

export const TaskWidget: FC = () => {
  return (
    <div className={styles.TaskWidget}>
      <TaskList />
    </div>
  );
};

import type { FC } from 'react';
import { TaskWidget } from 'widgets/task';
import styles from './TaskPage.module.css';

const TaskPage: FC = () => {
  return (
    <div className={styles.WrapperPage}>
      <h1>Мои задачи</h1>
      <TaskWidget />
    </div>
  );
};

export default TaskPage;

import type { FC } from 'react';
import { TaskWidget } from 'widgets/task';

const TaskPage: FC = () => {
  return (
    <div>
      <h1>Мои задачи</h1>
      <TaskWidget />
    </div>
  );
};

export default TaskPage;

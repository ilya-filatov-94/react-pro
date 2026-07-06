import type { FC } from 'react';
import type { Task } from 'entities/task';
import { TaskCard } from 'entities/task';
import styles from './TaskList.module.css';

type TaslistProps = {
  tasks: Task[];
  removeTask: (id: string) => void;
};

export const TaskList: FC<TaslistProps> = ({ tasks, removeTask }) => {
  return (
    <div className={styles.WrapperTasksList}>
      {tasks.map((item: Task) => (
        <TaskCard
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

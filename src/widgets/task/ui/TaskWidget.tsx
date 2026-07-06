import type { FC } from 'react';
import { TaskList, useTasks } from 'features/taskList';
import { FilterButton } from 'shared/filterButton';
import styles from './TaskWidget.module.css';

export const TaskWidget: FC = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks();

  return (
    <div className={styles.TaskWidget}>
      <div className={styles.buttonGroup}>
        <FilterButton
          addClass={`
            ${filter === 'all' ? styles.active : ''}
          `}
          type="button"
          onClick={() => setFilter('all')}
        >
          Все
        </FilterButton>
        <FilterButton
          addClass={`
            ${filter === 'incomplete' ? styles.active : ''}
          `}
          type="button"
          onClick={() => setFilter('incomplete')}
        >
          Невыполненные
        </FilterButton>
        <FilterButton
          addClass={`
            ${filter === 'completed' ? styles.active : ''}
          `}
          type="button"
          onClick={() => setFilter('completed')}
        >
          Выполненные
        </FilterButton>
      </div>
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
      />
    </div>
  );
};

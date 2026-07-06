import type { FC } from 'react';
import type { Task } from 'entities/task';
import { TaskCard } from 'entities/task';
import { useTasks } from '../model/useTasks';
import { FilterButton } from 'shared/filterButton';
import styles from './TaskList.module.css';

export const TaskList: FC = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks();

  return (
    <div>
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
    </div>
  );
};

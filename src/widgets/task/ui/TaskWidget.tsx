import type { FC } from 'react';
import { TaskList, useTasks } from 'features/taskList';
import { FilterButton } from 'shared/ui/filterButton';
import { LoadingErrorBoundary } from 'shared/ui/loadingErrorBoundary';
import styles from './TaskWidget.module.css';

export const TaskWidget: FC = () => {
  const {
    tasks,
    filter,
    setFilter,
    removeTask,
    isLoading,
    isFetching,
    error,
    isError,
  } = useTasks();

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
      <LoadingErrorBoundary
        isLoading={isLoading || isFetching}
        isError={isError}
        error={error}
      >
        <TaskList
          tasks={tasks}
          removeTask={removeTask}
        />
      </LoadingErrorBoundary>
    </div>
  );
};

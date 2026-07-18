import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';
import type { Task } from 'entities/task/model/types';
import { useGetTasksQuery } from 'entities/task';

export type Filter = 'all' | 'completed' | 'incomplete';

interface FilteredTasks {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
  isLoading: boolean;
  isFetching: boolean;
  error: FetchBaseQueryError | SerializedError;
  isError: boolean;
}

export function useTasks(): FilteredTasks {
  const {
    data: tasks,
    isLoading,
    isFetching,
    error,
    isError,
  } = useGetTasksQuery();
  const prevDataRef = useRef(tasks);
  const [localTasks, setLocalTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    if (tasks && tasks !== prevDataRef.current) {
      setLocalTasks(tasks);
      prevDataRef.current = tasks;
    }
  }, [tasks]);

  const filteredTasks = useMemo(
    () =>
      localTasks.filter(item => {
        if (filter === 'completed') return item.completed;
        if (filter === 'incomplete') return !item.completed;
        return true;
      }),
    [localTasks, filter],
  );

  const removeTask = useCallback((id: string) => {
    setLocalTasks(prev => prev.filter(item => item.id !== id));
  }, []);

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
    isLoading,
    isFetching,
    error,
    isError,
  };
}

import { useState, useCallback, useMemo } from 'react';
import type { Task } from 'entities/task/model/types';

export type Filter = 'all' | 'completed' | 'incomplete';

interface FilteredTasks {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
}

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'task 1',
    completed: true,
  },
  {
    id: '2',
    title: 'task 2',
    completed: false,
  },
  {
    id: '3',
    title: 'task 3',
    completed: false,
  },
];

export function useTasks(): FilteredTasks {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTasks = useMemo(
    () =>
      tasks.filter(item => {
        if (filter === 'completed') return item.completed;
        if (filter === 'incomplete') return !item.completed;
        return true;
      }),
    [tasks, filter],
  );

  const removeTask = useCallback((id: string) => {
    setTasks(prev => prev.filter(item => item.id !== id));
  }, []);

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    removeTask,
  };
}

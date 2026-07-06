export interface Task {
  id: string;
  title: string;
  completed: boolean;
  removeTask?: (id: string) => void;
}

export interface Todo {
  type: string;
  title: string;
  checked: boolean;
}

export interface TodoGroup {
  type: string;
  checkedTodos: Todo[];
  uncheckedTodos: Todo[];
}

export const todos: Todo[] = [
  {
    type: 'Work',
    title: 'Interview',
    checked: false
  },
  {
    type: 'Work',
    title: 'Commit code',
    checked: false
  },
  {
    type: 'Family',
    title: 'Grocery shopping',
    checked: false
  },
  {
    type: 'Family',
    title: 'Go out for dinner',
    checked: false
  },
  {
    type: 'Personal',
    title: 'Go to gym',
    checked: false
  },
  {
    type: 'Personal',
    title: 'Play guitar',
    checked: false
  },
];

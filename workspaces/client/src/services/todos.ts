import { Todo } from '@prisma/client';
import { TODO_ROUTES } from '@shared/routes/todo.routes';

export const fetchTodosList = async () => {
  const response = await fetch(`/api/${TODO_ROUTES.BASE}`);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const todos = await response.json();
  return todos as Todo[];
};

export const updateTodo = async (todo: Todo) => {
  const response = await fetch(`/api/${TODO_ROUTES.BASE}/${todo.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const updatedTodo = await response.json();
  return updatedTodo as Todo;
};

export const addTodo = async (todo: Todo) => {
  const response = await fetch(`/api/${TODO_ROUTES.BASE}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const addedTodo = await response.json();
  return addedTodo as Todo;
};

export const deleteTodo = async (todo: Todo) => {
  const response = await fetch(`/api/${TODO_ROUTES.BASE}/${todo.id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
};

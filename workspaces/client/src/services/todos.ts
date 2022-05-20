import coreInstance from '@client/services/core';
import type { Todo } from '@prisma/client';
import { ROUTES } from '@shared/routes';

export const fetchTodosList = async () => {
  try {
    const response = await coreInstance.get<Todo[]>(ROUTES.TODOS);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateTodo = async (todo: Todo) => {
  try {
    const response = await coreInstance.patch<Todo>(
      `${ROUTES.TODOS}/${todo.id}`,
      todo
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return todo;
  }
};

export const addTodo = async (todo: Todo) => {
  try {
    const response = await coreInstance.post<Todo>(ROUTES.TODOS, todo);
    return response.data;
  } catch (error) {
    console.error(error);
    return todo;
  }
};

export const deleteTodo = async (todo: Todo) => {
  try {
    await coreInstance.delete(`${ROUTES.TODOS}/${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};

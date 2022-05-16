import coreInstance from '@client/services/core';
import { Todo } from '@prisma/client';
import { TODO_ROUTES } from '@shared/routes/todo.routes';

export const fetchTodosList = async () => {
  try {
    const response = await coreInstance.get<Todo[]>(TODO_ROUTES.BASE);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateTodo = async (todo: Todo) => {
  try {
    const response = await coreInstance.patch<Todo>(
      `${TODO_ROUTES.BASE}/${todo.id}`,
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
    const response = await coreInstance.post<Todo>(TODO_ROUTES.BASE, todo);
    return response.data;
  } catch (error) {
    console.error(error);
    return todo;
  }
};

export const deleteTodo = async (todo: Todo) => {
  try {
    await coreInstance.delete(`${TODO_ROUTES.BASE}/${todo.id}`);
  } catch (error) {
    console.error(error);
  }
};

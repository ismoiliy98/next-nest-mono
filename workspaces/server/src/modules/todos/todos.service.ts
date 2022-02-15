import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from '@server/modules/todos/dto/create-todo.dto';
import { UpdateTodoDto } from '@server/modules/todos/dto/update-todo.dto';
import { ITodo } from '@shared/interfaces/todos.interface';

function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const getNextId = idGenerator();
const todos: ITodo[] = [];

@Injectable()
export class TodosService {
  create(createTodoDto: CreateTodoDto) {
    const todo: ITodo = {
      id: getNextId.next().value || 1,
      ...createTodoDto,
    };

    todos.push(todo);
  }

  findAll() {
    return todos;
  }

  findOne(id: number) {
    return todos.find((todo) => todo.id === id) || {};
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
      todo.title = updateTodoDto.title;
      todo.description = updateTodoDto.description;
      todo.completed = updateTodoDto.completed;
    }

    return todo || {};
  }

  remove(id: number) {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
    }

    return todos[todoIndex] || {};
  }
}

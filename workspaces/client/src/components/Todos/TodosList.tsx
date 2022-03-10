import {
  Center,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import TodoItem from '@client/components/Todos/TodoItem';
import TodoItemSkeleton from '@client/components/Todos/TodoItemSkeleton';
import { Todo } from '@prisma/client';
import React, { FC } from 'react';

interface ITodosListProps {
  todos: Todo[];
  isLoading: boolean;
  onDelete: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
}

const TodosList: FC<ITodosListProps> = (props) => {
  const { todos, onDelete, onEdit, isLoading } = props;
  const containerBgColor = useColorModeValue('white', 'gray.700');

  return !isLoading && todos.length < 1 ? (
    <Center py="8" height="full">
      <Text>You have no created any todo yet</Text>
    </Center>
  ) : (
    <List py="4" spacing="4">
      {isLoading
        ? [...Array(4)].map((_, index) => (
            <ListItem key={index}>
              <TodoItemSkeleton containerBgColor={containerBgColor} />
            </ListItem>
          ))
        : todos.map((todo) => (
            <ListItem key={todo.id}>
              <TodoItem
                todo={todo}
                onEdit={onEdit}
                onDelete={onDelete}
                containerBgColor={containerBgColor}
              />
            </ListItem>
          ))}
    </List>
  );
};

export default TodosList;

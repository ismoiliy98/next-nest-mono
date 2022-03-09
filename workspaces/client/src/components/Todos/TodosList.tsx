import { List, ListItem, useColorModeValue } from '@chakra-ui/react';
import TodoItem from '@client/components/Todos/TodoItem';
import { Todo } from '@prisma/client';
import React, { FC } from 'react';

interface ITodosListProps {
  todos: Todo[];
  onDelete: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
}

const TodosList: FC<ITodosListProps> = (props) => {
  const { todos, onDelete, onEdit } = props;
  const containerBgColor = useColorModeValue('white', 'gray.700');

  return (
    <List py="4" spacing="4">
      {todos.map((todo) => (
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

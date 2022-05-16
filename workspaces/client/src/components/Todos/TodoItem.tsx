import {
  Badge,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { Todo } from '@prisma/client';
import type { FC } from 'react';
import { Edit, Trash } from 'react-feather';

interface ITodoItemProps {
  todo: Todo;
  onEdit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  containerBgColor?: string;
}

const TodoItem: FC<ITodoItemProps> = (props) => {
  const { todo, onEdit, onDelete, containerBgColor = 'white' } = props;

  return (
    <Container
      maxW="full"
      shadow="sm"
      bg={containerBgColor}
      rounded="md"
      py="4"
    >
      <Stack>
        <HStack align="center">
          <Heading
            textDecor={todo.completed ? 'line-through' : undefined}
            size="md"
          >
            {todo.title}
          </Heading>
          {todo.completed && <Badge colorScheme="green">completed</Badge>}
          <Flex flexGrow="1" justifyContent="flex-end">
            <IconButton
              aria-label="Edit todo"
              size="xs"
              variant="ghost"
              icon={<Edit size="16" />}
              onClick={() => onEdit(todo)}
            />
            <IconButton
              aria-label="Edit todo"
              size="xs"
              variant="ghost"
              icon={<Trash size="16" />}
              colorScheme="red"
              onClick={() => onDelete(todo)}
            />
          </Flex>
        </HStack>
        <Text
          textDecor={todo.completed ? 'line-through' : undefined}
          fontStyle={!todo.description ? 'italic' : undefined}
        >
          {todo.description || 'No description'}
        </Text>
      </Stack>
    </Container>
  );
};

export default TodoItem;

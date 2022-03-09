import {
  Button,
  Flex,
  Heading,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import TodoDeleteModal from '@client/components/Todos/TodoDeleteModal';
import TodoEditModal from '@client/components/Todos/TodoEditModal';
import TodosList from '@client/components/Todos/TodosList';
import { Todo } from '@prisma/client';
import type { NextPage } from 'next';
import { useCallback, useState } from 'react';

const todos: Todo[] = [
  {
    id: '1',
    title: 'Learn Next.js',
    completed: true,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Atque ab laboriosam aliquam accusantium ullam corporis
      exercitationem possimus nostrum laudantium consequuntur?`,
  },
  {
    id: '2',
    title: 'Learn Chakra UI',
    completed: false,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Atque ab laboriosam aliquam accusantium ullam corporis
      exercitationem possimus nostrum laudantium consequuntur?`,
  },
  {
    id: '3',
    title: 'Learn GraphQL',
    completed: false,
    description: '',
  },
];

const Todos: NextPage = () => {
  const headerTextColor = useColorModeValue('gray.600', 'white');
  const addButtonColor = useColorModeValue('white', 'teal.600');
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [deletingTodo, setDeletingTodo] = useState<Todo | null>(null);

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose,
  } = useDisclosure();

  const onEdit = useCallback(
    (todo: Todo) => {
      setEditingTodo(todo);
      onEditModalOpen();
    },
    [onEditModalOpen]
  );

  const onDelete = useCallback(
    (todo: Todo) => {
      setDeletingTodo(todo);
      onDeleteModalOpen();
    },
    [onDeleteModalOpen]
  );

  const onAdd = useCallback(() => {
    setEditingTodo(null);
    onEditModalOpen();
  }, [onEditModalOpen]);

  return (
    <Flex w="full" maxW="3xl" direction="column" py="8" mx="auto">
      <Flex
        justifyContent="space-between"
        align="center"
        color={headerTextColor}
      >
        <Heading size="lg">Todos list</Heading>
        <Button
          aria-label="Add todo"
          size="sm"
          color={addButtonColor}
          onClick={onAdd}
        >
          Add
        </Button>
      </Flex>
      <TodosList todos={todos} onDelete={onDelete} onEdit={onEdit} />
      <TodoEditModal
        isOpen={isEditModalOpen}
        onClose={onEditModalClose}
        todo={editingTodo}
      />
      <TodoDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={onDeleteModalClose}
        todo={deletingTodo}
      />
    </Flex>
  );
};

export default Todos;

import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  VStack,
} from '@chakra-ui/react';
import { Todo } from '@prisma/client';
import { FC, useCallback, useEffect, useState } from 'react';

interface ITodoEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  todo: Todo | null;
}

const defaultTodo: Todo = {
  id: '',
  title: '',
  description: '',
  completed: false,
};

const TodoEditModal: FC<ITodoEditModalProps> = (props) => {
  const { isOpen, onClose, todo } = props;
  const [editingTodo, setEditingTodo] = useState<Todo>({ ...defaultTodo });

  useEffect(() => {
    if (todo) {
      setEditingTodo({ ...todo });
    } else {
      setEditingTodo({ ...defaultTodo });
    }
  }, [todo]);

  const onEditingTodoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.name !== 'completed') {
        setEditingTodo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
        return;
      }

      setEditingTodo((prev) => ({
        ...prev,
        [e.target.name]: e.target.checked,
      }));
    },
    []
  );

  const isInvalid = editingTodo.title.length < 1;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{todo ? 'Edit todo' : 'Add todo'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="4">
            <FormControl isRequired isInvalid={isInvalid}>
              <FormLabel htmlFor="todo-title">Title</FormLabel>
              <Input
                id="todo-title"
                name="title"
                placeholder="My todo #1"
                value={editingTodo.title}
                onChange={onEditingTodoChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="todo-description">Description</FormLabel>
              <Input
                id="todo-description"
                name="description"
                placeholder="Add some desciption"
                value={editingTodo.description}
                onChange={onEditingTodoChange}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="todo-completed" mb="0">
                Completed
              </FormLabel>
              <Switch
                id="todo-completed"
                name="completed"
                isChecked={editingTodo.completed}
                onChange={onEditingTodoChange}
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose}>Save</Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TodoEditModal;

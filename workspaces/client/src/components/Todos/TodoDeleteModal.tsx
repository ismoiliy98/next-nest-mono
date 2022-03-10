import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { deleteTodo } from '@client/services/todos';
import { Todo } from '@prisma/client';
import { FC, useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';

interface ITodoDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  todo: Todo;
}

const TodoDeleteModal: FC<ITodoDeleteModalProps> = (props) => {
  const { isOpen, onClose, todo } = props;

  const queryClient = useQueryClient();

  const { mutateAsync: mutateTodo, isLoading } = useMutation(deleteTodo, {
    onSettled: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const onDelete = useCallback(async () => {
    await mutateTodo(todo);
    onClose();
  }, [onClose, mutateTodo, todo]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnEsc={!isLoading}
      closeOnOverlayClick={!isLoading}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete todo</ModalHeader>
        <ModalCloseButton isDisabled={isLoading} />
        <ModalBody>
          <Text>Are you sure you want to delete this todo?</Text>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button variant="ghost" onClick={onClose} isLoading={isLoading}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onDelete} isLoading={isLoading}>
              Delete
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TodoDeleteModal;

import { Container, Skeleton, SkeletonText } from '@chakra-ui/react';
import type { FC } from 'react';

interface ITodoItemSkeleton {
  containerBgColor?: string;
}

const TodoItemSkeleton: FC<ITodoItemSkeleton> = (props) => {
  const { containerBgColor = 'white' } = props;

  return (
    <Container
      maxW="full"
      shadow="sm"
      bg={containerBgColor}
      rounded="md"
      py="4"
    >
      <Skeleton height="6" />
      <SkeletonText mt="5" spacing="3" skeletonHeight="3" noOfLines={2} />
    </Container>
  );
};

export default TodoItemSkeleton;

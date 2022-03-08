import { Center, Flex, useColorModeValue } from '@chakra-ui/react';
import Header from '@client/components/Header';
import { FC } from 'react';

const Page: FC = ({ children }) => {
  const mainBgColor = useColorModeValue('gray.100', 'gray.500');
  const textColor = useColorModeValue('gray.400', 'gray.300');

  return (
    <Flex
      h="full"
      minH="100vh"
      w="full"
      bg={mainBgColor}
      direction="column"
      p="4"
      transition="ease-in-out"
      transitionProperty="background-color"
      transitionDuration="normal"
    >
      <Header />
      <Center
        flexGrow={1}
        color={textColor}
        transition="ease-in-out"
        transitionProperty="color"
        transitionDuration="normal"
      >
        {children}
      </Center>
    </Flex>
  );
};

export default Page;

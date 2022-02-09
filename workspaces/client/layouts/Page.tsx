import { Flex, useColorModeValue } from '@chakra-ui/react';
import Header from '@client/components/Header';
import { FC } from 'react';

const Page: FC = ({ children }) => {
  const mainBgColor = useColorModeValue('gray.100', 'gray.500');

  return (
    <Flex
      h="full"
      w="full"
      bg={mainBgColor}
      direction="column"
      p="4"
      transition="ease-in-out"
      transitionProperty="background-color"
      transitionDuration="normal"
    >
      <Header />
      <Flex p="40" h="full" w="full">
        {children}
      </Flex>
    </Flex>
  );
};

export default Page;

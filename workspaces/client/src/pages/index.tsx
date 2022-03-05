import { Center, Heading, useColorModeValue } from '@chakra-ui/react';
import Page from '@client/layouts/Page';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const cardBgColor = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.500', 'white');

  return (
    <Page>
      <Center
        bg={cardBgColor}
        rounded="md"
        shadow="lg"
        w="full"
        transition="ease-in-out"
        transitionProperty="background-color"
        transitionDuration="normal"
      >
        <Heading
          color={headingColor}
          transition="ease-in-out"
          transitionProperty="color"
          transitionDuration="normal"
        >
          Hello from Next.js
        </Heading>
      </Center>
    </Page>
  );
};

export default Home;

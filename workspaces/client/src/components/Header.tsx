import {
  Button,
  Flex,
  Icon,
  Stack,
  Switch,
  useColorMode,
  useColorModePreference,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useCallback, useEffect } from 'react';
import { Moon, Sun } from 'react-feather';

const routes = [
  {
    pathname: '/',
    label: 'Home',
  },
  {
    pathname: '/todos',
    label: 'Todos',
  },
];

const Header: FC = () => {
  const router = useRouter();

  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  const userColorMode = useColorModePreference();
  const iconColor = useColorModeValue('gray.500', 'white');
  const headerBgColor = useColorModeValue('gray.200', 'gray.600');
  const activeButtonBgColor = useColorModeValue('white', 'gray.500');

  useEffect(() => {
    const localColorMode = localStorage.getItem('colorMode');
    setColorMode(localColorMode || userColorMode);
  }, [setColorMode, userColorMode]);

  useEffect(() => {
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  const handlePathChange = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  return (
    <Flex
      w="full"
      justifyContent="space-between"
      bg={headerBgColor}
      rounded="md"
      p="4"
    >
      <Stack direction="row" alignItems="center">
        {routes.map(({ pathname, label }, idx) => (
          <Button
            key={idx}
            p="2"
            colorScheme="white"
            variant="ghost"
            isActive={router.pathname === pathname}
            onClick={() =>
              router.pathname !== pathname && handlePathChange(pathname)
            }
            bg={
              router.pathname === pathname ? activeButtonBgColor : 'transparent'
            }
          >
            {label}
          </Button>
        ))}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Icon color={iconColor} as={Sun} />
        <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} />
        <Icon color={iconColor} as={Moon} />
      </Stack>
    </Flex>
  );
};

export default Header;

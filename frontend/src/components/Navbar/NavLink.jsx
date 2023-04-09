// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IoMdAnalytics } from 'react-icons/io';
import { useContext, useState } from 'react';
import CreateAcount from '../Account/CreateAcount';
import { AccountContext } from '../../App';
import UserProfile from '../Account/UserProfile';

export const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const {haveUser, toggleHaveUser} = useContext(AccountContext);


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} zIndex={4} w={'100%'} top={0}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontFamily={'cursive'} fontSize={'24px'} color={'red'}>Adobe Media</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

            <Button>
              {<IoMdAnalytics size={30}/>}
            </Button>

            {
              haveUser ? <UserProfile /> : <CreateAcount />
            }

            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
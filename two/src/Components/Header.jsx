import React from 'react';
import {
  Drawer,
  DrawerBody,
  Button,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        colorScheme='purple'
        p={0}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
    zIndex={'overlay'}
        
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
                <Link to={'/Video'}>VIDEO</Link>
              </Button>
              <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
                <Link to={'/free-video'}>Free VIDEO</Link>
              </Button>
              <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
                <Link to={'/upload-video'}>Upload Video</Link>
              </Button>
              <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
                <Link to={'/video-query'}>Video Query</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              w={'full'}
              justifyContent={'space-evenly'}
              left={'0'}
              zIndex={1}
            >
              <Button colorScheme='purple'  onClick={onClose}>
                <Link to={'/login'}>Log in</Link>
              </Button>
              <Button colorScheme='purple' variant={'outline'} onClick={onClose}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

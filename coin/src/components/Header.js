import React from 'react';
import {  Button, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p="4" shadow="base" bgColor="blackAlpha.900" gap="10" position="relative">
      
      <Text
        fontSize="xl"
        textAlign="start"
        fontWeight="bold"  // Corrected from "thick" to "bold"
        
      >
        WolfXCoins
      </Text>
        
      <Button variant="unstyled" color="white">
        <Link to="/">Home</Link>
      </Button>
      <Button variant="unstyled" color="white">
        <Link to="/exchange">Exchange</Link>
      </Button>
      <Button variant="unstyled" color="white">
        <Link to="/coins">Coins</Link>
      </Button>

      <HStack
        position="absolute"
        right="50px"
        top="0"
        p="4"
        spacing="4"
      >
        <Button colorScheme="teal" variant="solid">
          <Link to="/login">Log in</Link>
        </Button>
        <Button colorScheme="teal" variant="outline">
          <Link to="/signup">Sign Up</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;

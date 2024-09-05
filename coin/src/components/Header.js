import React from 'react'
import { Box, Button, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'  // Importing Link from react-router-dom

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} gap={'10'}>
      
      <Text
      
        fontSize={"xl"}
        textAlign={"start"}
        fontWeight={"thik"}
        color={"whiteAlpha.900"}
        // mt={"10"}
      >
        WolfXCoins </Text>
        
      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/'}>Home</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/Exchange'}>Exchange</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/Coins'}>Coins</Link>
      </Button>
      {/* </Box> */}
    </HStack>
  )
}

export default Header

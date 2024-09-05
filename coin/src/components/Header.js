// import React from 'react'
// import { Box, Button, HStack, Text } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'  // Importing Link from react-router-dom

// const Header = () => {
//   return (
//     <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} gap={'10'}>
      
//       <Text
      
//         fontSize={"xl"}
//         textAlign={"start"}
//         fontWeight={"thik"}
//         color={"whiteAlpha.900"}
//         // mt={"10"}
//       >
//         WolfXCoins </Text>
        
//       <Button variant={'unstyled'} color={'white'}>
//         <Link to={'/'}>Home</Link>
//       </Button>
//       <Button variant={'unstyled'} color={'white'}>
//         <Link to={'/Exchange'}>Exchange</Link>
//       </Button>
//       <Button variant={'unstyled'} color={'white'}>
//         <Link to={'/Coins'}>Coins</Link>
//       </Button>
//       {/* </Box> */}

      
//       <HStack
//               pos={'absolute'}
//               marginRight={15}
//               paddingRight={14}
//               w={'full'}
//               justifyContent={'end'}
//               left={'0'}
//               zIndex={1}
//             >
//               <Button colorScheme='purple'  >
//                 <Link to={'/login'}>Log in</Link>
//               </Button>
//               <Button colorScheme='purple' variant={'outline'} >
//                 <Link to={'/signup'}>Sign Up</Link>
//               </Button>
//             </HStack>
//     </HStack>
//   )
// }

// export default Header

import React from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom

const Header = () => {
  return (
    <HStack p="4" shadow="base" bgColor="blackAlpha.900" gap="10" position="relative">
      
      <Text
      
        fontSize="xl"
        textAlign="start"
        fontWeight="thick"
        color="whiteAlpha.900"
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
        // zIndex={1}
      >
        <Button colorScheme="whiteAlpha.900 " variant="unstyled">
          <Link to="/login">Log in</Link>
        </Button>
        <Button colorScheme="whiteAlpha.900" variant="outline">
          <Link to="/signup">Sign Up</Link>
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;

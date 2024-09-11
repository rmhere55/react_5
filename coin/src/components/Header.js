// import React from 'react';
// import {  Button, HStack, Text } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <HStack p="4" shadow="base" bgColor="blackAlpha.900" gap="10" position="relative">
      
//       <Text
//         fontSize="xl"
//         textAlign="start"
//         fontWeight="bold"  // Corrected from "thick" to "bold"
        
//       >
//         WolfXCoins
//       </Text>
        
//       <Button variant="unstyled" color="white">
//         <Link to="/">Home</Link>
//       </Button>
//       <Button variant="unstyled" color="white">
//         <Link to="/exchange">Exchange </Link>
//       </Button>
//       <Button variant="unstyled" color="white">
//         <Link to="/coins"> Coins</Link>
//       </Button>

//       <HStack
//         position="absolute"
//         right="50px"
//         top="0"
//         p="4"
//         spacing="4"
//       >
//         <Button colorScheme="teal" variant="solid">
//           <Link to="/login">Log in</Link>
//         </Button>
//         <Button colorScheme="teal" variant="outline">
//           <Link to="/signup">Sign Up</Link>
//         </Button>
//       </HStack>
//     </HStack>
//   );
// };

// export default Header;


// import React from 'react';
// import { Button, HStack, Text, Box, useBreakpointValue, VStack } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   // Adjust the visibility of elements based on screen size
//   const showDesktopNav = useBreakpointValue({ base: false, md: true });
//   const showMobileNav = useBreakpointValue({ base: true, md: false });

//   return (
//     <Box 
//       p="4" 
//       shadow="base" 
//       bgColor="blackAlpha.900" 
//       position="relative"
//       w="full"
//       // paddingRight={4}
// >
//       <HStack
//         spacing={{ base: "4", md: "10" }}
//         justify="space-between"
//         align="center"
//         wrap="wrap"
//         mx="auto"
//       >
//         <Text
//           fontSize={{ base: "lg", md: "xl" }} // Responsive font size
//           textAlign="start"
//           fontWeight="bold"
//           color="white"
//         >
//           WolfXCoins
//         </Text>

//         {/* Desktop Navigation */}
//         {showDesktopNav && (
//     <HStack spacing="6"    marginRight={12} >
//             <Button variant="unstyled" color="white">
//               <Link to="/">Home</Link>
//             </Button>
//             <Button variant="unstyled" color="white">
//               <Link to="/exchange">Exchange</Link>
//             </Button>
//             <Button variant="unstyled" color="white">
//               <Link to="/coins">Coins</Link>
//             </Button>
            
//           <Button colorScheme="teal" variant="solid">
//             <Link to="/login">Log in</Link>
//           </Button>
//           <Button colorScheme="teal" variant="outline">
//             <Link to="/signup">Sign Up</Link>
//           </Button>
//           </HStack>
//         )}

//         {/* Mobile Navigation */}
//         {/* {showMobileNav && (
//           <HStack
//             spacing="4"
//             position="absolute"
//             right="4"
//             top="4"
//             display={{ base: "flex", md: "none" }}
//           >
//             <Button colorScheme="teal" variant="solid">
//               <Link to="/login">Log in</Link>
//             </Button>
//             <Button colorScheme="teal" variant="outline">
//               <Link to="/signup">Sign Up</Link>
//             </Button>
//           </HStack>
//         )} */}

//       {/* Mobile Footer Buttons */}
//       {showMobileNav && (
//         // <HStack spacing="6">
      
//         <VStack
//           spacing="4"
//           align="center"
//           justify="center"
//           display={{ base: "flex", md: "none" }}
//           position="absolute"
//           bottom="4"
//           w="full"
//         >
//             <Button variant="unstyled" color="white">
//           <Link to="/">Home</Link>
//         </Button>
//         <Button variant="unstyled" color="white">
//           <Link to="/exchange">Exchange</Link>
//         </Button>
//         <Button variant="unstyled" color="white">
//           <Link to="/coins">Coins</Link>
//         </Button>
      
//           <Button colorScheme="teal" variant="solid">
//             <Link to="/login">Log in</Link>
//           </Button>
//           <Button colorScheme="teal" variant="outline">
//             <Link to="/signup">Sign Up</Link>
//           </Button>
//         </VStack>
//         // </HStack>
//       )}
//       </HStack>

//     </Box>
//   );
// };

// export default Header;

import React from 'react';
import { Button, HStack, Text, Box, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Adjust the visibility of elements based on screen size
  const showDesktopNav = useBreakpointValue({ base: false, md: true });
  const showMobileNav = useBreakpointValue({ base: true, md: false });

  return (
    <Box 
      p={{base : "2" , md :"4"}} 
      shadow="base" 
      bgColor="blackAlpha.900" 
      position="relative"
      w="full"
    >
      <HStack
        spacing={{ base: "2", md: "10" }}
        justify="space-between"
        align="center"
        wrap="wrap"
        mx="auto"

      >
        <Text

          fontSize={{ base: "lg", md: "xl" }} // Responsive font size
          textAlign={{ base:"center", md:"start"}}
          fontWeight="bold"
          color="white"
        >
          WolfXCoins
        </Text>

        {/* Desktop Navigation */}
        {showDesktopNav && (
          <HStack spacing="6" marginRight={12}>
            <Button variant="unstyled" color="white">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="unstyled" color="white">
              <Link to="/exchange">Exchange</Link>
            </Button>
            <Button variant="unstyled" color="white">
              <Link to="/coins">Coins</Link>
            </Button>
            <Button colorScheme="teal" variant="solid">
              <Link to="/login">Log in</Link>
            </Button>
            <Button colorScheme="teal" variant="outline">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </HStack>
        )}

        {/* Mobile Navigation */}
        {showMobileNav && (
          <VStack
            spacing="4"
            align="center"
            justify="center"
            display={{ base: "flex", md: "none" }}
            position="absolute"
            top="4"
            left="4"
            right={{base : "0",md : "4" }}
          >
            {/* <HStack spacing={{base: "2" . md :"4"}}>
             */}
             <HStack spacing={{ base: "1.5", md: "4" }}>

              <Button variant="unstyled" color="white"  fontSize={{ base : "8px"}}>
                <Link to="/">Home</Link>
              </Button>
              <Button variant="unstyled" color="white"  fontSize={{ base : "8px"}}>
                <Link to="/exchange">Exchange</Link>
              </Button>
              <Button variant="unstyled" color="white"  fontSize={{ base : "8px"}} >
                <Link to="/coins">Coins</Link>
              </Button>
            {/* </HStack>
            <HStack spacing="4"> */}
              <Button colorScheme="teal" variant="solid" fontSize={{ base : "10px"}}>
                <Link to="/login">Log in</Link>
              </Button>
              <Button colorScheme="teal" variant="outline"     fontSize={{ base : "10px"}}>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </HStack>
          </VStack>
        )}
      </HStack>
    </Box>
  );
};

export default Header;

// import React from 'react'
// import vg from '../assets/1.png'
// import { Box, Container, Image, Text } from '@chakra-ui/react'
// import { motion } from "framer-motion";

// const Home2 = () => {
//   return (
//     <>
// <Container 
// maxW={"full"} p={0} m={0}>
//     <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} p={8}>
//     {/* <div className="home2"> */}
//     {/* <img src={vg} alt="Graphics" /> */}
//     <motion.div
//             style={{ height: "70vh", width: "220vh" }} // Ensure image size is consistent
//             animate={{ translateY: "20px" }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           >
//             <Image
//               w={{ base: "full", md: "120%" }} // Image width more balanced on different screens
//               h={"full"}
//               objectFit={"contain"}
//               src={vg}
//               alt={"Bitcoin Image"}
//               margin={{ base: "20px 0", md: "0" }} // Add margin for small screens
//             />
//           </motion.div>
//     {/* <div> */}
//     <Text
//     color={"whiteAlpha.900"}
//     >
//         We are your one and only solution to the tech problems you face
//         every day. We are leading tech company whose aim is to increase the
//         problem solving ability in children.
        
//         We are your one and only solution to the tech problems you face
//         every day. We are leading tech company whose aim is to increase the
//         problem solving ability in children.
        
//         We are your one and only solution to the tech problems you face
//         every day. We are leading tech company whose aim is to increase the
//         problem solving ability in children.
        
//         We are your one and only solution to the tech problems you face
//         every day. We are leading tech company whose aim is to increase the
//         problem solving ability in children.
        
//         We are your one and only solution to the tech problems you face
//         every day. We are leading tech company whose aim is to increase the
//         problem solving ability in children.
//       </Text>
//     {/* </div> */}
//     {/* </div> */}
//     </Box>
//     </Container>
//     </>
// )
// }

// export default Home2


import React from 'react';
import vg from '../assets/1.png';
import { Box, Container, Image, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Home2 = () => {
  return (
    <Container maxW={'full'} p={0} m={0}>
      <Box bgColor={'blackAlpha.900'} w={'full'} h={'120vh'} p={8}>
        {/* Flex container for image and text */}
        <Flex
          direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens, side by side on medium+
          alignItems={'center'}
          justifyContent={'space-between'}
          h={'full'}
        >
          {/* Motion div with Image on the left */}
          <motion.div
            style={{ flex: 1 }} // Make it responsive within the flexbox
            animate={{ translateY: '20px' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Image
              w={{ base: 'full', md: '80%' }} // Responsive width for different screen sizes
              h={'full'}
              objectFit={'contain'}
              src={vg}
              alt={'Bitcoin Image'}
              margin={{ base: '20px 0', md: '0' }} // Margin for better spacing on smaller screens
            />
          </motion.div>

          {/* Text on the right */}
          <Box flex={1} p={{ base: 4, md: 10 }} color={'whiteAlpha.900'}>
            <Text fontSize={{ base: 'md', md: 'xl' }} textAlign={'justify'}>
              We are your one and only solution to the tech problems you face
              every day. We are a leading tech company whose aim is to increase
              the problem-solving ability in children.
              <br />
              <br />
              We are your one and only solution to the tech problems you face
              every day. We are a leading tech company whose aim is to increase
              the problem-solving ability in children.
              <br />
              <br />
              We are your one and only solution to the tech problems you face
              every day. We are a leading tech company whose aim is to increase
              the problem-solving ability in children.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Home2;

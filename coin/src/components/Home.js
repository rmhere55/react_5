// import { Box, Text, Flex, Stack, Container } from "@chakra-ui/react";
// import React from "react";
// import { motion } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import Cyl from './Cyl'; // Import the 3D Cylinder component
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import Home2 from "./Home2";
// import './style.css';

// const Home = () => {
//   return (
//     <>
//     <Container maxW={"full"} p={0} m={0}>
//       <Box bgColor={"blackAlpha.900"} w={"full"} h={"91vh"} p={8}>
//         <Flex
//           h={"full"}
//           alignItems={"center"}
//           justifyContent={"space-between"}
//           flexDirection={{ base: "column", md: "row" }} // Responsive column layout for smaller screens
//         >
//           {/* Left Section with Text */}
//           <Stack spacing={6} maxW={"lg"} paddingLeft={{base: 0 , md: 25}} marginLeft={{ base: 0, md: 30 }} textAlign={{ base: "center", md: "left" }}>
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <Text
//                 fontSize={{ base: "4xl", md: "6xl" }} // Responsive font size
//                 fontWeight={"bold"}
//                 color={"teal.300"}
//               >
//                 WolfX Coins
//               </Text>
//             </motion.div>

//             {/* Description */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, delay: 0.5 }}
//             >
//               <Text fontSize={{ base: "md", md: "xl" }} color={"gray.500"}>
//                 WolfX Coin is a platform to analyze all coins and stay updated with the latest market trends.
//               </Text>
//             </motion.div>
//           </Stack>

//           {/* Right Section with 3D Cylinder */}
//           <Box w={{ base: "100%", md: "60%" }} h={"full"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
//             <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
//               <ambientLight />
//               <Cyl />    Adding the 3D Cylinder
//               <EffectComposer>
//                 <Bloom
//                   mipmapBlur
//                   intensity={1.5}
//                   luminanceThreshold={0}
//                   luminanceSmoothing={0.5}
//                 />
//               </EffectComposer>
//             </Canvas>
//           </Box>
//         </Flex>
//       </Box>
//     </Container>
//           <Home2 w={{ base: "100%", md: "100%" }} h={"full"} display={"flex"} alignItems={"center"} justifyContent={"center"}/>

//     </>
//   );
// };





// export default Home;


import React from 'react';
import { Box, Heading, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Home2 from './Home2';
import NewsArticle from './NewsArticle'; // Import NewsArticle component
import Cyl from './Cyl'; // Import the 3D Cylinder component

const Home = () => {
  const articles = [
    {
      title: 'Bitcoin',
      imgSrc:
        'https://plus.unsplash.com/premium_photo-1668014840260-098a0f336dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMGNvaW58ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Prices',
      imgSrc:
        'https://images.unsplash.com/photo-1639821685087-74250b876743?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRpZ2l0YWwlMjBjb2lufGVufDB8fDB8fHww',
    },
    {
      title: 'All digitalCoin',
      imgSrc:
        'https://images.unsplash.com/photo-1642239817356-9dffb1bcc156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRpZ2l0YWwlMjBjb2lufGVufDB8fDB8fHww',
    },
    {
      title: "What's new with WolfX Coins",
      imgSrc:
        'https://plus.unsplash.com/premium_photo-1672912348671-9a9ec5541b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGRpZ2l0YWwlMjBjb2lufGVufDB8fDB8fHww',
    },
  ];

  return (
    <>
      {/* First Section with 3D Cylinder and Text */}
      <Container maxW="full" p={0} m={0}>
        <Box bgColor="blackAlpha.900" w="full" h="91vh" p={8}>
          <Flex
            h="full"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            {/* Left Section with Text */}
            <Stack spacing={6} maxW="lg" paddingLeft={{ base: 0, md: 25 }} marginLeft={{ base: 0, md: 30 }} textAlign={{ base: 'center', md: 'left' }}>
              <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight="bold" color="teal.300">
                  WolfX Coins
                </Text>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.5 }}>
                <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.500">
                  WolfX Coin is a platform to analyze all coins and stay updated with the latest market trends.
                </Text>
              </motion.div>
            </Stack>

            {/* Right Section with 3D Cylinder */}
            <Box w={{ base: '100%', md: '60%' }} h="full" display="flex" alignItems="center" justifyContent="center">
              <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
                <ambientLight />
                <Cyl />
                <EffectComposer>
                  <Bloom mipmapBlur intensity={1.5} luminanceThreshold={0} luminanceSmoothing={0.5} />
                </EffectComposer>
              </Canvas>
            </Box>
          </Flex>
        </Box>
      </Container>

      {/* Second Section with Home2 Component */}
      <Home2 />

      {/* Third Section with News Articles */}
      <Container maxW="full" p={0} m={0}>
        <Box bgColor="blackAlpha.800" w="full" p={8}>
          <Heading textAlign="center" py="4" color="teal.300">
            News Articles
          </Heading>
          {articles.map((article, index) => (
            <NewsArticle key={index} title={article.title} imgSrc={article.imgSrc} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Home;


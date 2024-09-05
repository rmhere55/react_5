// import { Box, Image, Text } from "@chakra-ui/react";
// import React from "react";
// import btcSrc from "../assets/1.png";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} flex={''} justifyContent={'space-evenly'}>
//       <motion.div
//         style={{
//           height: "80vh",
//         }}
//         animate={{
//           translateY: "20px",
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       >
//         <Image
//           w={"full"}
//           h={"full"}
//           objectFit={"contain"}
//           src={btcSrc}
//           // filter={"grayscale(1)"}
//         />
//       </motion.div>

//       <Text
      
//         fontSize={"6xl"}
//         textAlign={"center"}
//         fontWeight={"Bold"}
//         color={"whiteAlpha.900 , blackAlpha.900"}
//         mt={"10"}
//       >
//         WolfX Coins..</Text>
//     </Box>
//   );
// };

// export default Home;
// import { Box, Image, Text, Flex, Stack, Container } from "@chakra-ui/react";
// import React from "react";
// import btcSrc from "../assets/1.png";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <Container maxW={"full"} p={0} m={0}>
//       <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} p={8}>
//         <Flex
//           h={"full"}
//           alignItems={"center"}
//           justifyContent={"space-between"}
//           flexDirection={{ base: "column", md: "row" }} // Responsive column layout for smaller screens
//         >
//           {/* Left Section with Text */}
//           <Stack spacing={6} maxW={"lg"} marginLeft={{ base: 0, md: 14 }} textAlign={{ base: "center", md: "left" }}>
//             <motion.div
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <Text
//                 fontSize={{ base: "4xl", md: "6xl" }} // Responsive font size
//                 fontWeight={"bold"}
//                 color={"whiteAlpha.900"}
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
//               <Text fontSize={{ base: "md", md: "xl" }} color={"gray.400"}>
//                 WolfX Coin is a platform to analyze all coins and stay updated with the latest market trends.
//               </Text>
//             </motion.div>
//           </Stack>

//           {/* Right Section with Image */}
//           {/* <motion.div
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
//               src={btcSrc}
//               alt={"Bitcoin Image"}
//               margin={{ base: "20px 0", md: "0" }} // Add margin for small screens
//             />
//           </motion.div> */}
//         </Flex>
//       </Box>
//     </Container>
//   );
// };



import { Box, Text, Flex, Stack, Container } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Cyl from './Cyl'; // Import the 3D Cylinder component
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Home2 from "./Home2";
import './style.css';

const Home = () => {
  return (
    <>
    <Container maxW={"full"} p={0} m={0}>
      <Box bgColor={"blackAlpha.900"} w={"full"} h={"91vh"} p={8}>
        <Flex
          h={"full"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }} // Responsive column layout for smaller screens
        >
          {/* Left Section with Text */}
          <Stack spacing={6} maxW={"lg"} paddingLeft={{base: 0 , md: 25}} marginLeft={{ base: 0, md: 30 }} textAlign={{ base: "center", md: "left" }}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Text
                fontSize={{ base: "4xl", md: "6xl" }} // Responsive font size
                fontWeight={"bold"}
                color={"whiteAlpha.900"}
              >
                WolfX Coins
              </Text>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <Text fontSize={{ base: "md", md: "xl" }} color={"gray.500"}>
                WolfX Coin is a platform to analyze all coins and stay updated with the latest market trends.
              </Text>
            </motion.div>
          </Stack>

          {/* Right Section with 3D Cylinder */}
          <Box w={{ base: "100%", md: "60%" }} h={"full"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
              <ambientLight />
              <Cyl /> {/* Adding the 3D Cylinder */}
              <EffectComposer>
                <Bloom
                  mipmapBlur
                  intensity={1.5}
                  luminanceThreshold={0}
                  luminanceSmoothing={0.5}
                />
              </EffectComposer>
            </Canvas>
          </Box>
        </Flex>
      </Box>
    </Container>
          <Home2 w={{ base: "100%", md: "100%" }} h={"full"} display={"flex"} alignItems={"center"} justifyContent={"center"}/>

    </>
  );
};





export default Home;

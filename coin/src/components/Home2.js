import React from 'react';
import vg from '../assets/1.png';
import { Box, Container, Image, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Home2 = () => {
  return (
    <>
    <Container maxW={'full'} p={0} m={0} overflow={'hidden'}>
      <Box bgColor={'blackAlpha.900'} w={'full'} h={'120vh'} p={8}>
        {/* Flex container for image and text */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          
          alignItems={'center'}
          justifyContent={'space-between'}
          h={'full'}
        >
          
          <motion.div
            style={{ flex: 1 }}
            
            animate={{ translateY: '20px' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Image
              w={{ base: 'full', md: '80%' }} 
              
              h={'full'}
              objectFit={'contain'}
              src={vg}
              alt={'Bitcoin Image'}
              margin={{ base: '20px 0', md: '0' }} 
              
            />
          </motion.div>

          {/* Text on the right */}
          <Box flex={1} p={{ base: 4, md: 10 }} color={'whiteAlpha.900'}>
          <Text 
  fontSize={{ base: '3xl', md: '5xl' }}  

  fontWeight={"bold"}
  // marginTop={'10vh'}
  // fontWeight="600"  // Set font weight
  color="teal.300"  // Set the color to white
  textAlign="center"  // Center the text
>
  About Us
</Text>

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

    </>
  );
};

export default Home2;

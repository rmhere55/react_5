import React from "react";
import { Box, Heading, Text, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-r, blackAlpha.800, blackAlpha.700)"
      color="white"
      bgColor="blackAlpha.900"
      py="8"
      px="4"
      mt="0" 
      
    >
      <VStack spacing="6" textAlign="center">
        <Box>
          <Heading size="lg" fontWeight="bold" mb="2" color="teal.300">
            WolfX Coin
          </Heading>
          <Text fontSize="sm" color="gray.300">
            &copy; {new Date().getFullYear()} All rights reserved
          </Text>
        </Box>

        <Box>
          <Heading size="sm" mb="4" color="teal.400">
            Follow Us
          </Heading>
          <HStack spacing="6">
            <Link
              href="https://www.linkedin.com/in/raj-laxmi-singh-4965b7232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              isExternal
              _hover={{ color: "teal.300" }}
            >
              <Icon as={FaLinkedin} w={6} h={6} />
            </Link>
            <Link href="https://instagram.com/hyy_r.m" isExternal _hover={{ color: "teal.300" }}>
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link href="https://github.com/rmhere55" isExternal _hover={{ color: "teal.300" }}>
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Footer;

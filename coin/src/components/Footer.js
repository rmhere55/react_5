import { Avatar, Box, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from 'react-router-dom';

const avatarSrc = "https://api.github.com/users/rmhere55";

const Footer = () => {
  const data = useLoaderData();  // Move useLoaderData inside the component

  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Image boxSize={"28"} mt={["4", "0"]} src={avatarSrc.avatar_url} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/rmhere55');
  return response.json();
};

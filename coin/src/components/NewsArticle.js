// NewsArticle.js
import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

const NewsArticle = ({ title, imgSrc }) => {
  const handleMouseEnter = (e) => {
    const img = e.target.querySelector("img");
    if (img) img.style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    const img = e.target.querySelector("img");
    if (img) img.style.opacity = 0;
  };

  const handleMouseMove = (e) => {
    const img = e.target.querySelector("img");
    if (img) {
      img.style.left = `${e.clientX}px`;
    }
  };

  return (
    <Box
      position="relative"
      height="100px"
      width="100%"
      borderBottom="2px solid white"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      cursor="pointer"
    >
      <Heading
        fontSize="4vw"
        position="relative"
        zIndex={9}
        mixBlendMode="difference"
      >
        {title}
      </Heading>
      <Image
        src={imgSrc}
        alt={title}
        position="absolute"
        height="150px"
        width="180px"
        objectFit="cover"
        objectPosition="center"
        marginTop="100px"
        borderRadius="full"
        opacity={0}
        transition="all linear 0.3s"
      />
    </Box>
  );
};

export default NewsArticle;

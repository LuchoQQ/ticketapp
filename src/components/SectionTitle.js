import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function SectionTitle({title, bg, color}) {
  return (
    <>
      <Flex
        position="relative"
        justifyContent="center"
        _before={{
          content: `""`,
          position: "absolute",
          width: "100%",
          height: "2px",
          bg: "#202020",
          top: "50%",
        }}
        px="1rem"
      >
        <Text
          px="1rem"
          fontSize="6xl"
          textAlign="center"
          position="relative"
          bg={bg}
          color={color}
          zIndex={100}
        >
          {title}
        </Text>
      </Flex>
    </>
  );
}

export default SectionTitle;

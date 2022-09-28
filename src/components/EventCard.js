import { Box, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";

function EventCard({src}) {
  const theme = useTheme();
  return (
    <>
      <Flex flexDir="column" h="auto" minW="20vw" gap="1rem" maxW="20rem">
        <Box w="100%" overflow="hidden">
          <Image
            src={src}
            objectFit="cover"
            transition="all 0.2s ease"
            h='200'
            w='100%'
            _hover={{
              transform: "scale(1.1)",
            }}
          />
        </Box>
        <Text fontFamily={theme.fonts.primary} color="#606060">
          Sun | Sep 11, 2022
        </Text>
        <Text fontFamily={theme.fonts.primary} fontSize="xl">
          7 DAYS OF INCREDIBLE LIVE PERFORMANCES AND THEATRICAL EXTRAVAGANZA AT
          O DUBAI - LOUNGE & CLUB
        </Text>
      </Flex>
    </>
  );
}

export default EventCard;

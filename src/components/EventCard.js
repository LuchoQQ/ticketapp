import { Box, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";

function EventCard() {
  const theme = useTheme();
  return (
    <>
      <Flex flexDir="column" h="auto" w="25vw" gap="1rem">
        <Box bg="#202020" w="100%" overflow="hidden">
          <Image
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663179911/279140078_1780149818982718_5146374659619253410_n_fxdjiq.jpg"
            objectFit="cover"
            transition="all 0.2s ease"
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

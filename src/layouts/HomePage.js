import { Box, Flex, Icon, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import party from "../assets/party.mp4";
import Navbar from "../components/Navbar";
import { GiCrownedSkull } from "react-icons/gi";
function HomePage() {
  const theme = useTheme();
  return (
    <>
      <Flex h="100vh" w="100vw" bg="#000">
        <video
          src={party}
          autoPlay={true}
          muted={true}
          loop
          width="100%"
          height="100px"
          style={{
            filter: "blur(5px)",
            background: "#000",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Flex
          h="100vh"
          w="100vw"
          position="absolute"
          left="0"
          justifyContent="center"
          alignContent="center"
        >
          <Box alignSelf="center">
            <Flex>
              <Flex>
                <Icon mr="1rem" as={GiCrownedSkull} w='200px' h='500px' fill="red" />
                <Text
                  fontSize="5xl"
                  color="#ababab"
                  fontFamily={theme.fonts.tertiary}
                  alignSelf="center"
                >
                  Rythm&
                </Text>
                <Text
                  fontSize="5xl"
                  color="#dedede"
                  fontFamily={theme.fonts.tertiary}
                  alignSelf="center"
                >
                  Lounge
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Text fontSize="4xl">Enterate de eventos Techno cerca!</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex w="100vw" h="100vh" position="absolute">
          <Navbar />
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;

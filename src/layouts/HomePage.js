import {
  Box,
  Flex,
  Grid,
  Icon,
  Image,
  position,
  Text,
  useTheme,
} from "@chakra-ui/react";
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
        <Grid
          h="100vh"
          w="100vw"
          position="absolute"
          left="0"
          justifyItems="center"
          alignItems="center"
        >
          <Flex flexDir="column" gap="1rem">
            <Icon
              as={GiCrownedSkull}
              w="100px"
              h="100px"
              alignSelf="center"
              mb="auto"
            />
            <Flex
              fontSize="6xl"
              fontFamily={theme.fonts.tertiary}
              color="#9e002c"
              alignSelf="center"
            >
              IBIZA
            </Flex>
            <Flex
              fontSize="xl"
              fontFamily={theme.fonts.primary}
              color="#ababab"
              textAlign="center"
            >
              Nightclub & Lounge Bar
            </Flex>
          </Flex>
          <Flex>
            <Image
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663783284/png-clipart-jagermeister-logo-font-brand-jagermeister-logo-label-trademark-removebg-preview_vwayck.png"
              w="100px"
              fit="contain"
            />
            <Image
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663783654/585e5d9dcb11b227491c33ea-removebg-preview_nlzaeh.png"
              w="100px"
              fit="contain"
            />
            <Image
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663783353/png-clipart-heineken-english-free-buckle-material-logo-removebg-preview_q0ljjz.png"
              w="100px"
              fit="cover"
            />
            <Image
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663783482/spreed-removebg-preview_aupb47.png"
              w="100px"
              fit="cover"
            />
          </Flex>
          {/* <Flex flexDir="column" alignContent="center" gap="2rem" w="40vw">
            <Flex justifyContent="center" mb="auto">
              <Flex>
                <Text
                  alignSelf="center"
                  fontSize="2xl"
                  fontFamily={theme.fonts.tertiary}
                  color="#ababab"
                >
                  Ryth
                </Text>
                <Text
                  alignSelf="center"
                  fontSize="2xl"
                  fontFamily={theme.fonts.tertiary}
                  color="#ababab"
                >
                  &
                </Text>
                <Text
                  alignSelf="center"
                  fontSize="2xl"
                  fontFamily={theme.fonts.tertiary}
                  color="#ababab"
                >
                  Lounge
                </Text>
              </Flex>
            </Flex>
            <Text
              color="#ababab"
              fontSize="4xl"
              fontFamily={theme.fonts.secondary}
              mt="auto"
              mb="auto"
              textAlign="center"
            >
              Punto de reencuentro
            </Text>
            <Text
              color="#707070"
              textAlign="center"
              fontFamily={theme.fonts.primary}
              fontSize="sm"
            >
              Comprá tu ticket, organizá tu evento, accede a beneficios puertas
              adentroasdawdawdw.
            </Text>
          </Flex> */}
        </Grid>
        <Flex w="100vw" h="100vh" position="absolute">
          <Navbar />
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;

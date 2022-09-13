import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GiCrownedSkull } from "react-icons/gi";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillMail,
} from "react-icons/ai";
import party from "./assets/party.mp4";
import "./App.css";
import NavContactItem from "./components/NavContactItem";

function App() {
  const theme = useTheme();
  return (
    <>
      <Flex
        w="100%"
        position="absolute"
        gap="2rem"
        justifyContent="center"
        zIndex={9999}
        py="1rem"
        px="2rem"
      >
        <Icon as={GiCrownedSkull} fill="#dedede" fontSize="5xl" mr="auto" />

        <Flex gap="2rem" alignSelf="center" ml="auto">
          <NavContactItem icon={AiFillLinkedin} />
          <NavContactItem icon={AiFillGithub} />
          <NavContactItem icon={AiOutlineWhatsApp} />
          <NavContactItem icon={AiFillMail} />
        </Flex>
      </Flex>
      <Grid h="200vh">
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

            <Flex w='100vw' h='100vh' position='absolute' >
              <Box>

              </Box>
            </Flex>

          <Flex
            w="100vw"
            h="10vh"
            position="absolute"
            top="90vh"
            justifyContent="center"
          >
            <Grid
              autoFlow="column"
              gap="1rem"
              alignSelf="center"
              fontFamily={theme.fonts.primary}
            >
              <Text fontSize="lg" color="#a1a1a1">
                Inicio
              </Text>
              <Text fontSize="lg" color="#a1a1a1">
                About
              </Text>
              <Text fontSize="lg" color="#a1a1a1">
                Services
              </Text>
              <Text fontSize="lg" color="#a1a1a1">
                Contact
              </Text>
            </Grid>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default App;

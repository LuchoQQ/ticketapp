import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  useTheme,
  keyframes,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./layouts/HomePage";

function App() {
  const theme = useTheme();

  const animationKeyframes = keyframes`
  0% { transform: rotate(0deg) }
  25% { transform: rotate(90deg) }
  50% { transform: rotate(180deg) }
  75% { transform: rotate(270deg) }
  100% { transform: rotate(360deg) }
  `;
  const animation = `${animationKeyframes} 5s ease-in-out infinite`;

  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      {/* Body */}
      <Grid>
        <section className="inicio">
          <HomePage />
        </section>
        <section className="eventos">
          <Grid
            w="100vw"
            h="100vh"
            bg="#dedede"
            justifyContent="center"
            alignContent="center"
            autoFlow="column"
            gap="4rem"
          >
            <Flex
              w="20vw"
              h="60vh"
              bg="#202020"
              position="relative"
              justifyContent="center"
              alignContent="center"
              _before={{
                content: `""`,
                alignSelf: "center",
                position: "absolute",
                width: "97%",
                marginLeft: "2%",
                height: "98%",
                bg: "#202020",
                zIndex: 9999999,
              }}
            >
              <ChakraBox
                animate={{
                  rotate: [0, 360],
                }}
                // @ts-ignore no problem in operation, although type error appears.
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                w="20vw"
                h="60vh"
                left="-50%"
                top="-50%"
                position="absolute"
                bg="linear-gradient(0deg, transparent, red, red)"
                transformOrigin="bottom right"

                /* _after={{
                  content: `""`,
                  position: "absolute",
                  width: "20vw",
                  height: "100vh",
                  top: "-120%",
                  left: "-50%",
                  bg: "linear-gradient(0deg, transparent 0%,  red, red, red)",
                  transformOrigin: "bottom right",
                  zIndex: 999999,
                }} */
              />
            </Flex>
            <Box w="20vw" h="60vh" bg="#202020"></Box>
            <Box w="20vw" h="60vh" bg="#202020"></Box>
          </Grid>
        </section>
        <section className="about">
          <Grid w="100vw" h="100vh" bg="#121212"></Grid>
        </section>
        <section className="contact">
          <Grid w="100vw" h="100vh" bg="#202020"></Grid>
        </section>
        <Header />
      </Grid>
    </>
  );
}

export default App;

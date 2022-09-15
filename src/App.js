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
  VStack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { useState } from "react";
import "./App.css";
import CardServices from "./components/CardServices";
import EventCard from "./components/EventCard";
import Header from "./components/Header";
import HomePage from "./layouts/HomePage";
import { useFormik } from "formik";
import ContactPage from "./layouts/ContactPage";
function App() {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
            gap="2rem"
          >
            <Text
              fontSize="6xl"
              textAlign="center"
              position="relative"
              _before={{
                content: `""`,
                position: "absolute",
                w: "20%",
                h: "2px",
                bg: "#505050",
                top: "50%",
                left: "15%",
                zIndex: 1,
              }}
              _after={{
                content: `""`,
                position: "absolute",
                w: "20%",
                h: "2px",
                bg: "#505050",
                top: "50%",
                left: "65%",
                zIndex: 1,
              }}
              bg="#dedede"
              zIndex={100}
            >
              Events
            </Text>
            <Grid
              justifyContent="center"
              alignContent="center"
              autoFlow="column"
              gap="4rem"
            >
              <EventCard />
              <EventCard />
              <EventCard />
            </Grid>
          </Grid>
        </section>
        <section className="about">
          <Grid
            w="100vw"
            h="100vh"
            bg="#121212"
            justifyContent="center"
            alignContent="center"
            gap="1rem"
            position="relative"
          >
            <Text
              fontSize="6xl"
              textAlign="center"
              position="relative"
              _before={{
                content: `""`,
                position: "absolute",
                w: "20%",
                h: "2px",
                bg: "#505050",
                top: "50%",
                left: "15%",
                zIndex: 1,
              }}
              _after={{
                content: `""`,
                position: "absolute",
                w: "20%",
                h: "2px",
                bg: "#505050",
                top: "50%",
                left: "65%",
                zIndex: 1,
              }}
              zIndex={100}
              color="#dedede"
            >
              Services
            </Text>
            <Grid autoFlow="column" gap="2rem">
              <CardServices
                color="linear-gradient(0deg, transparent, #9e002c, #9e002c)"
                neutral="#9e002c"
                base="linear-gradient(270deg, rgba(232,0,65,1) 12%, rgba(186,0,52,1) 45%, rgba(158,0,44,1) 84%)"
              />
              <CardServices
                color={"linear-gradient(0deg, transparent, #005dba, #005dba)"}
                neutral="#005dba"
                base="linear-gradient(270deg, rgba(0,93,186,1) 12%, rgba(27,130,232,1) 45%, rgba(46,149,252,1) 84%)"
              />
              <CardServices
                color="linear-gradient(0deg, transparent, #cd5400, #cd5400)"
                neutral="#cd5400"
                base="linear-gradient(270deg, rgba(205,84,0,1) 14%, rgba(205,84,0,1) 45%, rgba(255,104,0,1) 84%)"
              />
            </Grid>
          </Grid>
        </section>
        <section className="contact">
          <ContactPage />
        </section>
        <Header />
      </Grid>
    </>
  );
}

export default App;

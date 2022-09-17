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
import ServicesPage from "./layouts/ServicesPage";
import EventsPage from "./layouts/EventsPage";
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
          <EventsPage />
        </section>
        <section className="services">
          <ServicesPage />
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

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
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./layouts/HomePage";

function App() {
  const theme = useTheme();

  return (
    <>
      {/* Body */}
      <Grid>
        <section className="inicio">
          <HomePage />
        </section>
        <section className="eventos">
          <Grid w="100vw" h="100vh" bg="#dedede"></Grid>
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

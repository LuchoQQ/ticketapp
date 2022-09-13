import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import party from "../assets/party.mp4";
import Navbar from "../components/Navbar";
function HomePage() {
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

        <Flex w="100vw" h="100vh" position="absolute">
          <Navbar />
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;

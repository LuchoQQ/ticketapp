import { Grid, Text } from "@chakra-ui/react";
import React from "react";
import CardServices from "../components/CardServices";

function ServicesPage() {
  return (
    <>
      <Grid
        w="100vw"
        minH="100vh"
        bg="#121212"
        justifyContent="center"
        alignContent="center"
        gap="1rem"
        position="relative"
        pY={["2rem"]}
      >
        <Text
          fontSize="6xl"
          textAlign="center"
          position="relative"
          zIndex={100}
          color="#dedede"
          bg="#121212"
          _before={{
            content: `""`,
            position: "absolute",
            width: "100%",
            height: "2px",
            bg: "#fff",
            left: "-80%",
            top: "50%",
          }}
        >
          Services
        </Text>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={["2rem", "4rem"]}
        >
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
    </>
  );
}

export default ServicesPage;

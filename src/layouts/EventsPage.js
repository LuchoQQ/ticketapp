import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import EventCard from "../components/EventCard";

function EventsPage() {
  return (
    <>
      <Grid
        w="100vw"
        minH="100vh"
        bg="#dedede"
        justifyContent="center"
        alignContent="center"
        gap="2rem"
        paddingY="5rem"
      >
        <Flex
          position="relative"
          justifyContent='center'
          _before={{
            content: `""`,
            position: "absolute",
            width: "100%",
            height: "2px",
            bg: "#202020",
            top: "50%",
          }}
          px='1rem'
        >
          <Text
          px='1rem'
            fontSize="6xl"
            textAlign="center"
            position="relative"
            bg="#dedede"
            zIndex={100}
          >
            Events
          </Text>
        </Flex>
        <Grid
          gap="4rem"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
        >
          <EventCard />
          <EventCard />
          <EventCard />
        </Grid>
      </Grid>
    </>
  );
}

export default EventsPage;

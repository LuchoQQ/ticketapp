import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import EventCard from "../components/EventCard";
import SectionTitle from "../components/SectionTitle";

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
        <SectionTitle title="Events" bg='#dedede' />
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

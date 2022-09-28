import { Box, Flex, Grid, Icon, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import EventCard from "../components/EventCard";
import SectionTitle from "../components/SectionTitle";
import { AiOutlineArrowRight } from "react-icons/ai";
function EventsPage() {
  const theme = useTheme();
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
        <SectionTitle title="Events" bg="#dedede" />
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
          <EventCard src="https://res.cloudinary.com/diylksocz/image/upload/v1663179911/279140078_1780149818982718_5146374659619253410_n_fxdjiq.jpg" />
          <EventCard src="https://res.cloudinary.com/diylksocz/image/upload/v1664348886/305050922_115984347897447_2205466429014276484_n_q6l5r8.jpg" />
          <EventCard src="https://res.cloudinary.com/diylksocz/image/upload/v1664349053/278622499_954809861904270_6483603864387841337_n_qaddyj.jpg" />
        </Grid>
        <Flex justifyContent="end">
          <Flex cursor="pointer" gap="1rem">
            <Text
              textAlign="end"
              fontSize="xl"
              fontFamily={theme.fonts.primary}
            >
              Ver Más
            </Text>
            <Icon alignSelf="center" as={AiOutlineArrowRight} fontSize="2xl" />
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default EventsPage;

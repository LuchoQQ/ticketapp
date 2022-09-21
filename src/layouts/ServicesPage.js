import { Grid, Text } from "@chakra-ui/react";
import React from "react";
import CardServices from "../components/CardServices";
import SectionTitle from "../components/SectionTitle";
import { MdOutlineEventNote } from "react-icons/md";
import { FaCocktail, FaTicketAlt } from "react-icons/fa";
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
        <SectionTitle title="Services" bg="#121212" color="#ababab" />
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
            icon={MdOutlineEventNote}
            title="Eventos"
            content="Organizá tu evento con nosotros!"
          />
          <CardServices
            color={"linear-gradient(0deg, transparent, #005dba, #005dba)"}
            neutral="#005dba"
            base="linear-gradient(270deg, rgba(0,93,186,1) 12%, rgba(27,130,232,1) 45%, rgba(46,149,252,1) 84%)"
            icon={FaCocktail}
            title="RestoBar"
            content="Disponemos de servicio de catering"
          />
          <CardServices
            color="linear-gradient(0deg, transparent, #cd5400, #cd5400)"
            neutral="#cd5400"
            base="linear-gradient(270deg, rgba(205,84,0,1) 14%, rgba(205,84,0,1) 45%, rgba(255,104,0,1) 84%)"
            icon={FaTicketAlt}
            title="Reservas"
            content="Entradas anticipadas"
            
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ServicesPage;

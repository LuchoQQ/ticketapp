import { Grid, Text, theme } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./layouts/HomePage";
import ContactPage from "./layouts/ContactPage";
import ServicesPage from "./layouts/ServicesPage";
import EventsPage from "./layouts/EventsPage";
function App() {
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
        <footer>
          <Grid
            w="100vw"
            h="20vh"
            bg="#202020"
            justifyContent="center"
            alignContent="center"
          >
            <Text
              fontSize="lg"
              color="#dedede"
              fontFamily={theme.fonts.primary}
            >
              Copyright 2022 © | Ibiza Bar & Lounge 
            </Text>
            <Text
              fontSize="lg"
              color="#dedede"
              fontFamily={theme.fonts.primary}
              textAlign='center'
            >
              Created by LuchoQQ
            </Text>
          </Grid>
        </footer>
      </Grid>
    </>
  );
}

export default App;

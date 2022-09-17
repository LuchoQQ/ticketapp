import {
  Flex,
  Text,
  useTheme,
  Box,
  Link as LinkChakra,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../nose.css";
function Navbar() {
  const theme = useTheme();
  const [navbar, setNavbar] = useState(false);
  const [location, setLocation] = useState("inicio");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight - window.innerHeight * 0.1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  const navItems = [
    {
      path: "inicio",
      value: "Inicio",
    },
    {
      path: "eventos",
      value: "Eventos",
    },
    {
      path: "services",
      value: "Services",
    },
    {
      path: "contact",
      value: "Contact",
    },
  ];

  return (
    <>
      <Flex
        w="100vw"
        justifyContent="center"
        h="10vh"
        fontFamily={theme.fonts.primary}
        gap="1rem"
        transition={"all 0.5s ease"}
        alignItems="center"
        mt="auto"
        zIndex={99999999999999}
        position={navbar ? "fixed" : "relative"}
        bg={navbar ? "#101010" : "rgba(0,0,0,0)"}
      >
        {navItems.map((item, index) => {
          return (
            <div key={index}>
              <LinkChakra
                as={Link}
                to={item.path}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={(e) => setLocation(e)}
                position="relative"
                style={{ textDecoration: 'none' }}
                _before={
                  location === item.path
                    ? {
                        left: "0%",
                        content: `""`,
                        position: "absolute",
                        top: "1.5rem",
                        width: "100%",
                        height: "2px",
                        bg: "linear-gradient(90deg, rgba(123,0,142,1) 0%, rgba(121,9,48,1) 35%, rgba(149,0,79,1) 100%)",
                        transition: "all .5s ease",
                      }
                    : {
                        content: `""`,
                        position: "absolute",
                        width: "0%",
                        left: "40%",
                        top: "1.5rem",
                        height: "2px",
                        bg: "linear-gradient(90deg, rgba(123,0,142,1) 0%, rgba(121,9,48,1) 35%, rgba(149,0,79,1) 100%)",
                        transition: "all .5s ease",
                      }
                }
              >
                <Text
                  fontSize="lg"
                  color={location === item.path ? "#dedede" : "#a1a1a1"}
                >
                  {item.value}
                </Text>
              </LinkChakra>
            </div>
          );
        })}
      </Flex>
    </>
  );
}

export default Navbar;

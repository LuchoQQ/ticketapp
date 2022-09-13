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
    if (window.scrollY >= window.innerHeight) {
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
      path: "about",
      value: "About",
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
        zIndex={999}
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
                
                _before={
                  location === item.path
                    ? {
                        content: `""`,
                        position: "absolute",
                        width: "100%",
                        height: "5px",
                        bg: "red",
                        transition: "all .5s ease"
                      }
                    : {
                        content: `""`,
                        position: "absolute",
                        width: "0%",
                        height: "5px",
                        bg: "red",
                        transition: "all .5s ease"
                      }
                }
              >
                <Text fontSize="lg" color="#a1a1a1">
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

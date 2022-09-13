import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import NavContactItem from "./NavContactItem";
import { GiCrownedSkull } from "react-icons/gi";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillMail,
} from "react-icons/ai";

function Header() {
  return (
    <>
      <Flex
        w="100%"
        position="absolute"
        gap="2rem"
        justifyContent="center"
        zIndex={9999}
        py="1rem"
        px="2rem"
      >
        {/* Logo Header */}
        <Icon as={GiCrownedSkull} fill="#dedede" fontSize="5xl" mr="auto" />

        <Flex gap="2rem" alignSelf="center" ml="auto">
          <NavContactItem icon={AiFillLinkedin} />
          <NavContactItem icon={AiFillGithub} />
          <NavContactItem icon={AiOutlineWhatsApp} />
          <NavContactItem icon={AiFillMail} />
        </Flex>
      </Flex>
    </>
  );
}

export default Header;

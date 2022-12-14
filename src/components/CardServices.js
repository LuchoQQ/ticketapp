import {
  Flex,
  ChakraBox,
  chakra,
  shouldForwardProp,
  Box,
  Text,
  Grid,
  useTheme,
  Icon,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import React from "react";

function CardServices({
  color,
  base,
  neutral,
  content,
  icon,
  title,
  description,
}) {
  const theme = useTheme();
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      <ChakraBox
        cursor="pointer"
        as={Flex}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        w="20vw"
        h="60vh"
        bg="#202020"
        position="relative"
        justifyContent="center"
        alignContent="center"
        overflow="hidden"
        role="group"
        borderRadius="15px"
        maxW="20rem"
        minW="20rem"
      >
        <ChakraBox
          animate={{
            rotate: [0, 360],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          w="20vw"
          h="50vh"
          maxW="20rem"
          minW="20rem"
          style={{
            overflow: "hidden",
          }}
          left="-50%"
          top="-50%"
          position="absolute"
          bg={color}
          transformOrigin="bottom right"
        />
        <Flex
          maxW="19rem"
          minW="19rem"
          borderRadius="15px"
          alignSelf="center"
          justifyContent="center"
          position="absolute"
          width="22vw"
          height="59vh"
          bg="#202020"
          zIndex={10}
          p="1rem"
          flexDir="column"
          gap="2rem"
          transition="all 0.2s ease"
          fontFamily={theme.fonts.primary}
          _groupHover={{
            bg: base,
          }}
        >
          <Grid gap="1rem">
            <Icon
              as={icon}
              w="100%"
              fill={neutral}
              fontSize={["4xl", "4xl", "4xl", "4xl", "5xl", "7xl"]}
            />
            <Text
              color="#dedede"
              textAlign="center"
              fontSize={["xl", "xl", "xl", "xl", "xl", "3xl"]}
            >
              {title}
            </Text>
          </Grid>
          <Text
            color="#ababab"
            fontSize={["sm", "sm", "sm", "sm", "sm", "lg"]}
            textAlign="center"
          >
            {content}
          </Text>
          <Text
            color="#ababab"
            fontSize={["sm", "sm", "sm", "sm", "sm", "lg"]}
            textAlign="center"
            px='1rem'
          >
            {description}
          </Text>
        </Flex>
      </ChakraBox>
    </>
  );
}

export default CardServices;

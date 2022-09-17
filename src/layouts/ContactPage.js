import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
  VStack,
  Button,
  useTheme,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import SectionTitle from "../components/SectionTitle";
function ContactPage() {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Grid
        w="100vw"
        h="100vh"
        bg="#dedede"
        justifyContent="center"
        alignContent="center"
        fontFamily={theme.fonts.primary}
        gap="3rem"
      >
        <SectionTitle title='Contact' bg='#dedede'/>
        <Box minW="320px" w="50vw" maxW="500px" bg="#202020" p="2rem">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="email" fontSize="xl" color="#dedede">
                  Email Address
                </FormLabel>
                <Input
                  size="lg"
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  fontSize="md"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="name" fontSize="xl" color="#dedede">
                  Name
                </FormLabel>
                <Input
                  size="lg"
                  id="name"
                  name="name"
                  type="name"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  fontSize="md"
                  focusBorderColor="red.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="message" fontSize="xl" color="#dedede">
                  Message
                </FormLabel>
                <Textarea
                  size="lg"
                  id="message"
                  name="message"
                  type="message"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  fontSize="md"
                />
              </FormControl>

              <Button type="submit">Login</Button>
            </VStack>
          </form>
        </Box>
      </Grid>
    </>
  );
}

export default ContactPage;

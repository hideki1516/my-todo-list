import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box bg="blue.300" padding={5}>
      <Heading as="h1" size="xl">
        Todo App
      </Heading>
    </Box>
  );
};

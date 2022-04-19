import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AccordionHelp } from "../components/AccordionHelp/AccordionHelp";
import { BoxConsultasHelp } from "../components/BoxConsultasHelp/BoxConsultasHelp";

export const Ayuda = () => {
  return (
    <Box fontFamily="Urbanist" p="8">
      <Box // tittle
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        mb="8"
      >
        <Text
          sx={{
            fontSize: "20px",
            fontWeight: "500",
          }}
          as="h1"
        >
          Preguntas Frecuentes
        </Text>
        <Link to="/">
          <Icon as={FaArrowLeft} fill="#ff7c40" />
        </Link>
      </Box>
      <AccordionHelp />
      <BoxConsultasHelp />
    </Box>
  );
};

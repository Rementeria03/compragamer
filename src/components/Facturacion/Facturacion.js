import { Box, Icon, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import afip from "../../img/afip.png";
import { FaFileInvoiceDollar } from "react-icons/fa";

export const Facturacion = ({ datosEnvio, setDatosEnvio }) => {
  function userData(e) {
    setDatosEnvio({ ...datosEnvio, [e.target.name]: e.target.value });
  }
  return (
    <Box
      display="flex"
      w="full"
      px="6"
      py="4"
      gap="20px"
      boxShadow="md"
      borderRadius="md"
      textAlign="center"
      sx={{
        "@media screen and (max-width:700px)": {
          flexDir: "column",
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        sx={{
          "@media screen and (max-width: 700px)": {
            justifyContent: "center",
            w: "full",
          },
        }}
      >
        <Image maxW="94px" src={afip} />
      </Box>
      <Box w="full" display="flex" flexDir="column" gap="10px">
        <Box display="flex" gap="10px" alignItems="center" textAlign="left">
          <Icon as={FaFileInvoiceDollar}></Icon>
          <Text>Facturacion - Consumidor final</Text>
        </Box>
        <Box
          display="flex"
          gap="20px"
          sx={{
            "@media screen and (max-width: 904px)": {
              flexDir: "column",
            },
          }}
        >
          <Input
            placeholder="Nombre y apellido"
            onChange={userData}
            value={datosEnvio.nameAndSurname}
            name="nameAndSurname"
          ></Input>
          <Input
            placeholder="direccion real"
            onChange={userData}
            value={datosEnvio.direction}
            name="direction"
          ></Input>
          <Input
            type="number"
            placeholder="DNI"
            onChange={userData}
            value={datosEnvio.dni}
            name="dni"
          ></Input>
        </Box>
      </Box>
    </Box>
  );
};

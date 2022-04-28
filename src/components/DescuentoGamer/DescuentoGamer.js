import { Box, Button, Image, Input, InputGroup } from "@chakra-ui/react";
import React from "react";
import descuento from "../../img/descuentoGamer.png";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const DescuentoGamer = ({ datosEnvio, setDatosEnvio }) => {
  function aplicarDescuento() {
    setDatosEnvio({
      ...datosEnvio,
      codigoDescuento: !datosEnvio.codigoDescuento,
    });
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
        <Image maxW="94px" src={descuento} />
      </Box>
      <Box display="flex" flexDir="column" w="full" gap="10px">
        <InputGroup>
          <Input placeholder="Codigo de descuento"></Input>
          {!datosEnvio.codigoDescuento ? (
            <Button
              ml="2"
              onClick={aplicarDescuento}
              children={<FaCheck color="#fd611a" />}
            ></Button>
          ) : (
            <Button
              ml="2"
              onClick={aplicarDescuento}
              children={<AiOutlineClose color="red"></AiOutlineClose>}
            ></Button>
          )}
        </InputGroup>
      </Box>
    </Box>
  );
};

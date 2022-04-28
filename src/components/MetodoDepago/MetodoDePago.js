import { Box, Image, Radio, RadioGroup, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import pagoGamer from "../../img/pagoGamer.png";

export const MetodoDePago = ({ datosEnvio, setDatosEnvio }) => {
  const { totalCarrito } = useContext(CartContext);

  function comoPagar(e) {
    setDatosEnvio({ ...datosEnvio, metodoDepago: e });
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
        <Image maxW="94px" src={pagoGamer} />
      </Box>
      <Box display="flex" flexDir="column" w="full" gap="10px" textAlign="left">
        <Text fontSize="18px">{`Total: $${totalCarrito()}`}</Text>
        <RadioGroup
          display="flex"
          flexDir="column"
          onChange={comoPagar}
          value={datosEnvio.metodoDepago}
        >
          <Radio name="metodoDePago" value="1">
            Deposito o transferencia bancaria
          </Radio>
          <Radio name="metodoDePago" value="2">
            Mercadopago - Tarjetas online, pagoFacil, rapiPago
          </Radio>
          <Radio name="metodoDePago" value="3">
            Pago Gamer - Tarjetas Visa o MasterCard
          </Radio>
        </RadioGroup>
      </Box>
    </Box>
  );
};

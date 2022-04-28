import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import gamerCoins from "../../img/gamerCoins.png";

export const GamerCoins = ({ datosEnvio, setDatosEnvio }) => {
  function aplicarGamerCoins() {
    setDatosEnvio({ ...datosEnvio, gamerCoins: !datosEnvio.gamerCoins });
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
        <Image maxW="94px" src={gamerCoins} />
      </Box>
      {!datosEnvio.gamerCoins ? (
        <Box
          w="full"
          display="flex"
          justifyContent="space-between"
          gap="20px"
          sx={{
            "@media screen and (max-width: 521px)": {
              flexDir: "column",
            },
          }}
        >
          <Box
            h="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text>Tiene un codigo de gamerCoins?</Text>
          </Box>
          <Box>
            <Button color="#fd611a" onClick={aplicarGamerCoins}>
              Aplicar
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          w="full"
          display="flex"
          justifyContent="space-between"
          gap="20px"
          sx={{
            "@media screen and (max-width: 521px)": {
              flexDir: "column",
            },
          }}
        >
          <Box h="full" display="flex" flexDir="column" alignItems="flex-start">
            <Text>A aplicado un total de 25 gamerCoins</Text>
            <Text fontSize="12px">Total del descuento: $1433</Text>
          </Box>
          <Button color="#fd611a" onClick={aplicarGamerCoins}>
            Cancelar
          </Button>
        </Box>
      )}
    </Box>
  );
};

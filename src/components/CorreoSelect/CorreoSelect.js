import React from "react";
import envioGamer from "../../img/envioGamer.png";
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsTruck } from "react-icons/bs";

export const CorreoSelect = ({ datosEnvio, setDatosEnvio }) => {
  function handlerEnviara(e) {
    setDatosEnvio({ ...datosEnvio, enviarA: e });
  }
  function handlerCp(e) {
    setDatosEnvio({ ...datosEnvio, cp: e.target.value });
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
        <Image maxW="94px" src={envioGamer}></Image>
      </Box>
      <Box display="flex" flexDir="column" gap="10px" w="full">
        <Box>
          <RadioGroup
            name="enviarA"
            onChange={handlerEnviara}
            value={datosEnvio.enviarA}
          >
            <Stack direction="row">
              <Radio colorScheme="orange" value="domicilio">
                Domicilio
              </Radio>
              <Radio colorScheme="orange" value="sucursal">
                Sucursal
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box textAlign="left">
          <InputGroup>
            <Input
              type="number"
              name="cp"
              value={datosEnvio.cp}
              placeholder="CP"
              onChange={handlerCp}
              isRequired
            />
            <InputRightElement children={<BsTruck color="5a5a5a" />} />
          </InputGroup>
          <Text fontSize="12px">Costo del envio:</Text>
        </Box>
        <Box>
          <Text fontSize="14px" cursor="pointer">
            - Agrega un punto de retiro desde aqui -
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

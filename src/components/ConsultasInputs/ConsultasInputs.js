import React from "react";
import { Input, Textarea, Button, Box, Select } from "@chakra-ui/react";

export const ConsultasInputs = ({ consulta, createMsj }) => {
  return (
    <>
      <Box
        sx={{
          "@media screen and (max-width: 566px)": {
            flexDir: "column",
            alignItems: "center",
          },
        }}
        mt="4"
        w="full"
        display="flex"
        gap="10px"
      >
        <Select
          w="full"
          variant="flushed"
          isRequired
          placeholder="Ingrese el tipo de consulta"
          name="tipoDeConsulta"
          value={consulta.tipoDeConsulta}
          onChange={createMsj}
          sx={{
            "@media screen and (max-width: 521px)": {
              w: "full",
            },
          }}
        >
          <option value="Consulta sobre un producto">
            Consulta sobre un producto
          </option>
          <option value="Consulta general">Consulta general</option>
          <option value="Consulta sobre mi pedido">
            Consulta sobre mi pedido
          </option>
        </Select>
        <Input
          name="mailDeUsuario"
          onChange={createMsj}
          value={consulta.mailDeUsuario}
          placeholder="email"
          variant="flushed"
          type="email"
        ></Input>
      </Box>
      <Textarea
        name="mensajeDelUsuario"
        value={consulta.mensajeDelUsuario}
        onChange={createMsj}
        placeholder="Escribi tu pregunta"
      ></Textarea>
      <Button
        type="submit"
        w="min-content"
        border="1px solid #ff7c40"
        color="#ff7c40"
        justifySelf="center"
        isTruncated="20"
      >
        Enviar
      </Button>
    </>
  );
};

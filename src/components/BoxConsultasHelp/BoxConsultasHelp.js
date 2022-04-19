import { React, useState } from "react";
import Swal from "sweetalert2";
import { Box, Text } from "@chakra-ui/react";
import { ConsultasInputs } from "../ConsultasInputs/ConsultasInputs";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

export const BoxConsultasHelp = () => {
  const [consulta, setConsulta] = useState({
    tipoDeConsulta: "",
    mailDeUsuario: "",
    mensajeDelUsuario: "",
  });
  const consultasRef = collection(db, "consultas");

  const handleSend = (e) => {
    e.preventDefault();
    if (
      consulta.tipoDeConsulta !== "" &&
      consulta.mailDeUsuario !== "" &&
      consulta.mensajeDelUsuario.length > 20
    ) {
      const data = Object.fromEntries(new FormData(e.target));
      addDoc(consultasRef, data)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Enviamos su consulta",
            text: "Le responderemos a la brevedad!",
          });
          setConsulta({
            tipoDeConsulta: "",
            mailDeUsuario: "",
            mensajeDelUsuario: "",
          });
        })
        .finally(() => {
          console.log("Mensaje enviado")
        })
      return;
    }
    Swal.fire({
      icon: "error",
      title: "Upss!",
      text: "Envie un mensaje mas largo",
    });
  };

  function handleSendConsulta(e) {
    setConsulta({ ...consulta, [e.target.name]: e.target.value });
  }

  return (
    <Box //Box de consultas
      display="flex"
      textAlign="center"
      flexDir="column"
      my={4}
      p={4}
      boxShadow="xl"
    >
      <Text alignSelf="left" color="#ff7c40" fontSize="18px" as="h3">
        Compra Gamer te ayuda. ¿Cuál es tu consulta?
      </Text>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        gap="4"
        as="form"
        id="consultasForm"
        w="full"
        onSubmit={handleSend}
      >
        <ConsultasInputs consulta={consulta} createMsj={handleSendConsulta} />
      </Box>
    </Box>
  );
};

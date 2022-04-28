import { Box, Button, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const styles = {
    tittle: {
      fontFamily: "Urbanist",
      fontWeight: 400,
      color: "#fff",
      fontSize: "16px",
    },
    text: {
      fontFamily: "Urbanist",
      fontWeight: 200,
      fontSize: "15px",
      color: "#fff",
      mt: "2",
    },
  };
  return (
    <Box display="flex" flexDir="column">
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        w="full"
        bg="#fd611a"
        mt="8"
        sx={{
          "@media screen and (max-width: 630px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
        }}
      >
        <Box
          p="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRight="1px solid #fff"
        >
          <Link to="/">
            <Image
              src={`https://firebasestorage.googleapis.com/v0/b/compragamer-702bc.appspot.com/o/legal%2FDATAWEB.jpg?alt=media&token=26a28916-2040-4c55-bb3a-f6c4751fec2f`}
              alt="Data fiscal de la página"
              w="65px"
            />
          </Link>
        </Box>
        <Box p="4" borderRight="1px solid #fff">
          <Box as="h3" sx={styles.tittle}>
            Ayuda
          </Box>
          <Text sx={styles.text}>Si tenes sugerencias o comentarios</Text>
          <Link to="/ayuda">
            <Button
              mt="2"
              w="min-content"
              bg="#fd611a"
              border="1px solid #fff"
              color="#fff"
              _hover={{ color: "#fd611a", bg: "#fff" }}
            >
              contactanos
            </Button>
          </Link>
        </Box>
        <Box p="4" borderRight="1px solid #fff">
          <Box as="h3" sx={styles.tittle}>
            Trabajá con nosotros
          </Box>
          <Link to="/">
            <Text
              sx={{
                textDecoration: "underline",
                fontFamily: "Urbanist",
                fontWeight: 200,
                fontSize: "15px",
                color: "#fff",
                mt: "2",
              }}
            >
              completá el formulario
            </Text>
          </Link>
        </Box>
        <Box p="4" display="flex" flexDir="column">
          <Text sx={styles.tittle}>Seguinos en</Text>
          <Box
            mt="4"
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-start"
            gap="2"
          >
            <Link to="/" target="_blank">
              <Box>
                <Icon h="5" w="5" fill="#fff" as={FaFacebookF}></Icon>
              </Box>
            </Link>
            <Link to="/" target="_blank">
              <Box>
                <Icon h="5" w="5" fill="#fff" as={FaYoutube}></Icon>
              </Box>
            </Link>
            <Link to="/" target="_blank">
              <Box>
                <Icon h="5" w="5" fill="#fff" as={FaTwitter}></Icon>
              </Box>
            </Link>
            <Link to="/" target="_blank">
              <Box>
                <Icon h="5" w="5" fill="#fff" as={FaInstagram}></Icon>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        w="full"
        textAlign="center"
        fontFamily="Urbanist"
        fontSize="12px"
        color="grey"
      >
        <Text>
          Las marcas y logos de compragamer.com compragamer.com/tv
          compragamer.com/reviews son propiedad de Newton Station SRL
        </Text>
        <Text>Todos los derechos reservados 2017</Text>
      </Box>
    </Box>
  );
};

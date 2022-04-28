import { Box, Icon, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import Swal from "sweetalert2";
import hyperx from "../../img/hyperx.png";
import nvidia from "../../img/GeForce.jpg";
import zotac from "../../img/zotacGaming.png";
import amd from "../../img/amd.png";
import rog from "../../img/rog.png";
import western from "../../img/westernD.png";
function ButtonsPageNavigator({ navs, view, setView }) {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    left: "-100%",
    top: "3.9rem",
    backgroundColor: "#fd611a",
    zIndex: 1,
    color: "#fff",
    px: 4,
  };
  const actualizarStyles = () => {
    if (!view) {
      return styles;
    }
    return { ...styles, left: 0 };
  };
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  function showSponsors() {
    Swal.fire({
      title: "Sponsors",
      showCloseButton: true,
      showConfirmButton: false,
      html: `<div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          height:250px  
        ">
          <img style="height: 100px" src="${hyperx}"/>
          <img style="height: 100px" src="${zotac}"/>
          <img style="height: 100px" src="${nvidia}"/>
          <img style="height: 100px" src="${amd}"/>
          <img style="height: 100px" src="${rog}"/>
          <img style="height: 100px" src="${western}"/>
        </div>`,
    });
  }
  return (
    <>
      <Box //hamburger
        w="max"
        display="none"
        onClick={() => {
          setView(!view);
        }}
        sx={{
          "@media screen and (max-width: 800px)": {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer",
          },
        }}
      >
        <Icon as={HamburgerIcon} w={6} h={6} color="#fff" />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        w="full"
        sx={{
          "@media screen and (max-width: 800px)": actualizarStyles,
        }}
      >
        {navs.map((linksNavegacion) => {
          //return navigation boxes
          return (
            <Box
              h="max"
              mx="3"
              key={linksNavegacion.id}
              transform="auto"
              transition=".1s all"
              color="#fff"
              _hover={{
                textShadow: "1px 1px 5px #5a5a5a",
                scale: "1.1",
              }}
              sx={{
                "@media screen and (max-width: 800px)": {
                  mb: 4,
                  mx: 0,
                },
              }}
            >
              <NavLink
                onClick={() => {
                  setView(!view);
                }}
                to={removeAccents(
                  `${linksNavegacion.cat}`.toLowerCase().split(" ").join("")
                )}
              >
                <Text fontFamily="Urbanist" fontWeight="500" fontSize="18px">
                  {linksNavegacion.cat}
                </Text>
              </NavLink>
            </Box>
          );
        })}
        <Box
          h="max"
          mx="3"
          color="#fff"
          cursor="pointer"
          transform="auto"
          transition=".1s all"
          position="relative"
          _hover={{
            textShadow: "1px 1px 5px #5a5a5a",
            scale: "1.1",
          }}
          onClick={showSponsors}
          sx={{
            "@media screen and (max-width: 800px)": {
              mb: 4,
              mx: 0,
            },
          }}
        >
          <Text fontFamily="Urbanist" fontWeight="500" fontSize="18px">
            Marcas sponsor
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default ButtonsPageNavigator;

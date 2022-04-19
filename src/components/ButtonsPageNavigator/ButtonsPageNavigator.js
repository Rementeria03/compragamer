import { Box, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
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
    } return { ...styles, left: 0 };
  };
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
              color="#fff"
              _hover={{
                color: "#5a5a5a",
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
                to={removeAccents(`${linksNavegacion.cat}`.toLowerCase().split(" ").join(""))}
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                {linksNavegacion.cat}
              </NavLink>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default ButtonsPageNavigator;

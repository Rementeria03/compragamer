import { Box, Icon, position } from "@chakra-ui/react";
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
    } else if (view) {
      return { ...styles, left: 0 };
    }
  };

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
        {navs.map((lks) => {
          //return navigation boxes
          return (
            <Box
              h="max"
              mx="3"
              key={lks.id}
              _hover={{
                color: "#fff",
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
                to={`${lks.cat}`.toLowerCase().split(" ").join("")}
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                {lks.cat}
              </NavLink>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default ButtonsPageNavigator;

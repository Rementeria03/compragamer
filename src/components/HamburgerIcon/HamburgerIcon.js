import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const HamburgerIcon = ({ view, setView }) => {
  const handleMostrar = () => {
    setView(!view);
    console.log(view);
  };

  return (
    <Box //hamburger
      w="max"
      display="none"
      onClick={handleMostrar}
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
  );
};

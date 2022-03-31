import { IconButton, Td } from "@chakra-ui/react";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export const ItemCount = ({ cantidad }) => {
  const styles = {
    w: "auto",
    h: 6,
    bg: "#fff",
    borderRadius: "full",
    cursor: "pointer",
    mx: 2,
    "@media  screen and (max-width: 521px)": {
      mx: 0,
    },
  };
  return (
    <Td display="flex">
      <IconButton
        as={IoIosRemoveCircleOutline}
        color="#aaa"
        _hover={{ bg: "#fff" }}
        sx={styles}
      />
      {cantidad}
      <IconButton
        as={IoIosAddCircleOutline}
        color="#aaa"
        w="6"
        h="6"
        _hover={{ bg: "#fff" }}
        sx={styles}
      />
    </Td>
  );
};

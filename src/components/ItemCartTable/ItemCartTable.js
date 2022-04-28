import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Tr, Td, Box, Icon } from "@chakra-ui/react";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../contexts/CartContext";

export const ItemCartTable = ({ nombre, cantidad, precio, id }) => {
  const { borrarDelCarrito } = useContext(CartContext);
  function eraseItem() {
    borrarDelCarrito(id);
  }
  const styles = {
    items: {
      fontFamily: "Urbanist",
      fontSize: "sm",
    },
    icon: {
      "@media screen and (max-width: 521px)": {
        mt: 1,
      },
    },
  };
  return (
    <Tr>
      <Td sx={styles.items}>{nombre}</Td>
      <ItemCount cantidad={cantidad} id={id} />
      <Td sx={styles.items}>
        <Box
          h="full"
          w="full"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            "@media screen and (max-width: 521px)": {
              flexDir: "column",
            },
          }}
        >
          ${cantidad * precio}
          <Icon
            sx={styles.icon}
            cursor="pointer"
            onClick={eraseItem}
            h={4}
            ml="2"
            color="red"
            as={FaTrashAlt}
          />
        </Box>
      </Td>
    </Tr>
  );
};

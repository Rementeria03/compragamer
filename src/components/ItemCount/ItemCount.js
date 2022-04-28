import { Box, Td } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const ItemCount = ({ cantidad, id }) => {
  const { cart, setCart } = useContext(CartContext);
  function handleAddAct() {
    setCart(
      cart.map((prodOfCart) => {
        if (prodOfCart.id === id) {
          return { ...prodOfCart, cantidad: prodOfCart.cantidad + 1 };
        } else {
          return prodOfCart;
        }
      })
    );
  }
  const handleSubtractAct = () => {
    setCart(
      cart.map((prodOfCart) => {
        if (prodOfCart.id === id && prodOfCart.cantidad > 1) {
          return { ...prodOfCart, cantidad: prodOfCart.cantidad - 1 };
        } else {
          return prodOfCart;
        }
      })
    );
  };
  return (
    <Td>
      <Box h="full" display="flex" alignItems="center">
        <Box
          as="button"
          borderRadius="full"
          border="2px solid #ff7c40"
          bg="#fff"
          onClick={handleSubtractAct}
          mr={1}
          p={0}
          h="25px"
          w="25px"
        >
          -
        </Box>
        {cantidad}
        <Box
          as="button"
          borderRadius="full"
          border="2px solid #ff7c40"
          bg="#fff"
          onClick={handleAddAct}
          ml={1}
          p={0}
          h="25px"
          w="25px"
        >
          +
        </Box>
      </Box>
    </Td>
  );
};

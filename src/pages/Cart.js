import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import CartTable from "../components/CartTable/CartTable";
import { CartContext } from "../contexts/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <Box
      w="full"
      h="full"
      px={8}
      py={4}
      height="full"
      display="flex"
      flexDir="column"
      alignItems="center"
      fontFamily="Urbanist"
      sx={{
        "@media screen and (max-width: 521px)": {
          px: 1,
        },
      }}
    >
      <Box my="8" fontSize="18px" fontWeight="500" w="full" as="h1" sx={{
        "@media screen and (max-width: 521px)":{
          ml: 3
        }
      }}>
        Carrito de compras
      </Box>
      {cart.length > 0 ? (
        <Box w="full" h="full">
          <CartTable></CartTable>
        </Box>
      ) : (
        <Text>Su carrito está vacio</Text>
      )}
    </Box>
  );
}

export default Cart;

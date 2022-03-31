import { Box } from "@chakra-ui/react";
import CartTable from "../components/CartTable/CartTable";

function Cart() {
  return (
    <Box
      w="full"
      px={6}
      py={4}
      height="full"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Box w="full" h="full">
        <CartTable></CartTable>
      </Box>
    </Box>
  );
}

export default Cart;

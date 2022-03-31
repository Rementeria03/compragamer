import { Box } from "@chakra-ui/react";
import CartTable from "../components/CartTable/CartTable";

function Cart() {
  return (
    <Box w="full" height="full">
      <Box w="max" h="max">
        <CartTable></CartTable>
      </Box>
    </Box>
  );
}

export default Cart;

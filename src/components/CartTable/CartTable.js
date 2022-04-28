import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  TableCaption,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ItemListCartTable } from "../ItemListCartTable/ItemListCartTable";

function CartTable() {
  const { totalCarrito } = useContext(CartContext);

  const styles = {
    head: {
      fontFamily: "Urbanist",
    },
  };

  return (
    <Box boxShadow="md" borderRadius="md" w="full">
      <Table>
        <TableCaption fontFamily="Urbanist" fontSize="16px">
          Total: ${totalCarrito()}
        </TableCaption>
        <Thead>
          <Tr>
            <Th sx={styles.head}>Productos</Th>
            <Th sx={styles.head}>Cantidad</Th>
            <Th sx={styles.head}>Subtotal</Th>
          </Tr>
        </Thead>
        <Tbody>
          <ItemListCartTable />
        </Tbody>
      </Table>
    </Box>
  );
}

export default CartTable;

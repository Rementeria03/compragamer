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
      "@media screen and (max-width: 521px)": {
        pl: 2,
      },
    },
  };

  return (
    <Box boxShadow="xl" borderRadius="0 0 50px 50px">
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

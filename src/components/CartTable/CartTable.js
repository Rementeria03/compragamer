import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  TableCaption,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

function CartTable() {
  const { cart, totalCarrito } = useContext(CartContext);

  const styles = {
    head: {
      fontFamily: "Urbanist",
      fontSize: "16px",
      "@media screen and (max-width: 521px)": {
        textAlign: "center",
        px: 2,
      },
    },
    items: {
      fontFamily: "Urbanist",
      fontSize: "sm",
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
          {cart.map(({ ...prod }) => {
            return (
              <Tr key={prod.id}>
                <Td sx={styles.items}>{prod.nombre}</Td>
                <ItemCount {...prod} />
                <Td sx={styles.items}>${prod.cantidad * prod.precio}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}

export default CartTable;

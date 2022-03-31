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
    hd: {
      fontFamily: "Urbanist",
      fontSize: "16px",
      pl: 2,
    },
    items: {
      fontFamily: "Urbanist",
      fontSize: "sm",
    },
  };

  return (
    <Box boxShadow="xl" borderRadius="0 0 50px 50px">
      <Table>
        <TableCaption sx={styles.hd}>Total: ${totalCarrito()}</TableCaption>
        <Thead>
          <Tr>
            <Th sx={styles.hd}>Productos</Th>
            <Th sx={styles.hd}>Cantidad</Th>
            <Th sx={styles.hd}>Subtotal</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map(({ ...prod }) => {
            return (
              <Tr key={prod.id}>
                <Td sx={styles.items}>{prod.nombre}</Td>
                <ItemCount cantidad={prod.cantidad} />
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

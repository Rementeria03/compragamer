import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Box
} from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function CartTable() {

    const {cart, totalCarrito} = useContext(CartContext);

    return (
        <Box fontFamily='Urbanist'>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Producto</Th>
                        <Th>Cantidad</Th>
                        <Th>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {cart.map(({...prod}) => {
                        return(
                            <Tr key={prod.id}>
                                <Td>{prod.nombre}</Td>
                                <Td>{prod.cantidad}</Td>
                            </Tr>
                        )
                    })}
                    <Tr>
                        <Td></Td>
                        <Td></Td>
                        <Td>${totalCarrito()}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    );
}

export default CartTable;
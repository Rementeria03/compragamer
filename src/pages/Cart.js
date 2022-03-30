import { Box } from "@chakra-ui/react";
import CartTable from "../components/CartTable/CartTable";

function Cart() {
    return (
        <Box
            w='full' 
            p='2 4'
        >
            <Box 
                w='max'
                h='30px'
            >
                <CartTable></CartTable>
            </Box>
        </Box>
    );
}

export default Cart;
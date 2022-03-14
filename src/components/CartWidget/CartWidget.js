import { Box } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
import { useContext } from "react";
import { IoMdCart } from 'react-icons/io'
import { CartContext } from "../../contexts/CartContext";

function CartWidget() {

    const {cantidadCarrito} = useContext(CartContext);

    return (
        <Box 
            display='flex'
            alignItems='center'
            justifyContent='center'
            position='relative'
            mr='20px'
            h='full'
            borderRadius='base'
            cursor='pointer'
            >
            <Icon as={IoMdCart} w={7} h={7} color='#aaa'/>
            <Box
                backgroundColor='#f44336'
                borderRadius='full'
                height='20px'
                width='20px'
                display='flex'
                alignItems='center'
                justifyContent='center'
                position='absolute'
                top='-10px'
                left='20px'
                color='#fff '
                fontWeight='700'
                fontSize='11px'
            >
            {cantidadCarrito()}
            </Box>
        </Box>
    );
}

export default CartWidget;
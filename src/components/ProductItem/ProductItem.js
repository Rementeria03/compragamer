import { Box, Button, Image } from "@chakra-ui/react";
import { doc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ProductItem({...prod}) {

    const {agregarAlCarrito} = useContext(CartContext);

    function handleAgregar(){
        agregarAlCarrito({
            id: prod.id,
            cantidad: 1,
            nombre: prod.nombre,
            precio: prod.precio,
            img: prod.img
        })
    }

    return (
        <Box
            maxW='lg'
            mt='3'
            p='3'
            gap='10px'
            display='flex' 
            flexWrap='wrap'
            boxShadow='xl'
            borderRadius='base'
            sx={{
                '@media (max-width: 520px)': {
                    flexDirection: 'column',
                    alignItems: 'center'
                }
            }}
            >
            <Image src={prod.img} />
            <Box 
                minW='320px' 
                display='flex' 
                justifyContent='space-around' 
                flexDirection='column'
                sx={{
                    '@media (max-width: 520px)': {
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }}
                >
                <Box
                    as='h3'
                    >
                    {prod.nombre}
                </Box>
                <Box 
                    as="h4"
                    >   
                    <Box as='span' color='gray.600' fontSize='sm'>
                        $
                    </Box>
                    {prod.precio}
                </Box>
                <Button
                    as='button'
                    w='min'
                    display='flex'
                    alignItems='center'
                    height='40px'
                    backgroundColor='#fd611a'
                    borderRadius='base'
                    color='#ffff'
                    fontWeight='light'
                    fontFamily='Urbanist'
                    boxShadow='1px 1px .3em grey'
                    onClick={handleAgregar}
                >
                    Agregar al carrito
                </Button>
            </Box>
        </Box>
    );
}

export default ProductItem;
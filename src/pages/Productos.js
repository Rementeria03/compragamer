import { Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import CategorysContainer from "../components/CategorysContainer/CatergorysContainer";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";

function Productos() {

    const [productos, setProductos] = useState([]);

    const [view] = useMediaQuery('(max-width: 1018px)');

    return (
        <Box 
            w='full'
            h='full'
            p='3 6'
            display='flex'
            justifyContent='center'
            gap='10px'
            flexWrap='wrap'
        >
            {!view
                ? <CategorysContainer></CategorysContainer>
                :<></>
            }
            <ProductsContainer productos={productos} setProductos={setProductos}></ProductsContainer>
        </Box>
    );
}

export default Productos;
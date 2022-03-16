import { Box } from "@chakra-ui/react";
import { useState } from "react";
import CategorysContainer from "../components/CategorysContainer/CatergorysContainer";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";

function Productos() {

    const [productos, setProductos] = useState([]);

    return (
        <Box 
            w='full'
            h='full'
            p='6'
            display='flex'
            justifyContent='center'
        >
            <CategorysContainer></CategorysContainer>
            <ProductsContainer productos={productos} setProductos={setProductos}></ProductsContainer>
        </Box>
    );
}

export default Productos;
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import { db } from "../../firebase/config";
import ProductsList from "../ProductsList/ProductsList";

function ProductsContainer({productos, setProductos}) {

    const {catId} = useParams();

    useEffect(() => {
        const productRef = collection(db, 'productos');
        const q = catId ? query( productRef, where('type' , '==', catId )) : productRef;

        getDocs(q)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProductos(items)
            })
            .finally(()=> {
                console.log(productos)
            })
    }, [catId])


    return (
        <Box
            fontFamily= 'Urbanist'
            display='flex'
            flexDir='column'
            gap='20px 0px' 
        >
            <ProductsList productos={productos}></ProductsList>
        </Box>
    );
}

export default ProductsContainer;
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Box} from '@chakra-ui/react'
import { db } from "../../firebase/config";

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
            p='3'
            boxShadow='1px 1px 1em #c8c8c8'
            borderRadius='base'
            fontFamily= 'Urbanist'  
        >
            
        </Box>
    );
}

export default ProductsContainer;
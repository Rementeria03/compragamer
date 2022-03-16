import { Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import ButtonsPageNavigator from "../ButtonsPageNavigator/ButtonsPageNavigator";

function PagesNavigator() {

    const [visual] = useMediaQuery('(max-width: 800px)');

    const navs = [
        {id: 0, cat:'Productos'},
        {id: 1, cat:'Armá tu pc'},
        {id: 2, cat:'Ayuda'},
        {id: 3, cat:'Marcas sponsor'}
    ]

    return (
        <Box 
            w='full'
            h='4rem'
            backgroundColor='#fd611a'
            py='1'
            px='4'
            display='flex'
            alignItems='center'
            justifyContent='center'
            position='relative'
        >
            <ButtonsPageNavigator visual={visual} navs={navs}/>
        </Box>
    );
}

export default PagesNavigator;
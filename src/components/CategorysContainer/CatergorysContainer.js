import { Box } from "@chakra-ui/react";
import AccordionCategory from "../AccordionCategory/AccordionCategory";

function CategorysContainer() {

    const categorys = [
        'Equipos y notebooks',
        'Consolas de video juego',
        'Procesadores y coolers cpus',
        'Mothers y combos',
        'Memorias ram',
        'Almacenamiento',
        'Placas de video y otras',
        'Gabinetes, fuentes y coolers',
        'Monitores y televisores',
        'Teclados y mouses',
        'Audio, parlantes, auriculares y mic',
        'Muebles',
        'Joysitcks y periféricos para simuladores',
        'Periféricos',
        'Conectividad',
        'Ropa, bolsos y mochilas',
        'Oficina',
        'Cables y cargadores'
    ];

    return (
        <Box
            p='3'
            boxShadow='1px 1px 1em #c8c8c8'
            borderRadius='base'
            fontFamily= 'Urbanist'
        >
            <AccordionCategory categorys={categorys}/>
        </Box>
    );
}

export default CategorysContainer;
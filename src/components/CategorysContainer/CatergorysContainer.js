import { Box } from "@chakra-ui/react";
import AccordionCategory from "../AccordionCategory/AccordionCategory";

function CategorysContainer({view}) {

    function seeThis(){
        if(view){
            return({
                display: 'flex',
                flexDir: 'column'
            })
        }
        return({
            display:'none'
        })
    }

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
            w='sm'
            p='3'
            fontFamily= 'Urbanist'
            sx={{
                '@media screen and (max-width: 940px)': seeThis
            }}
        >
            <AccordionCategory categorys={categorys}/>
        </Box>
    );
}

export default CategorysContainer;
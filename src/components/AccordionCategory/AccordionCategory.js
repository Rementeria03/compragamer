import { Accordion } from "@chakra-ui/react";
import SubAccordionCategory from "../SubAccordionCategory/SubAccordionCategory";

function AccordionCategory({categorys}) {

    return (
        <Accordion allowToggle>
            <SubAccordionCategory 
                category={categorys[0]} 
                subCategorys={[
                    'Notebooks']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[1]} 
                subCategorys={[
                    'Consolas']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[2]} 
                subCategorys={[
                    'Procesadores Amd',
                    'Procesadores Intel',
                    'Coolers',
                    'Soluciones termincas']}>
            </SubAccordionCategory>
            <SubAccordionCategory
                category={categorys[3]} 
                subCategorys={[
                    'Mothers Amd',
                    'Mothers Intel']}>
            </SubAccordionCategory>
            <SubAccordionCategory
                category={categorys[4]} 
                subCategorys={[
                    'Memorias',
                    'Memorias sodimm']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[5]} 
                subCategorys={[
                    'Discos rígidos externos',
                    'Pendrives',
                    'Discos rígidos internos',
                    'Discos sólidos SSD']}>
            </SubAccordionCategory> 
            <SubAccordionCategory 
                category={categorys[6]} 
                subCategorys={[
                    'Placas de video Gforce',
                    'Placas de video Radeon Amd']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[7]} 
                subCategorys={[
                    'Gabinetes',
                    'Fuentes de alimentación',
                    'Coolers fan',
                    'Mooding, cables, iluminación y otros']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[8]} 
                subCategorys={[
                    'Monitores y pantallas']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[9]} 
                subCategorys={[
                    'Mouses',
                    'Teclados',
                    'Mouse pads',
                    'Combos de teclado y mouse, otros']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[10]} 
                subCategorys={[
                    'Auricularess',
                    'Parlantes',
                    'Micrófonos',
                    'Accesorios para auriculares']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[11]} 
                subCategorys={[
                    'Sillas gamer']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[12]} 
                subCategorys={[
                    'Volantes',
                    'Simuladores de manejo']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[13]} 
                subCategorys={[
                    'Webcam',
                    'Tabletas digitalizadoras']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[14]} 
                subCategorys={[
                    'Placas de red inalambricas',
                    'Routers WiFi']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[15]} 
                subCategorys={[
                    'Remeras']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[16]} 
                subCategorys={[
                    'Estabilizadores']}>
            </SubAccordionCategory>
            <SubAccordionCategory 
                category={categorys[17]} 
                subCategorys={['Cables y adaptadores']}>
            </SubAccordionCategory>
        </Accordion>
    );
}

export default AccordionCategory;
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
function SubAccordionCategory({category, subCategorys}) {

    return(
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        {category}
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </h2>
            <AccordionPanel>
                {subCategorys.map((subCategory) => {
                    return(
                        <Box color='grey' fontSize='14' key={subCategory} flex='1' textAlign='left'>
                            <NavLink
                                to={`/productos/${category}/:${subCategory}`.toLowerCase()}
                            >
                                {`- ${subCategory}`}
                            </NavLink>
                        </Box>
                    )
                })}
            </AccordionPanel>
        </AccordionItem>
    )
}

export default SubAccordionCategory;

import { Box, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons';

function ButtonsPageNavigator({navs, visual}) {

    function hamburgerTime ( visual ){
        if(visual){
            return({
                display: 'block',
                position: 'absolute',
                left: '-100%',
                top: '4rem'
            })
        }
        return;
    }

    return (
        <>
        {visual
            ?   <Box w='full'
                display='flex'
                alignItems='center'
                justifyContent='flex-start'
                >
                <Icon as={HamburgerIcon} w={6} h={6} color="#fff"/>
            </Box>
            :   <Box display='flex'
                alignItems='center'
                justifyContent='space-around'
                w='full'
                sx={{
                    '@media (max-width: 792px)': hamburgerTime             
                }}
                >
                {navs.map((lks) => {
                    return(
                        <Box
                            h='max' 
                            mx='3' 
                            key={lks.id}
                            _hover={{
                                color: '#fff'
                            }}
                            >
                            <NavLink 
                                to={`${lks.cat}`.toLowerCase().split(" ").join("")}
                                style={{
                                    fontFamily:'Urbanist',
                                    fontWeight: '500',
                                    fontSize: '1em'
                                }}
                                >
                                    {lks.cat}
                            </NavLink>
                        </Box>
                    )
                })}
            </Box>
        }
    </>
    );
}

export default ButtonsPageNavigator;
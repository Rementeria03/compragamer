import { Icon } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';

function InitSesion() {
    return (
        <Box
            display='flex'
            alignItems='center'
            as='button'
            height='40px'
            width='auto'
            backgroundColor='#fd611a'
            p='0 20px'
            borderRadius='base'
            color='#ffff'
            fontWeight='medium'
            m='0 20px 0 0'
            fontFamily='Urbanist'
            boxShadow='1px 1px .3em grey'
        >
            <Icon as={CgProfile} w={6} h={6} color='#fff' mr='10px'/>
            Iniciar sesion
        </Box>
    );
};

export default InitSesion;
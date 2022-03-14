import {useState} from 'react';
import Logo from '../Logo/Logo';
import NavInp from '../NavInp/NavInp';
import InitSesion from '../InitSesion/InitSesion';
import CartWidget from '../CartWidget/CartWidget';
import { Box } from '@chakra-ui/react';

function NavBar() {

    const [searchKey, setSearchKey] = useState('');

    return (
        <Box display='flex' gap='0 20px' flexWrap='wrap' alignItems='center' justifyContent='center' p='10px 0' width='100%'>
            <Logo />
            <NavInp searchKey={searchKey} setSearchKey={setSearchKey}/>
            <Box 
                className='login'
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                    "@media (max-width: 792px)":{
                        mt: 4
                    }
                }}
                >
                <InitSesion></InitSesion>
                <CartWidget></CartWidget>
            </Box>
            </Box>
    );
};
export default NavBar;
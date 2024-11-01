import { Outlet } from "react-router-dom";
import Topnav from './Topnav';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

function Layout() {
    return (
        <>
        <Topnav />
        <Box pt="89px">
            <Outlet />
        </Box>
        <Footer />
        </>
        );
    }
    
export default Layout;
    
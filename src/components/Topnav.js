import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import MenuLinks from "./MenuLinks";

import { Box, Flex, Image, Spacer,Text } from '@chakra-ui/react';
import FRTDlogo from '../assets/FRTD_logo.png';
import IGlogo from '../assets/IG.png';

import { RiCloseFill } from "react-icons/ri";
import { RiMenuFill } from "react-icons/ri";

function Topnav() {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    useEffect(() => {
        setIsOpen(false);
      }, [location]);
    
    return (
    <>
      <Flex zIndex={"9"} w="full" direction={"row"} alignItems={"center"} bg="brand.darkBrown" position="fixed" top={"0"} p={"6"}>
        <Link to="/">
            <Image
                src={FRTDlogo}
            />
        </Link>
        <Spacer />
            <Link to={"/lore"}><Text display={{base:"none", xl:"inline-block"}} fontSize={"14px"} lineHeight={"14px"} fontWeight="extrabold" mr="6" textTransform={'uppercase'} letterSpacing="8px" color="brand.yellow">Lore</Text></Link>
            <Link to={"/buy"}><Text display={{base:"none", xl:"inline-block"}} fontSize={"14px"} lineHeight={"14px"} fontWeight="extrabold" mr="6" textTransform={'uppercase'} letterSpacing="8px" color="brand.yellow">Buy</Text></Link>  
       {/* <Text fontSize={"14px"} lineHeight={"14px"} fontWeight="extrabold" textTransform={'uppercase'}  letterSpacing="8px" color="brand.yellow"><Link to="/read">Read</Link></Text>*/}
        <Link to="https://www.instagram.com/fromrahmtodei/" >
            <Image
                src={IGlogo}
                ml="8" mr="4"
            />
        </Link>
        <Box cursor="pointer" onClick={toggle} fontSize="30px" color="brand.yellow">
            {isOpen ? <RiCloseFill /> : <RiMenuFill />}
        </Box>
      </Flex>
      <MenuLinks isOpen={isOpen} toggle={toggle} />

      </>
        );
    }
    
export default Topnav;
    
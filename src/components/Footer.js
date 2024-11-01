// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { Flex, Heading, Image, Link,} from '@chakra-ui/react';
import FRTDlogo from '../assets/FRTD_logo_dark.png';
// import IGlogo from '../assets/IG.png';


function Footer() {
    return (
    <Flex
        direction={"column"}
        background="brand.orange"
        p={"100px 10vw 150px 10vw"}>
        <Link to="/">
            <Image
                src={FRTDlogo}
            />
        </Link>
        <Heading
            color="brand.darkBrown"
            fontSize={{ base: '60px', xl: '60px' }}
            lineHeight={{ base: '50px', xl: '50px' }}
            mt={{ base: '20px', xl: '30px' }}
            fontWeight={"normal"}>FROM<br/>RAHM<br/>TO DEI</Heading>

      </Flex>
        );
    }
    
export default Footer;
    
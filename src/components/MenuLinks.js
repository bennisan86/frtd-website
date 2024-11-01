import { Box, Stack } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function MenuLinks({isOpen}) {
    console.log("isopen??",isOpen);
    return (
        <Box
        display={{ base: isOpen ? "block" : "none" }}
        borderBottom="1px solid white"
        pb="3rem"
        position="fixed"
        zIndex="12"
        mt="89px"
        w="full"
        background={"brand.darkBrown"}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "column", "column"]}
          pt={[6, 4, 0, 0]}
          fontSize={"20px"}
          fontWeight={"bold"}
        >
          <Link to="/">Home</Link>
          <Link to="/lore">Lore</Link>
          {/* <Link to="/sidequests">Sidequests</Link> */}
          <Link to="/buy">Buy</Link>
        </Stack>
      </Box>
        );
    }
    
export default MenuLinks;
    
import { HashLink as Linko } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading, Image, List, ListItem, OrderedList,Text,UnorderedList } from '@chakra-ui/react';
import cover1 from '../assets/FromRahmToDei_issue1_cover.png';
import cover2 from '../assets/FromRahmToDei_issue2_cover.png';


function Buy() {
    return (
      <Flex
        w="full"
        direction="column"
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        pb="50px">
        <Box
          w='full'
          pt="50px"
          pb="10px"
          px="10vw"
          // borderBottom={"1px dashed"}
          borderBottomColor={"brand.darkBrown"}>
          <Heading fontSize={"90px"} lineHeight={"80px"} mb={"20px"} color={"brand.darkBrown"}>BUY THE COMIC</Heading>
          <Text mt={"60px"} maxW={"601px"} color="brand.darkBrown">Choose how you want purchase your issue of 'From Rahm To Dei':</Text>
            <UnorderedList color="brand.darkBrown" fontWeight={"normal"} spacing="3" my="20px">
                <ListItem>Order <Linko to={"/buy#orderhere"}><Text as="span" fontWeight={"bold"} color="brand.orange" textDecoration={"underline"}>directly</Text></Linko> from Sunchild Comics (via Gumroad)</ListItem>
                <ListItem>Buy in one of the <Linko to={"/buy#comicbookstores"}><Text as="span" fontWeight={"bold"} color="brand.orange" textDecoration={"underline"}>comic books stores</Text></Linko></ListItem>
            </UnorderedList> 
        </Box>
        <Box id="orderhere" w={"full"} py={{base:"10px",lg:"50px"}} px="10vw" borderBottomColor={"brand.darkBrown"}>
        <Text textTransform={"uppercase"} fontWeight={"extrabold"} fontSize={"20px"} lineHeight={"30px"} mb="10px">Order here</Text>
        <Text maxW={"900px"} mb={"50px"}>'From Rahm To Dei' is published by Sunchild Comics. Find and order their products on Gumroad! </Text>
        
        <Flex
          direction={{base:'column', md:'row'}}
          alignItems={{base: 'center', md: "flex-start"}}
          justifyContent={{base: 'center', md: "flex-start"}}
          border={"1px solid"}
          borderColor={"brand.orange"}
          maxW={"1000px"}
          p={{base: "50px 0 50px 0", md: "4vw 0 3vw 4vw"}}>
          <Image
              src={cover1}
              w={"248px"}
              h={"378px"}
          />
          <Flex
           direction={"column"}
           alignItems={"flex-start"}
           justifyContent={"flex-start"}

           >
            <Box borderBottom={"1px dashed"} borderBottomColor={"brand.lightBrown"} p={{base: "8vw", md: "0 7vw 3vw 4vw"}}>
              {/* <Text fontWeight={"semibold"} color={"brand.orange"}>Latest issue:</Text> */}
              <Text fontWeight={"extrabold"} fontSize={{base:"18px", lg:"26px"}} lineHeight={{base:"18px", lg:"26px"}} color={"brand.orange"} textTransform={"uppercase"} mt="5px" mb={{base:"10px", lg:"20px"}}>#1 — A Hunter's song</Text>
              <Text maxW={"727px"} fontSize={{base:"14px", lg:"16px"}} lineHeight={{base:"16px", lg:"22px"}}>After a ferocious Gholek attack, the young hunter Sal seeks help for his injured parents in a nearby village. The story of his heroic actions impress the town folks, and also sparks the interested of traveling entertainers Jot and Dou. They see much more in Sal then a simple boy-hunter: they believe he is destined for the greatest of things...</Text>
            </Box>
            <Flex direction={"column"} p={{base: "8vw", md: "30px 7vw 3vw 4vw"}}>
              <a target="_blank" rel="noopener noreferrer" href={"https://sunchildcomics.gumroad.com/l/czfdhe"}><Button variant='outline' size='lg' mb="3">buy this issue digital</Button></a>
              <Button disabled="true" variant='outline' size='lg'>buy this issue print</Button>
            </Flex>
           </Flex>
        </Flex>


        <Flex
          direction={{base:'column', md:'row'}}
          alignItems={{base: 'center', md: "flex-start"}}
          justifyContent={{base: 'center', md: "flex-start"}}
          border={"1px solid"}
          borderColor={"brand.orange"}
          maxW={"1000px"}
          p={{base: "50px 0 50px 0", md: "4vw 0 3vw 4vw"}}
          mt="20px">
          <Image
              src={cover2}
              w={"248px"}
              h={"378px"}
          />
          <Flex
           direction={"column"}
           alignItems={"flex-start"}
           justifyContent={"flex-start"}

           >
            <Box borderBottom={"1px dashed"} borderBottomColor={"brand.lightBrown"} p={{base: "8vw", md: "0 7vw 3vw 4vw"}}>
              {/* <Text fontWeight={"semibold"} color={"brand.orange"}>Latest issue:</Text> */}
              <Text fontWeight={"extrabold"} fontSize={{base:"18px", lg:"26px"}} lineHeight={{base:"18px", lg:"26px"}} color={"brand.orange"} textTransform={"uppercase"} mt="5px" mb={{base:"10px", lg:"20px"}}>#2 — Through the leaves</Text>
              <Text maxW={"727px"} fontSize={{base:"14px", lg:"16px"}} lineHeight={{base:"16px", lg:"22px"}}>The violent invasion of the O’Shen has driven the Leegatten to take flight through the forest, through the trees. Will they survive this challenging journey to safety? And what about the O'Shen: do they have what it takes to brave the unforgiving jungle in pursuit of their target?</Text>
            </Box>
            <Flex direction={"column"} p={{base: "8vw", md: "30px 7vw 3vw 4vw"}}>
              <a target="_blank" rel="noopener noreferrer" href={"https://sunchildcomics.gumroad.com/l/czfdhe"}><Button variant='outline' size='lg' mb="3">buy this issue digital</Button></a>
              <Button disabled="true" variant='outline' size='lg'>buy this issue print</Button>
            </Flex>
           </Flex>
        </Flex>











        <Text mt="20px"><Text as="span" fontWeight={"bold"}>Prefer an even more direct approach?</Text><br /> Reach out via <Linko to={"https://www.instagram.com/fromrahmtodei/"}><Text as="span" fontWeight={"bold"} color="brand.orange" textDecoration={"underline"}>Instagram</Text></Linko> or send an email to <Linko to={"mailto:info@fromrahmtodei.com"}><Text as="span" fontWeight={"bold"} color="brand.orange" textDecoration={"underline"}>info@fromrahmtodei.com</Text></Linko> to order your issue.<br /><br />
        </Text>
        </Box>

        <Box id="comicbookstores" w={"full"} py={{base:"10px",lg:"50px"}} px="10vw" borderBottomColor={"brand.darkBrown"}>
            <Text textTransform={"uppercase"} fontWeight={"extrabold"} fontSize={"20px"} lineHeight={"30px"} mb="10px">Buy in store</Text>
            <Text>Following comic book stores sell 'From Rahm To Dei'. Contact them to check their stock!<br /><br />
                <Text as="span" fontWeight={"bold"}>Mekanik Strip</Text><br />
                Sint Jacobsmarkt 73<br />
                2000 Antwerpen<br />
                +32 (0)3 234 23 47<br />
                <Link to="mailto:info@mekanik-strip.be"><Text as="span" textDecoration={"underline"}>info@mekanik-strip.be</Text></Link><br />
                <Link to="http://www.mekanik-strip.be"><Text as="span" textDecoration={"underline"}>mekanik-strip.be</Text></Link><br />
                <br />
                <br />
                <Text as="span" fontWeight={"bold"}>World's End Comics</Text><br />
                Ketelvest 51B, Gent<br/>
                (+32) 09 222 05 76<br />
                <Link to="mailto:info@worldsendcomics.com"><Text as="span" textDecoration={"underline"}>info@worldsendcomics.com</Text></Link><br />
                <Link to="https://www.worldsendcomics.com/"><Text as="span" textDecoration={"underline"}>worldsendcomics.com</Text></Link><br />
                <br />
                <br />
                <Text as="span" fontWeight={"bold"}>De Stripkever</Text><br />
                Bruul 792800, Mechelen<br />
                +32 15 21 76 05<br />
                <Link to="mailto:stripkever@skynet.be"><Text as="span" textDecoration={"underline"}>stripkever@skynet.be</Text></Link><br />
                <Link to="http://www.stripkever.be"><Text as="span" textDecoration={"underline"}>stripkever.be</Text></Link><br />
                <br />
                <br />
                <Text as="span" fontWeight={"bold"}>Het Besloten Land</Text><br />
                Parijsstraat 16, Leuven<br />
                +32 (0)16 22 58 40<br />
                <Link to="mailto:info@hbl.be"><Text as="span" textDecoration={"underline"}>info@hbl.be</Text></Link><br />
                <Link to="https://www.hbl.be/"><Text as="span" textDecoration={"underline"}>hlb.be</Text></Link><br />              
              </Text>  
        </Box>
        {/* <Box id={"orderhere"} w={"full"} py={{base:"10px",lg:"50px"}} px="10vw" borderBottom={"1px dashed"} borderBottomColor={"brand.darkBrown"}>
            <Text textTransform={"uppercase"} fontWeight={"extrabold"} fontSize={"20px"} lineHeight={"30px"} mb="10px">Order here</Text>
            <Text>You can order issues of 'From Rahm To Dei' here.<br />You can choose to pick it up or have it shipped to you via local postal service (Europe only).<br /><br />
                <Text as="span" fontWeight={"bold"}>Mekanik Strip</Text><br />
                Sint Jacobsmarkt 73<br />
                2000 Antwerpen<br />
                +32 (0)3 234 23 47<br />
               <br />
                <Text as="span" fontWeight={"bold"}>Pick up?</Text><br />
                You can pick up your issue (after payment) at the following addres:<br />
                Weerstandersstraat 91/1,<br/>
                2180 Ekeren<br />
                Belgium<br />
                </Text>
        </Box> */}

      </Flex>
        );
    }
    
export default Buy;
    
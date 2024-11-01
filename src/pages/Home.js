import { Box, Button, Flex, Image, Text, Heading } from '@chakra-ui/react';
import bg from '../assets/bg_1.png';
import SalDouJot from '../assets/SalDouJot.png';
import cover from '../assets/FromRahmToDei_issue1_cover.png';
import loreintro2 from '../assets/lore_intro2.png';




function Home() {
    return (
      <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
        <Box width={"100%"} position={"relative"} min-height={"779px"} bgImage={bg}  bgSize={"auto"} bgRepeat={"no-repeat"}>
          <Flex flexWrap="wrap" direction="row" pt={{base:"10px", xl:"56px"}} alignItems={"flex-start"} justifyContent={"flex-end"}>
            <Flex pl="6vw" mr={{ base: '0px', md: '-140px' }} flex={"1"} direction={"column"} alignItems={"flex-start"} justifyContent={"flex-start"}>
              <Heading zIndex={"2"} fontSize={{ base: '90px', sm:'150px', xl: '190px' }} lineHeight={{ base: '80px', sm:'120px', xl: '160px' }} mb={{ base: '50px', xl: '60px' }} fontWeight={"normal"}>FROM<br/>RAHM<br/>TO DEI</Heading>
              <Text color={"brand.yellow"} fontWeight={"bold"} fontSize={{base:"16px", md:"20px"} }lineHeight={{base:"20px", md:"30px"}} mt={{ base: '0', sm: '0', md:'0', xl: '40px' }} mb={{ base: '30px', xl: '0' }}>There is no day on Leeg, nor night.<br/> There's only sunlight, from Rahm to Dei.</Text>
            </Flex>
            <Image
                  src={SalDouJot}
                  w={{ base: '90%', md: '600px', xl: "812px" }}
                  mb={"-60px"}
              />
          </Flex>
        </Box>
        
        <Flex
          direction={{base:'column', md:'row'}}
          alignItems={{base: 'center', md: "flex-start"}}
          justifyContent={{base: 'center', md: "flex-start"}}
          background={"#F3F2EC"}            
          mt={"60px"}
          mx={"12vw"}
          w="88vw"
          maxW={"1622px"}
          p={{base: "50px 0 50px 0", md: "7vw 0 7vw 7vw"}}>
          <Image
              src={cover}
              w={"248px"}
              h={"378px"}
          />
          <Flex
           direction={"column"}
           alignItems={"flex-start"}
           justifyContent={"flex-start"}

           >
            <Box borderBottom={"1px dashed"} borderBottomColor={"brand.lightBrown"} p={{base: "8vw", md: "0 7vw 3vw 4vw"}}>
              <Text fontWeight={"semibold"} color={"brand.orange"}>Latest issue:</Text>
              <Text fontWeight={"extrabold"} fontSize={{base:"24px", lg:"40px"}} lineHeight={{base:"24px", lg:"40px"}} color={"brand.orange"} textTransform={"uppercase"} mt="5px" mb={{base:"10px", lg:"30px"}}>#1 — A Hunter's song</Text>
              <Text maxW={"727px"}>After a ferocious Gholek attack, the young hunter Sal seeks help for his injured parents in a nearby village. The story of his heroic actions impress the town folks, and also sparks the interested of traveling entertainers Jot and Dou. They see much more in Sal then a simple boy-hunter: they believe he is destined for the greatest of things...</Text>
            </Box>
            <Button m={{base: "8vw", md: "30px 7vw 3vw 4vw"}} variant='outline' size='lg'>buy this issue</Button>
           </Flex>
        </Flex>
        <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"full"}
        p={{base:"50px",md:"150px 20vw 150px 16vw"}}
        >
          <Flex
          direction={{base:'column', lg:"row"}}
          alignItems={{base:'center', lg:'flex-start'}}
          justifyContent={"center"}
          >
              <Flex
              direction={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              >
              <Heading color={"brand.darkBrown"} fontSize={{base:"50px",lg:"60px"}} lineHeight={"50px"} fontWeight={"normal"}>In the binary solar system  rahm-dei,</Heading>
              <Text mt="30px" fontWeight={'extrabold'} fontSize={"18px"} lineHeight={"30px"} mb="35px">the planet Leeg is caught exactly between the gravitational pull of the two suns Rahm and Dei, making the planet spin around only on its own axis.</Text>
              <Text>There is no night or day on Leeg. There's only constant sunlight, alternately of Rahm and Dei. This creates the hardest of living environments for both man and animal. Some have come to call this planet the ‘God of Death’.</Text>
            </Flex>
            <Image
                src={loreintro2}
                w={{base:"80%", md:"408px"}}
                h={"auto"}
                ml={{base:"0", lg:"55px"}}
            />
          </Flex>
          <Button variant='outline' size='lg' mt={{base:"30px",lg:"50px"}}>Discover FRTD lore</Button>
        </Flex>
      </Flex>
        );
    }
    
export default Home;
    
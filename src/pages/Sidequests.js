import { Link } from "react-router-dom";
import { Box, Flex, Heading, Image, List, ListItem, OrderedList,Text,UnorderedList } from '@chakra-ui/react';

function Sidequests() {
    return (
      <Flex
        w="full"
        direction="column"
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        pb="50px">
        <Box
          w='full'
          bg={"brand.lightBrown"}
          pt="50px"
          pb="80px"
          px="10vw"
          mb="30px">
          <Heading fontSize={"90px"} lineHeight={"80px"} mb={"20px"} color={"brand.orange"}>Sidequests</Heading>
          <Text maxW={"601px"} fontWeight={"medium"} mt="60px">Let the experience continue! Explore the worlds of From Rahm To Dei, following your gut as your guide.<br /><br />Introducing <Text as="span" fontWeight={"bold"}>SIDEQUESTS</Text>: interactive adventures for those who feel adventurous, who want more. Undertake these choice-driven storylines, make the right calls, and find the sunshine at the end of the rainbow. Complete a Sidequest and receive visual proof of your endeavor! <br/><br/><br /><Text as="span" fontStyle={"italic"}>Pro tip: Are you stuck? Maybe reading up on your <Text as="span" color={"brand.orange"} textDecoration={"underline"} fontStyle={"italic"}><Link to={"/lore"}>FRTD Lore</Link></Text> can help!</Text></Text>
    
        </Box>
        <Box px="10vw" pt={{base:"40px",lg:"70px"}} pb={{base:"40px",lg:"90px"}}>
            <Text maxW={"870px"} color="brand.darkBrown" fontWeight={"bold"}>This is how it works:</Text>
                <UnorderedList color="brand.darkBrown" fontWeight={"medium"} spacing="3" my="20px">
                    <ListItem>Click on the Sidequest you would like to play</ListItem>
                    <ListItem>A new screen opens, and on this screen you'll see: a body of text, a set of buttons with reactions on them, and the question: <Text as="span" fontWeight={"bold"}>what do you do?</Text></ListItem>
                    <ListItem>You click the button reading the reaction that you want to take</ListItem>
                    <ListItem>According to the choice you made, you will be presented with a new screen, including again: text + reaction-buttons. Read, choose, repeat!</ListItem>
                    <ListItem>If you're on one of the right tracks by making good choices (yes, there are several) you will end up at the finish, concluding this storyline.</ListItem>
                    <ListItem>If you make wrong choices, you will end up dead (or, the character you'll leading, at least). Please try again!</ListItem>
                </UnorderedList>
            <Text fontWeight={"medium"}>Ready? Set? Let's go!</Text>
        </Box>
        <Box w={"full"} py={{base:"40px",lg:"70px"}} px={{base:"10px",lg:"90px"}} borderBottom={"1px dashed"} borderBottomColor={"brand.darkBrown"}>
            <Flex
                bg={"brand.darkBrown"}
                w={"full"}
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                pt={{base:"100px",lg:"180px"}}
                pb={{base:"80px",lg:"150px"}}
                px={{base:"15vw",lg:"25vw"}}>
                <Text color={"brand.yellow"} fontWeight={"bold"}>Sidequest 1</Text>
                <Heading textAlign={"center"} fontSize={{base:"60px",lg:"90px"}}  lineHeight={{base:"55px",lg:"80px"}}  mb="70px">Calls in the wild</Heading>
                <svg width="72" height="84" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M72 42L-3.91519e-06 83.5692L-2.81098e-07 0.430779L72 42Z" fill="#FFF4B6"/>
                </svg>
                <Box mt="45px" py="15px" px="25px" border={"1px solid"} borderColor={"brand.orange"}>
                    <Text textAlign={"center"} fontWeight={"extrabold"} fontSize={{base:"16px",lg:"20px"}} color={"brand.yellow"}><Text fontSize={{base:"16px",lg:"20px"}} color={"brand.orange"} as="span">RELEASE DATE:</Text> tbd</Text>
                </Box>
            </Flex>
        </Box>
        <Box w={"full"} py={{base:"40px",lg:"70px"}} px={{base:"10px",lg:"90px"}} borderBottom={"1px dashed"} borderBottomColor={"brand.darkBrown"}>
            <Flex
                bg={"brand.darkBrown"}
                w={"full"}
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                pt={{base:"100px",lg:"180px"}}
                pb={{base:"80px",lg:"150px"}}
                px={{base:"15vw",lg:"25vw"}}>
                <Text color={"brand.yellow"} fontWeight={"bold"}>Sidequest 2</Text>
                <Heading textAlign={"center"} fontSize={{base:"60px",lg:"90px"}}  lineHeight={{base:"55px",lg:"80px"}}  mb="70px">fruit of Dei</Heading>
                <svg width="72" height="84" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M72 42L-3.91519e-06 83.5692L-2.81098e-07 0.430779L72 42Z" fill="#FFF4B6"/>
                </svg>
                <Box mt="45px" py="15px" px="25px" border={"1px solid"} borderColor={"brand.orange"}>
                    <Text textAlign={"center"} fontWeight={"extrabold"} fontSize={{base:"16px",lg:"20px"}} color={"brand.yellow"}><Text fontSize={{base:"16px",lg:"20px"}} color={"brand.orange"} as="span">RELEASE DATE:</Text> tbd</Text>
                </Box>
            </Flex>
        </Box>
      </Flex>
        );
    }
    
export default Sidequests;
    
import { Box, Flex, Heading, ListItem,Text,UnorderedList } from '@chakra-ui/react';

function Survey() {
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
          <Heading fontSize={"90px"} lineHeight={"80px"} mb={"20px"} color={"brand.darkBrown"}>TAKE THE SURVEY</Heading>
          <Text mt={"60px"} maxW={"601px"} color="brand.darkBrown">We want to hear from you! Fill out one of the surveys below, and get a free (one per person) digital issue! </Text>
            <UnorderedList color="brand.darkBrown" fontWeight={"normal"} spacing="3" my="20px">
                <ListItem><a target="_blank" rel="noopener noreferrer" href={"https://forms.gle/HqsPPFH2ZjncEKoo6"}><Text as="span" fontWeight={"bold"} color="brand.orange" textDecoration={"underline"}>Survey 1</Text></a>: feedback after reading issue 1!</ListItem>
                <ListItem><a target="_blank" rel="noopener noreferrer" href={"https://forms.gle/BHAvKVto8bZ4czT48"}><Text as="span" fontWeight={"bold"} color="brand.orange" textDecoration={"underline"}>Survey 2</Text></a>: feedback after reading issue 2!</ListItem>               
            </UnorderedList> 
        </Box>
        

      </Flex>
        );
    }
    
export default Survey;
    
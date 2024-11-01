import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading, Image, List, ListItem, OrderedList,Text,UnorderedList } from '@chakra-ui/react';

function Sidequest() {

  const [allScenes] = useState(
    [{
      "par" : "Dit is den 0.",
      "reactions" : [
        {
        "leadsto":1,
        "btntext": "go to den 1"
        },
        {
          "leadsto":2,
          "btntext": "go to den 2"
          },
      ]
    },{
      "par" : "Dit is den 1.",
      "reactions" : [
        {
        "leadsto":0,
        "btntext": "go to den 0"
        },
        {
          "leadsto":2,
          "btntext": "go to den 2"
          },
      ]
    },{
      "par" : "Dit is den 2.",
      "reactions" : [
        {
        "leadsto":0,
        "btntext": "go to den 0"
        },
        {
          "leadsto":1,
          "btntext": "go to den 1"
          },
      ]
    }]
  );


  const [current, setCurrent] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [transition, setTransition] = useState("all 1.5s ease-in-out");

  // const [currentPar, setCurrentPar] = useState(1);

  
  const handleButtonClick = (e) => {
    console.log(e);
    setOpacity(0);
    setTimeout(() => {
      setTransition("all 0.25s ease-in-out");
      setCurrent(e);
      setOpacity(1);
    }, 1500);
    setTransition("all 1.5s ease-in-out");

  };

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
          <Flex
            w='full'
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            opacity={opacity}
            transition={transition}>
            <Text maxW={"601px"} fontWeight={"medium"} mt="60px">{allScenes[current].par}</Text>
            {allScenes[current].reactions.map((item)=><Button onClick={()=>handleButtonClick(item.leadsto)}>{item.btntext}</Button>)}
          </Flex>
        </Box>
      </Flex>
        );
    }
    
export default Sidequest;
    
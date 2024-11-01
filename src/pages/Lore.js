import { HashLink as Linko } from 'react-router-hash-link';
import { Box, Flex, Heading, Image, ListItem, OrderedList,Text,UnorderedList } from '@chakra-ui/react';
import illu1a from '../assets/illu_1a.png';
import illu_1b__1 from '../assets/illu_1b__1.png';
import illu_1b__2 from '../assets/illu_1b__2.png';
import illu_1c from '../assets/illu_1c.png';
import illu_1d from '../assets/illu_1d.png';
import illu_2a__1 from '../assets/illu_2a__1.png';
import illu_2a__2 from '../assets/illu_2a__2.png';

const Lorebox = (props) => {
  return (
    <Box
      id={props.indexnmbr}
      w="full"
      px={"5vw"}
      py="70px"
      borderBottom={"1px dashed"}
      borderBottomColor={"brand.orange"}>
      <Loretextbox>
        <Loretitle indexnmbr={props.indexnmbr} title={props.title}/>
      </Loretextbox>
      {props.children}
    </Box>
  );
};

const Loretitle = ({ indexnmbr, title }) => {
  return (
    <>
      <Text fontSize={{base:"20px", lg:"30px"}} fontWeight={"bold"} color={"brand.orange"} mb="-5px">{indexnmbr}</Text>
      <Heading color={"brand.orange"} fontSize={{base:"50px",lg:"76px"}} lineHeight={{base:"50px",lg:"56px"}} mb="25px">{title}</Heading>
    </>
  );
};
const Loretextbox = (props) => {
  return (
    <Box w="full" px={"5vw"}>
      {props.children}
    </Box>
  );
};

const StyledLink = (props) => {
  return (
    <Linko to={props.linkto}><Text as="span" color={"brand.orange"} fontWeight={'bold'} textDecoration="underline">{props.children}</Text></Linko>
  );
};

function Lore() {
    return (
      <Flex
        w="full"
        direction="column"
        alignItems={"flex-start"}
        justifyContent={"flex-start"}>
        <Box
          w='full'
          bg="#1F120D"
          pt="50px"
          pb="80px"
          px="10vw"
          mb="30px">
          <Heading fontSize={"90px"} lineHeight={"80px"} mb={"20px"}>FRTD<br/>Lore</Heading>
          <Text color="brand.yellow" fontWeight={"semibold"} mt="60px">Enjoy the facts about the universe we known as 'From Rahm To Dei'.<br/>Read through at your own pace, or jump to a specific topic:</Text>
          <OrderedList color="brand.yellow" fontWeight={"semibold"}  mt="20px">
            <ListItem textDecoration={"underline"} mt="15px"><Linko to="/lore#1.a">Environment</Linko></ListItem>
            <ListItem textDecoration={"underline"} mt="15px"><Linko to="/lore#2.a">Peoples & culture</Linko></ListItem>
            {/* <ListItem textDecoration={"underline"} mt="15px"><Linko to="/lore#3a">Characters</Linko></ListItem> */}
          </OrderedList>
        </Box>
        <Lorebox indexnmbr="1.a" title={"RAHM-DEI SYSTEM"}>
          <Image
              src={illu1a}
              w={"100%"}
              mt="80px"
              mb={{base:"40px", lg:"60px"}}
          />
          <Loretextbox>
          <Text
            w="full"
            maxW={"870px"}>The Rahm-Dei system is a binary solar system, which means that it is focused around two suns, <StyledLink linkto="/lore#1.c">Rahm</StyledLink> and <StyledLink linkto="/lore#1.d">Dei</StyledLink>, identical in size and gravitational pull. <br /><br />The planet <StyledLink linkto="/lore#1.b">Leeg</StyledLink> is exactly the same distance from Rahm and Dei, caught in the middle between the gravitational pull of each sun. The central part of Leeg is constantly covered in light, alternating between Rahm's and Dei's. The south and the north poles however are never reached by the radiance of neither Rahm nor Dei, and are therefore frozen solid.<br /><br />Other planets in the system are <StyledLink linkto="/lore#1.f">Ren Li</StyledLink>, orbiting Dei, and <StyledLink linkto="/lore#1.e">O'Li</StyledLink>, orbiting Rahm.</Text>
          </Loretextbox>
        </Lorebox>
        <Lorebox indexnmbr="1.b" title={"LEEG"}>
        <Loretextbox>
          <Flex w={"full"} direction={{base:"column", lg: "row"}} alignItems={"center"}>
            <Image
                src={illu_1b__1}
                w={"202px"}
                mt="50px"
                mb={{base:"40px", lg:"60px"}}
                mr="40px"
            />
            <Text fontStyle={"italic"} flex={"1"} maxW={"347px"}>Refered to by the Leeg-Attens as 'God of Death', Leeg's living environment can be unforgiving.</Text>
          </Flex>
          <Text
            w="full"
            maxW={"870px"}>
            The planet Leeg is the biggest planet in the Rahm-Dei system. Being caught exactly in the middle between the gravitational pull of both <StyledLink linkto="/lore#1.c">Rahm</StyledLink> and <StyledLink linkto="/lore#1.d">Dei</StyledLink>, the planet does not orbit any of the suns, but remains in the same place and only spins around its own axis. <br /><br />In this unique astrophysical condition, the middle part of Leeg is in constant sunlight, alternating between Rahm's and Dei's, while the north and south pole are never reached by any radiance of either sun.
            <br /><br />The planet has therefore developed different <Text as="span" fontWeight={"bold"}>climate-regions</Text>:
            </Text>
            <Flex w={"full"} direction={{base:"column", lg: "row"}} alignItems={"center"}>
              <Image
                  src={illu_1b__2}
                  w={"full"}
                  maxW={"466px"}
                  mt="50px"
                  mb={{base:"40px", lg:"60px"}}
                  mr="40px"
              />
              <UnorderedList flex={"1"} spacing={3}>
                <ListItem color={"brand.darkBrown"}><Text as="span" fontWeight={"bold"}>North pole:</Text>“top” of the planet, never reached by sunlight and therefore constantly frozen. Uninhabitable.</ListItem>
                <ListItem color={"brand.darkBrown"}><Text as="span" fontWeight={"bold"}>Leeg's Crown:</Text> area between the (frozen) north pole and the desert. This area has a wide range of vegetation and living conditions, depending on the proximity to either north pole or desert:
                  <UnorderedList>
                    <ListItem>Closest to pole: low temperature, the vegetation is nordic and there are big rivers and bodies of water.</ListItem>
                    <ListItem>The further you move towards the desert (middle of the planet), the more the temperature rises. Vegetation becomes tropical. Big rivers break down in more smaller branches. </ListItem>
                    <ListItem>Closest to the desert, the vegetation starts to fade due to a lack of water. These living conditions are the least suitable for life.</ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem color={"brand.darkBrown"}><Text as="span" fontWeight={"bold"}>Desert:</Text>“top” of the planet, never reached by sunlight and therefore constantly frozen. Uninhabitable.</ListItem>
                <ListItem color={"brand.darkBrown"}><Text as="span" fontWeight={"bold"}>Leeg's Beard:</Text>“top” of the planet, never reached by sunlight and therefore constantly frozen. Uninhabitable.</ListItem>
                <ListItem color={"brand.darkBrown"}><Text as="span" fontWeight={"bold"}>South pole:</Text>“top” of the planet, never reached by sunlight and therefore constantly frozen. Uninhabitable.</ListItem>

              </UnorderedList>
            </Flex>
            <Text
            w="full"
            maxW={"870px"}>
              The middle of Leeg's Crown is best suitable for life with pleasant conditions for both man and animal. That's why the most settlements of the <StyledLink linkto="/lore#2.a">Leeg-Attens</StyledLink> are found here (further south from their original place of arrival).
            </Text>
          </Loretextbox>
        </Lorebox>
        <Flex
          direction={{base:"column",lg:"row"}}
          w="full"
          pl={"5vw"}
          borderBottom={"1px dashed"}
          borderBottomColor={"brand.orange"}>
          <Box
            w={{base:"full",lg:"50%"}}
            id={"1.c"}
            px={"5vw"}
            pt={"60px"}
            pb={"70px"}
            borderBottom={{base:"1px dashed #EC2E07", lg:"none"}}
            borderRight={{base:"none", lg:"1px dashed #EC2E07"}}>
                <Loretitle indexnmbr={"1.c"} title={"Rahm"}/>
                <Flex w={"full"} direction={{base:"column", lg: "row"}} alignItems={"center"}>
                  <Image
                      src={illu_1c}
                      w={"202px"}
                      mt="50px"
                      mb={{base:"40px", lg:"60px"}}
                      mr="40px"
                  />
                  <Text fontStyle={"italic"} flex={"1"} maxW={"256px"}>Both suns in the Rahm-Dei system are the exact same size, thus play an equal role in the eco-system.</Text>
                </Flex>
                <Text w={"full"}>Rahm is one of the two suns in the Rahm-Dei binary solar system. It is the exact same size as its counterpart Dei. It is orbited by the planet <StyledLink linkto="/lore#1.e">O'Li</StyledLink>. It's light is perceived as white-yellow.<br /><br />In the <StyledLink linkto="/lore#2.a">Leeg-Attens</StyledLink> beliefs, Rahm is the most active of the two, intense and bright, perceived as female. During Rahm's presence, activities conducted are focused mainly on productivity, e.g. working the land, weaving, hunting, painting of textiles, ...</Text>
            </Box>
            <Box
            w={{base:"full",lg:"50%"}}
            id={"1.d"}
            px={"5vw"}
            pt={"60px"}
            pb={"70px"}>
              <Loretitle indexnmbr={"1.d"} title={"Dei"}/>
                <Flex w={"full"} direction={{base:"column", lg: "row"}} alignItems={"center"}>
                  <Image
                      src={illu_1d}
                      w={"202px"}
                      mt="50px"
                      mb={{base:"40px", lg:"60px"}}
                      mr="40px"
                  />
                  <Text fontStyle={"italic"} flex={"1"} maxW={"260px"}>In a binary solar system, one could ask: which sun is first, which is second? Which is up, which is down?</Text>
                </Flex>
                <Text w={"full"}>Dei is another sun in the Rahm-Dei binary solar system. It is the exact same size as its counterpart Rahm. It is orbited by the planet <StyledLink linkto="/lore#1.f">Ren Li</StyledLink>. It's light is perceived as a light orange-red.<br /><br />In the Leeg-Attens beliefs, Dei is the more gentle of the two suns, often portrayed as male, with a warm, forgiving and calm personality. Activities during Dei's presence are focused on relaxation and social interactions.</Text>
            </Box>
        </Flex>
        <Lorebox indexnmbr="1.e" title={"O'LI"}>
              <Loretextbox>
                <Text
                  mt="60px"
                  w="full"
                  maxW={"870px"}>O'li is the smallest planet in the Rahm-Dei system. It orbits Rahm and it is known as the homebase of the O'shen, having moved there after events of the Ren-lesson.</Text></Loretextbox>
            </Lorebox>
            <Lorebox indexnmbr="1.f" title={"REN LI"}>
              <Loretextbox>
                <Text
                  w="full"
                  mt="60px"
                  maxW={"870px"}>As the second smallest planet in the Rahm-Dei system, Ren-Li orbits Dei. It is the planet where the events of the Ren-lesson took place. Before these events, and the migrations that followed because of it, Ren Li was the only known planet to support life.</Text></Loretextbox>
            </Lorebox>
            <Lorebox indexnmbr="2.a" title={"LEEG-ATTENS"}>
              <Loretextbox>
                <Text
                  w="full"
                  mt="60px"
                  maxW={"870px"}>“Leeg-Atten” translates from the old language to “Servants of Leeg”, although not all Leeg-Atten hold true to the traditions of their people.<br /><br />
                  <Text as="span" fontWeight={"bold"}>Appearance</Text><br />
                  The Leeg-Attens live on Leeg. The constant sunlight on Leeg has lead to the mutations, adapting them to the conditions on this harsh planet:
                  <UnorderedList>
                    <ListItem>their eyes have turned a deep dark red-brownish colour, with a bright yellow iris</ListItem>
                    <ListItem>their skin has turned red-orange in different variations</ListItem>
                  </UnorderedList>
                  </Text>
                  <Image
                      src={illu_2a__1}
                      w={"full"}
                  />
                  <Text
                  w="full"
                  maxW={"870px"}><Text as="span" fontWeight={"bold"}>Way of living & beliefs</Text><br />
                  The Leeg-Attens live a life without technology, which they renounce, and survive in small settlements along Leeg's Crown, or as hunter-gatherers in the jungles.<br /><br />By choosing this simple life, they now live in harmony with Rahm and Dei. They believe the original people on Ren Li were punished for their greediness: the use of technology was taken to far, and by doing so, by moving in the realm of gods, they provoked Dei, who punished them severely with the events we know as the Ren-lesson.<br /><br />That's why the Leeg-Attens see technology as something evil. Even comfort is dangerous concept for them, because this leads to man thinking he can walk among gods, bending faith to his will. Instead, the battle for survival is man's rightful place in the universe, and Leeg, with its dire conditions, is the ideal place to do so.<br /><br />Their core beliefs and way of living are encapsuled in stories and lessons, passed over generations via oral tradition, practiced by the tutors.</Text>
                  </Loretextbox>
                  <Image
                      src={illu_2a__2}
                      w={"full"}
                  />
                  <Loretextbox>
                    <Text
                    w="full"
                    maxW={"870px"}><Text as="span" fontWeight={"bold"}>Clothing & Art</Text><br />
                    The Leeg-Attens have the habit of decorating their clothing, tools, buildings,... with geometric patterns in bright colours. The colour orange is seen as the sacred colour. It is therefore often used, not only when painting, but also for colouring large parts of their hair.<br /><br />The hunter-gatherers recognized by more functional garments, where not geometric patterns are painted on, but the patterns of animal skin.</Text>
                  </Loretextbox>

            </Lorebox>
      </Flex>
        );
    }
    
export default Lore;
    
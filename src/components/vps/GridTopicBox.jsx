import { Box, SimpleGrid,Card, CardBody, CardFooter, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import { useMedia } from '../../MediaQuery/UseMedia'
import { Link, useNavigate } from 'react-router-dom'


const GridTopicBox = ({data,column,padding}) => {
  const {smallScreen} = useMedia()
  const navigate = useNavigate()
  const handleCLick = (link) => navigate(link)

  return (
    <Box w="100%" p={!smallScreen?"20px 1px":(padding?`30px ${padding}`:"30px 30px")}>
        <SimpleGrid columns={[1,2,2,column?column:3,column?column:4]} w={"100%"} justifyItems="center" justifyContent={"space-around"}  spacing={"15px"}   >
            {data && data.map((el,i)=>(
                <Card _hover={{boxShadow:`rgba(0, 0, 0, 0.56) 0px 22px 70px 4px`}} onClick={()=>handleCLick(Link||"#")} textAlign={"center"} minW={'100%'} minH={"100%"} border={"0.5px solid #44d62c"} >
                <CardBody>
                    <Box p="0px 35%">
                      <Image w={"100%"} src={el.img} />
                    </Box>
                </CardBody>
                <CardFooter m="auto">
                    <Text /* m="auto" */ textAlign={"center"} _hover={{color:"#9130c2"}} letterSpacing="1px" color="black"  >{el.des} </Text>      
                </CardFooter>        
            </Card>
            ))}
        </SimpleGrid>
    </Box>
  )
}

export default GridTopicBox
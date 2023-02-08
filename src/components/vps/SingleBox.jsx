import { Box, Card, CardBody, CardFooter, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

const SingleBox = ({des,link,img}) => {
  const navigate = useNavigate()
  const handleCLick = (link) => navigate(link)
  return (
    <Card _hover={{boxShadow:`rgba(0, 0, 0, 0.56) 0px 22px 70px 4px`}} onClick={()=>handleCLick(link||"#")} textAlign={"center"} minW={'100%'} minH={"100%"} border={"0.5px solid #44d62c"} >
        <CardBody>
            <Box p="0px 35%">
              <Image w={"100%"} src={img} />
            </Box>
        </CardBody>
        <CardFooter m="auto">
            <Text /* m="auto" */ textAlign={"center"} _hover={{color:"#9130c2"}} letterSpacing="1px" color="black"  >{des} </Text>      
        </CardFooter>        
    </Card>
  )
}

export default SingleBox
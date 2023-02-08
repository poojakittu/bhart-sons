import { Box, SimpleGrid } from '@chakra-ui/react'
import { useMedia } from '../../MediaQuery/UseMedia'
import SingleBox from './SingleBox'

const GridTopicBox = ({data,column,padding}) => {
  const {smallScreen} = useMedia()
  return (
    <Box w="100%" p={!smallScreen?"20px 1px":(padding?`30px ${padding}`:"30px 30px")}>
        <SimpleGrid columns={[1,2,2,column?column:3,column?column:4]} w={"100%"} justifyItems="center" justifyContent={"space-around"}  spacing={"15px"}   >
            {data && data.map((el,i)=>(
                <SingleBox key={i} {...el} />
            ))}
        </SimpleGrid>
    </Box>
  )
}

export default GridTopicBox
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useMedia } from "../../MediaQuery/UseMedia";
import SingleBox1 from "./SingleBox1";

const GridTopicBox1 = ({ data, column, padding }) => {
  const { smallScreen } = useMedia();
  return (
    <Box
      w="100%"
      p={!smallScreen ? "20px 1px" : padding ? `10px ${padding}` : "10px 10px"}
    >
      <SimpleGrid
        columns={[1, 2, 2, column ? column : 3, column ? column : 4]}
        w={"100%"}
        justifyItems="center"
        justifyContent={"space-around"}
        spacing={"15px"}
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        {data && data.map((el, i) => <SingleBox1 key={i} {...el} />)}
      </SimpleGrid>
    </Box>
  );
};

export default GridTopicBox1;

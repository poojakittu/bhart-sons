import { Box, Heading, Img } from "@chakra-ui/react";

const CCard = ({ name, img }) => {
  return (
    <Box
      boxShadow="0px 1px 2px rgba(60, 64, 67, 0.3), 0px 2px 6px 2px rgba(60, 64, 67, 0.15)"
      borderRadius="0px 20px"
      w="80%"
      h="250px"
      padding="16px"
      m="20px auto"
      border="5px solid #e8c615" // Add black border
      bg={"#37517e"}
    >
      <Box
        boxShadow="0px 1px 2px rgba(60, 64, 67, 0.3), 0px 2px 6px 2px rgba(60, 64, 67, 0.15)"
        borderRadius="0px 20px"
        h="210px"
        padding="12px"
        border="5px solid #e8c615"
        display={"grid"}
        textAlign={"center"}
        alignItems={"center"}
        bg={"white"}

        // Add padding
      >
        <Heading size="md" margin="auto">
          {name}
        </Heading>
        <Box margin="auto">
          <Img src={img} alt="name" maxW="200px" maxH="200px" padding="10px" />
        </Box>
      </Box>
    </Box>
  );
};

export default CCard;

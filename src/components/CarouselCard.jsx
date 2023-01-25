import {
  Box,  
  Heading,
  Img,
} from "@chakra-ui/react";

const CCard = ({name,img}) => {
  return (
    <Box
      boxShadow={
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }
      borderRadius="7px"
      w="90%"
      h="456px"
      padding="16px"
      m="20px auto"
    >
      <Box justifyContent="flex-start" alignItems="center" gap="20px" margin="auto">
        <Heading size={"lg"} margin="auto">
          {name}
        </Heading>
        <Box margin={"auto"}>
          <Img src={img} alt="name" width={"500px"} height={"400px"} padding="10px" />
        </Box>
      </Box>
    </Box>
  );
};

export default CCard;

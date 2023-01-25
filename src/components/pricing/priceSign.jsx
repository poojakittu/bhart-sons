import { Box, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import PlanSingleDiv from "./planSingleDiv";
import { Link } from "react-router-dom";

let data = [
  "Automatic time tracking",
  "URL and app tracking",
  "Integrated web timer",
  "Mobile app",
];

function PriceSign() {
    
  return (
    <Box
      w={["100%", "100%", "90%", "90%"]}
      m="auto"
      p="40px 10px"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      borderRadius="10px"
      mt="70px"
      mb="70px"
    >
      
    </Box>
  );
}

export default PriceSign;

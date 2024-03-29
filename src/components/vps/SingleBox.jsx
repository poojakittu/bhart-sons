import { Box, Card, CardBody, CardFooter, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SingleBox = ({ des, link, img }) => {
  const navigate = useNavigate();
  const handleClick = (link) => navigate(link);

  return (
    <Box
      border={"2.5px solid #e8c615"}
      borderRadius="0px 30px"
      p={"5px"}
      h={"230px"}
    >
      <Box
        _hover={{
          background: "#e8c615", // Yellow background on hover
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
          transform: "scale(1.1)", // Zoom effect on hover
        }}
        onClick={() => handleClick(link || "#")}
        textAlign={"center"}
        borderRadius="0px 30px"
        // Rounded corners
        p={"10px"}
      >
        <Box width={"200px"} p={"20px"} m={"auto"}>
          <Image src={img} margin="auto" width={"100%"} height={"120px"} />
        </Box>
        <Text
          textAlign={"center"}
          _hover={{ color: "white" }} // White text color on hover
          color="black"
          m={"auto"}
        >
          {des}
        </Text>
      </Box>
    </Box>
  );
};

export default SingleBox;

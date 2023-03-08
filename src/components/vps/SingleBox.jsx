import { Box, Card, CardBody, CardFooter, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const SingleBox = ({ des, link, img }) => {
  const navigate = useNavigate();
  const handleCLick = (link) => navigate(link);
  return (
    <Card
      _hover={{ boxShadow: `rgba(0, 0, 0, 0.56) 0px 22px 70px 4px` }}
      onClick={() => handleCLick(link || "#")}
      textAlign={"center"}
      minW={"100%"}
      minH={"100%"}
      border={"0.5px solid #e8c615"}
    >
      <CardBody>
        <Box p="10px 10px">
          <Image w={"70%"} src={img} height={"130px"} margin="auto" />
        </Box>
      </CardBody>
      <CardFooter m="auto">
        <Text
          /* m="auto" */ textAlign={"center"}
          _hover={{ color: "#9130c2" }}
          letterSpacing="1px"
          color="black"
          marginTop={"-45px"}
        >
          {des}{" "}
        </Text>
      </CardFooter>
    </Card>
  );
};

export default SingleBox;

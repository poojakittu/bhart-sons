import React from "react";
import { Container, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function BottomUp() {
  return (
    <Flex my={70}>
      <Flex
        w="80%"
        flexDirection={["column", "column", "column", "row"]}
        m="auto"
      >
        <Flex
          width={["100%", "100%", "100%", "50%"]}
          justify={"center"}
          alignItems={"center"}
        >
          <img
            src="https://i.tribune.com.pk/media/images/2243998-image-1592318762/2243998-image-1592318762.jpg"
            alt=""
          />
        </Flex>
        <Flex width={["100%", "100%", "100%", "50%"]} alignItems={"center"} padding={"20px"}>
          <Flex flexDirection={"column"}>
            <Container
              fontSize={["26px", "30px", "33px", "36px"]}
              fontWeight={"700"}
              color={"#333c43"}
              textAlign={"left"}
            >
              Not convinced yet?
            </Container>{" "}
            <Container
              fontSize={["26px", "30px", "33px", "36px"]}
              fontWeight={"700"}
              color={"#333c43"}
              textAlign={"left"}
            >
              Check out our self-guided demo
            </Container>
            <Container
              marginBottom={"16px"}
              marginTop={"15px"}
              fontSize={["17px", "18px", "18px", "18px"]}
              color={"#475054"}
              textAlign={"left"}
            >
              If you want the full scope of what you’re getting once you sign
              up, visit our demo account. You can try out all the features
              DeskTime has to offer.
            </Container>
            <Flex>
              <Link to="/contact">
                <Button
                  fontSize={["15px", "16px", "16px", "18px"]}
                  border="0.8PX SOLID GREY"
                  borderRadius={5}
                  bg={"#e8c615"}
                  color={"#fff"}
                  marginLeft={"10px"}
                  padding={["12px 18px", "14px 20px", "14px 20px", "16px 22px"]}
                  fontWeight={"600"}
                >
                  {" "}
                  FOR DEMO
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default BottomUp;

import { Text, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function BottomMost() {
  return (
    <Flex bg={"#4ea819"} mt="50px" py="70px" mb="100px">
      <Flex w="60%" m="auto" flexDirection={"column"} justifyContent={"center"}>
        <Text
          fontSize={{ base: "24px", md: "24px", lg: "36px" }}
          fontWeight={"700"}
          color="#fff"
        >
          Don't miss our Products, full of productivity resources with tips, trends,
          statistics, and Support!
        </Text>
        <Flex mt="20px" justify={"center"} gap={"20px"}>
          <Link to="/contact">
            <Button
              fontSize={"1.115rem"}
              border="1px solid white"
              borderRadius={5}
              bg={"#4ea819"}
              color={"#fff"}
              padding={"0.8125rem 1.8rem"}
              fontWeight={"600"}
              _hover={{
                color: "#475076",
                backgroundColor: "#fff",
              }}
            >
              {" "}
              Contact Us
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default BottomMost;

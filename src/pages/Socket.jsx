import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import GridTopicBox from "../components/vps/GridTopicBox";
import { useMedia } from "../MediaQuery/UseMedia";

/* dummy Data */
import { gridData } from "../components/vps/dummyData";
/* img */
const firstImg =
  "https://uploads-ssl.webflow.com/5f1b4085f4118a504729a0ea/5f1b427a40cb57eaceb0b01c_Rocket.svg";

const Socket = () => {
  const { smallScreen, midBr } = useMedia();

  const lgStyle = {
    backgroundImage: `url(${firstImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    zIndex: 1,
    backgroundSize: "cover",
    cursor: "pointer",
  };

  return (
    <Box paddingTop="80px">
      {/* first */}
      <Box>
        <Box h={1}></Box>
        <Box
          w="100%"
          minHeight={!smallScreen ? "400px" : "670px"}
          style={lgStyle}
        >
          <Box
            m="auto"
            pt="85px"
            w={["96%", "96%", "80%", "50%", "40%"]}
            textAlign={"left"}
            margin="right"
            marginLeft={["20px", "20px", "80px", "400"]}
            padding="5px"
          >
            <Box ml={["0px", "1%", "3%", "5%", "8%"]}>
              <Text
                mt={["10px", "10px", "40px", "40px", "40px"]}
                fontSize={"4xl"}
                fontWeight="bold"
                color="black "
              >
                Secure Socket Layer
              </Text>
              
              <Text mt="7" color="black" fontSize={"sm"}>
              Websites need SSL certificates to keep user data secure, verify ownership of the website, prevent attackers from creating a fake version of the site, and convey trust to users
              </Text>
              <Box mt="20px"></Box>
              <Button
                background={"#4ea819"}
                borderRadius={"50px 0px 50px 50px"}
              >
                <a href="/demo" target="_blank">Get Started</a>  
              </Button>
              {!smallScreen && <br />}
              {!smallScreen && <br />}
              <Button
                ml={smallScreen ? "30px" : "0px"}
                background={"#4ea819"}
                borderRadius={"50px 0px 50px 50px"}
              >
                <a
          href="https://wa.me/9871418798"
          rel="noopener norefferer"
          target="_blank"
        >
                Talk to an Expert
                </a>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* second */}
      <Box bgColor={"#f5f8fd"} p="50px 10%" textAlign={"center"}>
        <Text color={"#4ea819"} fontSize={"4xl"} fontWeight="bold">
        Benifits of SSL
        </Text>
        <Text
          fontSize={
            !smallScreen ? "sm" : !midBr ? "sm" : "sm"
          } /* color="blue" */
        >
          SSL Certificate secures the data which is in transit between server and browser. In simple words, it keeps the information private and secure.
        </Text>
        <GridTopicBox data={gridData.gridDataSSL} />
      </Box>
      {/* third */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#4ea819"} fontSize={"4xl"} fontWeight="bold">
        Feature of SSL Cerificate
        </Text>

        <Text textAlign={"center"} color="black" fontSize={"sm"}>
        SSL security is common for Business Process Portal modules accessible through the Web, such as Home, Management, and Administration
        </Text>
        <Flex
          flexDirection={!midBr ? "column" : "row"}
          mt="40px"
          justifyContent={"space-between"}
        >
          <Box w={midBr ? "47%" : "100%"}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4uMW8XKiQvvepi8Ihp6RgSwoUeIQUE86wwMpoDsCjp8eVTN9Jbr0gwEp4wXR2OL8k_I&usqp=CAU"
              width="100%"
              height={"350px"}
            ></Image>
          </Box>
          <Box p="1%" w={midBr ? "47%" : "100%"}>
            <Text
              bgColor="#09ab78"
              _hover={{
                textAlign: "right",
                background: "#4ea819",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 50px 50px 0px"}
              p="15px 10px"
              textAlign={"left"}
            >
              Encryption 256 Bit
            </Text>
            <Text
              bgColor="#09ab78"
              boxShadow={`rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`}
              _hover={{
                textAlign: "left",
                background: "#4ea819",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 0px 50px 50px"}
              p="15px 10px"
              /* border="1px solid red" */ textAlign={"right"}
            >
              SSL Boost Website SEO Rankings
            </Text>
            {/* sec */}
            <Text
              bgColor="#09ab78"
              _hover={{
                textAlign: "right",
                background: "#4ea819",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 50px 50px 0px"}
              p="15px 10px"
              textAlign={"left"}
            >
            Secure Payments to Experience Safe Shopping
            </Text>
            <Text
              bgColor="#09ab78"
              boxShadow={`rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`}
              _hover={{
                textAlign: "left",
                background: "#4ea819",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 0px 50px 50px"}
              p="15px 10px"
              /* border="1px solid red" */ textAlign={"right"}
            >
             SSL Increase Customer Trust & Revenue
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* fourth */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#4ea819"} fontSize={"4xl"} fontWeight="bold">
          Advantage
        </Text>
        <Text fontSize={"sm"} /* color="blue" */>
        Why choose your Solutions
        </Text>
        <GridTopicBox data={gridData.gridData3} column={4} margin="auto" />
      </Box>
    </Box>
  );
};

export default Socket;

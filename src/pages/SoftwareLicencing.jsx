import { Box, Button, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import GridTopicBox from "../components/vps/GridTopicBox";
import { useMedia } from "../MediaQuery/UseMedia";
import { pfData6 } from "../components/pricing/data1";
/* dummy Data */
import { gridData } from "../components/vps/dummyData";
import PriceBox from "../components/pricing/priceBox";
/* img */
const firstImg =
  "https://uploads-ssl.webflow.com/5f1b4085f4118a504729a0ea/5f1b427a40cb57eaceb0b01c_Rocket.svg";

const SoftwareLicence = () => {
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
                Software Licensing
              </Text>

              <Text mt="7" color="black" fontSize={"sm"}>
                We are dealing with all kind of MicrosftWe are dealing with all
                kinds of Microsoft license. Which help to make easy work,
                reliable & Secure work.{" "}
              </Text>
              <Box mt="20px"></Box>
              <Button
                background={"#e8c615"}
                borderRadius={"50px 0px 50px 50px"}
              >
                <a href="/demo" target="_blank">
                  Get Started
                </a>
              </Button>
              {!smallScreen && <br />}
              {!smallScreen && <br />}
              <Button
                ml={smallScreen ? "30px" : "0px"}
                background={"#e8c615"}
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
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
          Benifit Software Licensing
        </Text>
        <Text
          fontSize={
            !smallScreen ? "sm" : !midBr ? "sm" : "sm"
          } /* color="blue" */
        >
          Software licensing is profitability. Software licensing offers
          multiple ways to increase profitability including managing licenses
          while at the same time protecting against privacy
        </Text>
        <GridTopicBox data={gridData.gridDataLicence} />
      </Box>
      {/* third */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
          Advantages of Software Licensing
        </Text>

        <Text textAlign={"center"} color="black" fontSize={"sm"}>
          Software licensing offers portability, piracy, profitability, and at
          the same time protecting against privacy by creating legal software
          agreements.{" "}
        </Text>
        <Flex
          flexDirection={!midBr ? "column" : "row"}
          mt="40px"
          justifyContent={"space-between"}
        >
          <Box w={midBr ? "47%" : "100%"}>
            <Image
              src="https://www.jrebel.com/sites/default/files/image/2019-11/image-blog-legal-basics-of-software-licensing.jpg"
              width="100%"
              height={"350px"}
            ></Image>
          </Box>
          <Box p="1%" w={midBr ? "47%" : "100%"}>
            <Text
              bgColor="#09ab78"
              _hover={{
                textAlign: "right",
                background: "#e8c615",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 50px 50px 0px"}
              p="15px 10px"
              textAlign={"left"}
            >
              Microsoft
            </Text>
            <Text
              bgColor="#09ab78"
              boxShadow={`rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`}
              _hover={{
                textAlign: "left",
                background: "#e8c615",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 0px 50px 50px"}
              p="15px 10px"
              /* border="1px solid red" */ textAlign={"right"}
            >
              Ts Plus
            </Text>
            {/* sec */}
            <Text
              bgColor="#09ab78"
              _hover={{
                textAlign: "right",
                background: "#e8c615",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 50px 50px 0px"}
              p="15px 10px"
              textAlign={"left"}
            >
              Adobe
            </Text>
            <Text
              bgColor="#09ab78"
              boxShadow={`rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`}
              _hover={{
                textAlign: "left",
                background: "#e8c615",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 0px 50px 50px"}
              p="15px 10px"
              /* border="1px solid red" */ textAlign={"right"}
            >
              Corel Draw
            </Text>

            <Text
              bgColor="#09ab78"
              boxShadow={`rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`}
              _hover={{
                textAlign: "left",
                background: "#e8c615",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 0px 50px 50px"}
              p="15px 10px"
              /* border="1px solid red" */ textAlign={"right"}
            >
              Catia 3D
            </Text>

            <Text
              bgColor="#09ab78"
              boxShadow={`rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`}
              _hover={{
                textAlign: "left",
                background: "#e8c615",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 0px 50px 50px"}
              p="15px 10px"
              /* border="1px solid red" */ textAlign={"right"}
            >
              Autocad
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
          Prices
        </Text>
        <SimpleGrid
          alignItems="center"
          w={["100", "100%", "90%", "85%"]}
          m="auto"
          mt="80px"
          columns={["1", "1", "2", "3"]}
          spacing="30px"
        >
          {pfData6.map((ele, index) => {
            return (
              <PriceBox
                key={ele.type}
                type={ele.type}
                rs={ele.rs}
                tx={ele.tx}
                data={ele.ft}
                server={ele.server}
              />
            );
          })}
        </SimpleGrid>
      </Box>

      {/* fourth */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
          Advantage
        </Text>
        <Text fontSize={"md"} /* color="blue" */>
          Why choose your Solutions
        </Text>
        <GridTopicBox data={gridData.gridDataLicence} column={4} />
      </Box>
    </Box>
  );
};

export default SoftwareLicence;

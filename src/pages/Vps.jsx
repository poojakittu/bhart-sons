import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import GridTopicBox from "../components/vps/GridTopicBox";
import { useMedia } from "../MediaQuery/UseMedia";

/* dummy Data */
import { gridData } from "../components/vps/dummyData";
/* img */
const firstImg = "https://digitizematrix.in/Btrack/assets/img/vps-banner.png";

const Vps = () => {
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
    <Box>
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
          >
            <Box ml={["0px", "1%", "3%", "5%", "8%"]}>
              <Text
                mt={["10px", "160px", "140px", "140px", "140px"]}
                fontSize={"2xl"}
                color="blue"
              >
                Cloud VPS
              </Text>
              <Text
                mt="3"
                lineHeight={"40px"}
                color="blue"
                maxW={["100%", "90%", "85%", "75%", "70%"]}
                fontSize={"4xl"}
              >
                Cloud servers are stable, fast and secure.{" "}
              </Text>
              <Text mt="7" color="blue">
                They avoid the hardware issues seen with physical servers, and
                they are likely to be the most stable option for businesses
                wanting to keep their IT budget down. Cloud servers provide a
                faster service for your money.
              </Text>
              <Box mt="20px"></Box>
              <Button colorScheme={"cyan"} borderRadius={"50px 0px 50px 50px"}>
                Get Started
              </Button>
              {!smallScreen && <br />}
              {!smallScreen && <br />}
              <Button
                ml={smallScreen ? "30px" : "0px"}
                colorScheme={"cyan"}
                borderRadius={"50px 0px 50px 50px"}
              >
                Talk to an Expert
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* second */}
      <Box bgColor={"#f5f8fd"} p="50px 10%" textAlign={"center"}>
        <Text color={"#9130c2"}>Benifit of Cloud Server</Text>
        <Text
          fontSize={
            !smallScreen ? "md" : !midBr ? "xl" : "2xl"
          } /* color="blue" */
        >
          A simple way to cut costs, take advantage of economies of scale, and
          focus on your core business? By upgrading to a server in the cloud,
          your organisation avoids excessive infrastructure spending as it
          brings enhanced reliability in a high-availability environment.
        </Text>
        <GridTopicBox data={gridData.gridData1} />
      </Box>
      {/* third */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text fontSize={"2xl"} color={"#027bff"}>
          Feature
        </Text>
        <Text textAlign={"center"} color="#f5945c">
              Cloud Servers provide all the advanced features you need to build
              your application or website. Manage everything from within an
              intuitive control panel, making adjustments in real time as your
              requirements change, and matching resources precisely to your
              requirements.
            </Text>
        <Flex flexDirection={!midBr?"column":"row"} mt="40px" justifyContent={"space-between"}>
          <Box w={midBr?"47%":"100%"} border="1px solid red">
            <Image
              src="#"
            ></Image>
          </Box>
          <Box p="1%" w={midBr?"47%":"100%"} >
           {/*  <Text textAlign={"left"}>
              Cloud Servers provide all the advanced features you need to build
              your application or website. Manage everything from within an
              intuitive control panel, making adjustments in real time as your
              requirements change, and matching resources precisely to your
              requirements.
            </Text> */}
            <Text
              bgColor="#fad5df"
              _hover={{
                textAlign: "right",
                background: "blue",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 50px 50px 0px"}
              p="15px 10px"
              textAlign={"left"}
            >
              Custome option for CPU, RAM, Storage & Bandwidth etc.
            </Text>
            <Text
              bgColor="#fad5df"
              boxShadow={`rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`}
              _hover={{ textAlign: "left", background: "blue", color: "white" }}
              mt="15px"
              borderRadius={"50px 0px 50px 50px"}
              p="15px 10px"
              /* border="1px solid red" */ textAlign={"right"}
            >
              Admin & root acess
            </Text>
            {/* sec */}
            <Text
              bgColor="#fad5df"
              _hover={{
                textAlign: "right",
                background: "blue",
                color: "white",
              }}
              mt="15px"
              borderRadius={"50px 50px 50px 0px"}
              p="15px 10px"
              textAlign={"left"}
            >
              Choose operating system sutable for business
            </Text>
            <Text
              bgColor="#fad5df"
              boxShadow={`rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`}
              _hover={{ textAlign: "left", background: "blue", color: "white" }}
              mt="15px"
              borderRadius={"50px 0px 50px 50px"}
              p="15px 10px"
              /* border="1px solid red" */ textAlign={"right"}
            >
              1 Public Ip
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* fourth */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#9130c2"}>Advantages</Text>
        <Text fontSize={"2xl"} /* color="blue" */>
          Why choose your Solutions
        </Text>
        <GridTopicBox data={gridData.gridData2} column={3} />
      </Box>
    </Box>
  );
};

export default Vps;

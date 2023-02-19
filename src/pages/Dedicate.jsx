import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import GridTopicBox from "../components/vps/GridTopicBox";
import { useMedia } from "../MediaQuery/UseMedia";

/* dummy Data */
import { gridData } from "../components/vps/dummyData";
/* img */
const firstImg =
  "https://img.freepik.com/premium-photo/cloud-server-storing-personal-business-data-isolated-white-background-3d-render_188237-1086.jpg";

const Dedicate = () => {
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
          >
            <Box ml={["0px", "1%", "3%", "5%", "8%"]}>
              <Text
                mt={["10px", "160px", "140px", "140px", "140px"]}
                fontSize={"4xl"}
                fontWeight="bold"
                color="black "
              >
                Dedicated Cloud Server
              </Text>
              <Text
                mt="3"
                lineHeight={"40px"}
                color="black"
                maxW={["100%", "90%", "85%", "75%", "70%"]}
                fontSize={"4xl"}
              >
                Cloud servers are stable, fast and secure.{" "}
              </Text>
              <Text mt="7" color="black">
                A dedicated cloud is a single-tenant cloud infrastructure, which
                essentially acts as an isolated, single-tenant public cloud.
                Dedicated clouds are set as an infrastructure as a service
                (IaaS) and are made to reduce an organizations downtime and cost
                while promoting flexibility and performance.
              </Text>
              <Box mt="20px"></Box>
              <Button
                background={"#4ea819"}
                borderRadius={"50px 0px 50px 50px"}
              >
                Get Started
              </Button>
              {!smallScreen && <br />}
              {!smallScreen && <br />}
              <Button
                ml={smallScreen ? "30px" : "0px"}
                background={"#4ea819"}
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
        <Text color={"#4ea819"} fontSize={"4xl"} fontWeight="bold">
          Benifits Of Dedicated Server
        </Text>
        <Text
          fontSize={
            !smallScreen ? "md" : !midBr ? "xl" : "2xl"
          } /* color="blue" */
        >
          Server resources are not shared. When you choose a dedicated hosting
          provider, you get the full resources & full control of single server.
        </Text>
        <GridTopicBox data={gridData.gridData3} />
      </Box>
      {/* third */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#4ea819"} fontSize={"4xl"} fontWeight="bold">
          Features
        </Text>

        <Text textAlign={"center"} color="black">
          Cloud Servers provide all the advanced features you need to build your
          application or website. Manage everything from within an intuitive
          control panel, making adjustments in real time as your requirements
          change, and matching resources precisely to your requirements.
        </Text>
        <Flex
          flexDirection={!midBr ? "column" : "row"}
          mt="40px"
          justifyContent={"space-between"}
        >
          <Box w={midBr ? "47%" : "100%"}>
            <Image src="https://img.freepik.com/free-vector/cloud-server-banner-laptop-with-cloud-icon_39422-371.jpg"></Image>
          </Box>
          <Box p="1%" w={midBr ? "47%" : "100%"}>
            {/*  <Text textAlign={"left"}>
              Cloud Servers provide all the advanced features you need to build
              your application or website. Manage everything from within an
              intuitive control panel, making adjustments in real time as your
              requirements change, and matching resources precisely to your
              requirements.
            </Text> */}
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
              Server resources are not shared. When you choose a dedicated hosting
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
             Reliable Security and Disaster Recovery
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
             Increased Flexibility, Reduced Costs
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
             Enhanced performance and security
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* fourth */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#4ea819"} fontSize={"4xl"} fontWeight="bold">
          Advantage
        </Text>
        <Text fontSize={"2xl"} /* color="blue" */>
          Why choose your Solutions
        </Text>
        <GridTopicBox data={gridData.gridData2} column={3} />
      </Box>
    </Box>
  );
};

export default Dedicate;

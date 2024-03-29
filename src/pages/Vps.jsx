import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import GridTopicBox1 from "../components/vps/GridTopicBox1";
import { useMedia } from "../MediaQuery/UseMedia";

import GridTopicBox from "../components/vps/GridTopicBox";
import { gridData } from "../components/vps/dummyData";
import { pfData } from "../components/pricing/data";
import PriceBox from "../components/pricing/priceBox";
/* img */
const firstImg =
  "https://img.freepik.com/premium-photo/cloud-server-storing-personal-business-data-isolated-white-background-3d-render_188237-1086.jpg";

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
    <Box paddingTop="60px" m="auto">
      {/* first */}
      <Box>
        <Box h={1}></Box>
        <Box
          w="100%"
          minHeight={!smallScreen ? "400px" : "670px"}
          style={lgStyle}
        >
          <Box
            m="left"
            p="5%"
            pt="65px"
            w={["96%", "96%", "80%", "50%", "40%"]}
            textAlign={"left"}
          >
            <Box ml={["0px", "1%", "1%", "1%", "1%"]}>
              <Text
                mt={["10px", "10px", "140px", "140px", "140px"]}
                fontSize={"4xl"}
                fontWeight="bold"
                color="black "
              >
                Cloud VPS
              </Text>
              <Text
                mt="3"
                lineHeight={"40px"}
                color="black"
                maxW={["100%", "90%", "85%", "75%", "60%"]}
                fontSize={"4xl"}
              >
                Cloud servers are stable, fast and secure.{" "}
              </Text>
              <Text mt="7" color="black">
                They avoid the hardware issues seen with physical servers, and
                they are likely to be the most stable option for businesses
                wanting to keep their IT budget down. Cloud servers provide a
                faster service for your money.
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
          Benifits of Cloud Server
        </Text>
        <Text
          fontSize={
            !smallScreen ? "md" : !midBr ? "sm" : "sm"
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
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
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
            <Image src="https://go4hosting.in/blog/wp-content/uploads/2018/11/dedicated-to-cloud-hosting.jpg"></Image>
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
              bgColor="#e8c615"
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
              Custome option for CPU, RAM, Storage & Bandwidth etc.
            </Text>
            <Text
              bgColor="#e8c615"
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
              Admin & root access
            </Text>
            {/* sec */}
            <Text
              bgColor="#e8c615"
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
              Choose operating system sutable for business
            </Text>
            <Text
              bgColor="#e8c615"
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
              1 Public Ip
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
          Cloud VPS Prices
        </Text>
        <SimpleGrid
          alignItems="center"
          w={["100", "100%", "90%", "85%"]}
          m="auto"
          mt="80px"
          columns={["1", "1", "2", "3"]}
          spacing="30px"
        >
          {pfData.map((ele, index) => {
            return (
              <PriceBox
                key={ele.type}
                type={ele.type}
                rs={ele.rs}
                tx={ele.tx}
                data={ele.ft}
                xx={ele.xx}
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
        <Text fontSize={"2xl"} /* color="blue" */>
          Why choose your Solutions
        </Text>
        <GridTopicBox1 data={gridData.gridData2} column={4} gap={"10px"} />
      </Box>
    </Box>
  );
};

export default Vps;

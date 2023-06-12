import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import GridTopicBox from "../components/vps/GridTopicBox";
import { useMedia } from "../MediaQuery/UseMedia";

/* dummy Data */
import { gridData } from "../components/vps/dummyData";
import { pfData4 } from "../components/pricing/data";
import PriceBox from "../components/pricing/priceBox";
/* img */
const firstImg =
  "https://www.fasthosts.co.uk/blog/content/images/2022/06/What_is_email_hosting_1920_x_870_-_2.png";

const Email = () => {
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
                color="white"
              >
                Email Hosting
              </Text>

              <Text mt="7" color="white" fontSize={"md"} >
                A professional business email address instills a sense of trust
                in your customers as compared to a @gmail.com or @yahoo.com
                email address. Hence a Professional email address boosts your
                company's impression and showcases.
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
          Benifits of Email Solutions
        </Text>
        <Text
          fontSize={
            !smallScreen ? "sm" : !midBr ? "sm" : "md"
          } /* color="blue" */
        >
          Email Solutions offers more control and enhances your security
        </Text>
        <GridTopicBox data={gridData.gridData4} />
      </Box>
      {/* third */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
          Feature of Email Solutions
        </Text>

        <Text textAlign={"center"} color="black" fontSize={"sm"}>
          SSL security is common for Business Process Portal modules accessible
          through the Web, such as Home, Management, and Administration
        </Text>
        <Flex
          flexDirection={!midBr ? "column" : "row"}
          mt="40px"
          justifyContent={"space-between"}
        >
          <Box w={midBr ? "47%" : "100%"}>
            <Image
              src="https://www.ntsplhosting.com/blog/wp-content/uploads/2021/01/business-email-hosting.jpg"
              width="100%"
              height={"350px"}
            />
          </Box>

          <Box p="1%" w={midBr ? "47%" : "100%"}>
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
              Minimum Per Email Storage 20 GB
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
              AntiSpam/Antivirus Management
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
              Activity, Status & Health Monitoring
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
              IMAP/POP3
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
              Admin Management Console
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
              SPAM Filter and Protection
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
              Archival Mail
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
              Backup & Restore (Paid Option)
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
          {pfData4.map((ele, index) => {
            return (
              <PriceBox
                key={ele.type}
                type={ele.type}
                rs={ele.rs}
                tx={ele.tx}
                xx={ele.xx}
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
        <Text fontSize={"sm"} /* color="blue" */>
          Why choose your Solutions
        </Text>
        <GridTopicBox data={gridData.gridData3} column={4} margin="auto" />
      </Box>
    </Box>
  );
};

export default Email;

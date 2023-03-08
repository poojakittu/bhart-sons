import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import GridTopicBox from "../components/vps/GridTopicBox";
import { useMedia } from "../MediaQuery/UseMedia";

/* dummy Data */
import { gridData } from "../components/vps/dummyData";
/* img */
const firstImg =
  "https://uploads-ssl.webflow.com/5f1b4085f4118a504729a0ea/5f1b427a40cb57eaceb0b01c_Rocket.svg";

const Employee = () => {
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
                Employee Monitoring Tool
              </Text>
              <Text
                mt="3"
                lineHeight={"40px"}
                color="black"
                maxW={["100%", "90%", "85%", "75%", "70%"]}
                fontSize={"4xl"}
              >
                Employee are stable, fast and secure.{" "}
              </Text>
              <Text mt="7" color="black" fontSize={"sm"}>
                Employee monitoring Tool boosts the employee oversight
                capabilities of companies, ensuring that employees are following
                best practices when it comes to work-related tasks, access to
                sensitive company data, resources, and security. It ensures that
                all employee activities are tracked, providing total visibility
                and traceability into operations.
              </Text>
              <Box mt="20px"></Box>
              <Button
                background={"#e8c615"}
                borderRadius={"50px 0px 50px 50px"}
              >
                <a href="/demo" target="_blank">Get Started</a>  
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
          Benifits of Employee Monitoring Tool
        </Text>
        <Text
          fontSize={
            !smallScreen ? "sm" : !midBr ? "sm" : "sm"
          } /* color="blue" */
        >
          Monitoring can make a worker more productive on the job by cutting
          down on the number of mistakes made while also allowing for greater,
          efficient use of one's time. In addition, the practice could make the
          workplace safer. Employers more easily recognize an employee's
          positive abilities through monitoring.
        </Text>
        <GridTopicBox data={gridData.gridData4} />
      </Box>
      {/* third */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
          Feature of Employee Monitoring Tools
        </Text>

        <Text textAlign={"center"} color="black" fontSize={"sm"}>
          Features of the Employee monitoring tool help track the time spent by
          each employee in the complete workforce finishing the allotted tasks.
          This includes the login/logout, active/idle time, and the hours spent
          on work, applications, web pages, etc.
        </Text>
        <Flex
          flexDirection={!midBr ? "column" : "row"}
          mt="40px"
          justifyContent={"space-between"}
        >
          <Box w={midBr ? "47%" : "100%"}>
            <Image
              src="https://www.scnsoft.com/_default_upload_bucket/employee-monitoring-software.png"
              width="100%"
              height={"350px"}
            />
            <Box
              w={["70%", "70%", "70%", "100%"]}
              h="300px"
              as="iframe"
              marginTop={"30px"}
              marginBottom={"40px"}
              src="https://www.youtube.com/embed/sgmDvqlSMF4?playlist=sgmDvqlSMF4&autoplay=1&mute=1&loop=1&enablejsapi=1&origin=https%3A%2F%2Fdesktime.com"
              sx={{
                aspectRatio: "16/9",
              }}
            />
            <Image
              src="https://hrapp.in/wp-content/uploads/2021/03/vector-employee-time-tracking-software.png"
              width="100%"
              height={"350px"}
            />
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
              Visible/InVisible Working
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
              Admin, Managers & User Login
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
              Desktop activity logs
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
              Auto & Manual Login/Logout
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
              Online/Offline Tracking
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
              File Name & Path Tracking
            </Text>
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
              Whitelist & Blacklist Apps & URLs
            </Text>
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
              Productivity Calculator
            </Text>
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
              Email Reporting
            </Text>
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
              Configure idle time
            </Text>
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
              Active Directory Integration
            </Text>
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
              Department wise report
            </Text>
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
              Meeting App Categorization
            </Text>
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
              Automated Screenshots & Live track by Video
            </Text>
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
              Pause/Resume App Tracking
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* fourth */}

      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
          Operating System Support
        </Text>
        <Text fontSize={"sm"} /* color="blue" */>Mac , Windows & Linux</Text>
      </Box>

      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
          What is Employee Montioring Tools ?
        </Text>
        <Text fontSize={"sm"} >Employee Monitoring helps to monitor all employee activity in one centralized location.</Text>
      </Box>

      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#e8c615"} fontSize={"4xl"} fontWeight="bold">
        Why Employee Monitoring tool Impoetant for our bussniess ?
        </Text>
        <Text fontSize={"sm"} >Its help to scale up your busniess & improve employee productivity.</Text>
      </Box>


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

export default Employee;

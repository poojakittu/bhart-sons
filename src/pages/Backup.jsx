import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import GridTopicBox from "../components/vps/GridTopicBox";
import { useMedia } from "../MediaQuery/UseMedia";

/* dummy Data */
import { gridData } from "../components/vps/dummyData";
/* img */
const firstImg =
  "https://uploads-ssl.webflow.com/5f1b4085f4118a504729a0ea/5f1b427a40cb57eaceb0b01c_Rocket.svg";

const Backup = () => {
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
                Backup & Storage
              </Text>
              <Text
                mt="3"
                lineHeight={"40px"}
                color="black"
                maxW={["100%", "90%", "85%", "75%", "70%"]}
                fontSize={"4xl"}
              >
                fast and secure.{" "}
              </Text>
              <Text mt="7" color="black" fontSize={"sm"}>
                Backup storage is the supplementary, off-device storage of files
                and application data. It is both hardware- and software-based
                and allows for the secure maintenance, management, and retrieval
                of important backup data
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
          Benifit of Backup & Stroage
        </Text>
        <Text
          fontSize={
            !smallScreen ? "sm" : !midBr ? "sm" : "sm"
          } /* color="blue" */
        >
          Data backup and recovery software offer replication functionality.
          This can be used to create real-time replicas of your data and store
          them away, making your data disaster-proof.
        </Text>
        <GridTopicBox data={gridData.gridDataBackup} />
      </Box>
      {/* third */}
      <Box p="50px 10%" textAlign={"center"}>
        <Text color={"#4ea819"} fontSize={"4xl"} fontWeight="bold">
          Feature of Backup & Stroage
        </Text>

        <Text textAlign={"center"} color="black" fontSize={"sm"}>
          Your backup is securely stored in the cloud until you need to restore
          it. If you experience data loss for any reason, you can restore to the
          most recent “clean” copy of your systems.
        </Text>
        <Flex
          flexDirection={!midBr ? "column" : "row"}
          mt="40px"
          justifyContent={"space-between"}
        >
          <Box w={midBr ? "47%" : "100%"}>
            <Image
              src="https://www.pcworld.com/wp-content/uploads/2022/10/online_backup_cloud_service-100737202-orig.jpg?quality=50&strip=all"
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
              Take Backup Url, website & any Software.
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
              Support all platform.
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
              Managed anti-malware protection
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
              Advanced Disaster Recovery
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
          Backup & Storage gives you access to more resources, thereby allowing you to scale the resources as your business grows. It comes with many potential benefits - better reliability, superior security, improved performance and an uptime guarantee, etc
        </Text>
        <GridTopicBox data={gridData.gridData2} column={3} />
      </Box>
    </Box>
  );
};

export default Backup;

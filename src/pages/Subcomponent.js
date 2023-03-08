import React, { useEffect } from "react";

import {
  Box,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { bgImage} from "../assets/images";
export default function Subcomponent() {
  useEffect(() => {
    document.title = "Bharat & Sons";
  });

  return (
    <ChakraProvider>
      <Box>
        <Box pt="90px">
          <Box
            backgroundImage={["none", "none", "none", bgImage]}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            h="300px"
          >
            <Box
              w={["100%", "100%", "100%", "40%"]}
              m="auto"
              textAlign="center"
            >
              <Heading
                fontSize={["17px", "22px", "35px"]}
                lineHeight="2rem"
                mb="20px"
                color={["#333c43", "#333c43", "#333c43", "#fff"]}
                pt="60px"
              >
                About Information Technology (IT) Equipment and Supplies
              </Heading>
              <Text
                fontWeight="600"
                mb="30px"
                color={["#333c43", "#333c43", "#333c43", "#fff"]}
                p="10px"
              >
                TPurchase your computers, software, hardware and other IT
                related supplies and peripherals through recommended suppliers.
                CAN PROVIDE THE BEST CLOUD, HARDWARE AND SOFTWARE SERVICES IN
              </Text>
              <Center></Center>
            </Box>
          </Box>

          <Box mt="70px">
            <Flex
              w="90%"
              m="auto"
              justifyContent="center"
              flexDirection={[
                "column-reverse",
                "column-reverse",
                "column-reverse",
                "row",
              ]}
              gap="30px"
            >
              <Flex
                w={["100%", "100%", "100%", "50%"]}
                flexDirection="column"
                justifyContent="left"
                alignItems="center"
              >
                <Box>
                  <Heading
                    textAlign="left"
                    fontSize={["17px", "22px", "35px"]}
                    lineHeight="40px"
                    mb="30px"
                    color="#333c43"
                  >
                    Purchasing IT Supplies, Accessories and Peripherals
                  </Heading>
                  <Text
                    textAlign="left"
                    lineHeight="20px"
                    color="#475056"
                    mb="30px"
                  >
                    Purchase your IT products through a variety of vendors
                    approved by Purchasing.
                  </Text>
                  <Text textAlign="left" lineHeight="20px" color="#475056">
                    TO EXCEED THE EXPECTATIONS OF THE CUSTOMERS AND PROVIDE THEM
                    WITH THE BEST CLOUD, HARDWARE AND SOFTWARE SERVICES THE MOST
                    RELIABLE SUPPORT SYSTEM.
                  </Text>
                  <Text
                    textAlign="left"
                    lineHeight="20px"
                    color="#475056"
                    mb="30px"
                  >
                    Purchasing Hardware.
                  </Text>
                  <Text textAlign="left" lineHeight="20px" color="#475056">
                    Find out about the recommended suppliers for hardware. Be
                    sure the unit is compatible with existing equipment, meets
                    UB's minimum standards and is designed for use in a business
                    or university environment.
                  </Text>
                </Box>
              </Flex>
              <Flex
                w={["100%", "100%", "100%", "50%"]}
                m="auto"
                justifyContent="center"
              >
                <Image
                  maxW="100%"
                  maxH="400px"
                  src="https://cdn1.vectorstock.com/i/1000x1000/20/75/computer-office-equipment-vector-9802075.jpg"
                />
              </Flex>
            </Flex>
          </Box>

        </Box>
       
        <Box></Box>
      </Box>
    </ChakraProvider>
  );
}

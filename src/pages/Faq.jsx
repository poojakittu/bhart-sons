import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Blog/Subscribe";
import {
  Box,
  Text,
  Button,
  Link,
  ChakraProvider,
  SimpleGrid,
  Heading,
  Stack,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  
} from "@chakra-ui/react";
import { useState } from "react";
export const Faq = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    document.title = "FAQ | Activity Tracker";
  });

  return (
    <>
      <ChakraProvider>
      
        <Box pt="50px" w="100%" m="auto">
        <Box>
        <Box w={["100", "100%", "90%", "80%"]} m="auto" mt="80px" mb="80px">
          <Box mt="70px">
            <Box>
              <Heading fontSize={["20px", "20px", "25px", "30px"]} mb="50px">
                Frequently asked questions
              </Heading>
            </Box>

            <Stack w="80%" m="auto" spacing="20px" mb="100px">
              <Accordion allowToggle>
                <AccordionItem
                  border="1px solid #dee2e6"
                  borderRadius="5px"
                  p="10px"
                  backgroundColor={"#4ea819"}
                >
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        fontWeight="bold"
                        color="white"
                        textAlign="left"
                        bgColor={"#4ea819"}
                      >
                        How much does DeskTime cost?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel textAlign="left" pb={4} backgroundColor="white">
                    DeskTime is free to try for 14 days and will always stay
                    free for individual use with the LITE plan. Pricing plans
                    start at $7/user and can go as low as $5.50/user for larger
                    teams, if paid annually. Find out more here.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle>
                <AccordionItem
                  border="1px solid #dee2e6"
                  borderRadius="5px"
                  p="10px"
                >
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        fontWeight="bold"
                        color="#475056"
                        textAlign="left"
                      >
                        How can I subscribe?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel textAlign="left" pb={4}>
                    In order to start using DeskTime Pro, click on ‘Add payment
                    method’, choose the payment type - Credit card or PayPal,
                    enter billing details and click ‘Save payment method’. The
                    selected payment method will be automatically charged each
                    billing cycle. Read more here.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle>
                <AccordionItem
                  border="1px solid #dee2e6"
                  borderRadius="5px"
                  p="10px"
                >
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        fontWeight="bold"
                        color="#475056"
                        textAlign="left"
                      >
                        What is the difference between monthly and annual
                        billing?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel textAlign="left" pb={4}>
                    The monthly billing plan charges your payment method on the
                    first day of every month. The annual payment method charges
                    once a year on the date when the plan was started, and
                    offers a free month of subscription compared to the monthly
                    plan. Find out more here.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle>
                <AccordionItem
                  border="1px solid #dee2e6"
                  borderRadius="5px"
                  p="10px"
                >
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        fontWeight="bold"
                        color="#475056"
                        textAlign="left"
                      >
                        How can I add or remove users from my plan?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel textAlign="left" pb={4}>
                    To change the amount of users in your plan, click on the
                    “Manage members“ option under “Team members count“. From
                    there you can select the new amount of employees you need
                    using the slider and clicking “Update“. For a more detailed
                    guide, read this article.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Stack>
          </Box>
        </Box>
      </Box>
          <SimpleGrid
            w={["90%", "90%", "90%", "80%"]}
            m="auto"
            columns={["1", "1", "1", "2"]}
            spacing="30px"
          >
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Getting started
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>How does the Mobile app work?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                color="white"
                fontWeight="600"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                General
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>How does the application work?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What is Private Time?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                fontWeight="600"
                color="white"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Settings and Accounts
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                color="white"
                fontWeight="600"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Shifts Scheduling
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                fontWeight="600"
                color="white"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Booking
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                color="white"
                fontWeight="600"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Projects
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                fontWeight="600"
                color="white"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Offline Times
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                color="white"
                fontWeight="600"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Screenshots
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                fontWeight="600"
                color="white"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Reports
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                color="white"
                fontWeight="600"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Exports
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                fontWeight="600"
                color="white"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Integrations
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                color="white"
                fontWeight="600"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
            <Box
              border="1px solid #DEE2E6"
              p="0px 14px"
              height="250px"
              textAlign="start"
            >
              <Heading fontSize="22px" mb="20px" mt="20px" color="#333c43">
                Billing
              </Heading>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>How to set up my account (sign up,download,launch)?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅{" "}
                <Link>What is MyDeskTime page and what can i find there?</Link>
              </Text>
              <Text color="#333C43" fontWeight="700" mb="13px">
                ✅ <Link>What systems does DeskTime support?</Link>
              </Text>
              <Button
                w="100%"
                _hover={{ bg: "#4EA819" }}
                m="auto"
                fontSize="14px"
                bg="#4EA819"
                fontWeight="600"
                color="white"
                height="40PX"
                borderRadius="5px"
                border="1px solid #43762B"
              >
                VIEW ALL (24)
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
        <Box>
          <Subscribe />
        </Box>
      </ChakraProvider>
    </>
  );
};

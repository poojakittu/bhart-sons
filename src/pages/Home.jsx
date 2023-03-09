import {
  Flex,
  Box,
  Image,
  Text,
  Link,
  Heading,
  Stack,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import {
  IoRocketSharp,
  IoCalendarSharp,
  IoReceiptSharp,
} from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";

import { BiCalendarCheck } from "react-icons/bi";
import { TbFlameOff } from "react-icons/tb";

import Carousel from "../components/Carousel";

import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import BottomMost from "../components/Demo_Component/BottomMost";

function Home() {
  useEffect(() => {
    document.title = "Home | Bharat & Sons";
  });
  return (
    <ChakraProvider>
      <Box>
        <Box
          p="130px 0 40px 0"
          bgSize="cover"
          bg='url("https://desktime.com/static/web/_common/intro-background.png") no-repeat bottom'
        >
          <Flex
            p="15px 0"
            justifyContent="center"
            alignItems="center"
            textAlign="left"
            gap="50px"
            flexDirection={["column", "column", "column", "row"]}
          >
            <Stack w={["80%", "80%", "80%", "43%"]} spacing="20px">
              <Heading as="h1" fontSize="42px" color="#475056">
                IT & CLOUD SOLUTIONS
              </Heading>
              <Text color="#475056" fontSize="18px">
                The Hardware and Networking Professionals are responsible for
                identification and troubleshooting of software, hardware and
                network-related issues.
              </Text>
              <Text color="#475056" fontSize="18px">
                Undertake installation, maintenance and troubleshooting of
                microcomputers, peripheral equipment, data communications, Local
                Area Network (LAN) and Wide Area Network (WAN)
              </Text>
              <Text color="#475056" fontSize="18px">
                Examine the requirements of the complex network design and
                handle configuration and installation of workstations and
                operating systems of providers like Windows, Macintosh, etc
              </Text>

              <Box color="#475056">
                <Text>Try free for 14 days. No credit card required.</Text>
                <Text>
                  By signing up, you agree to our{" "}
                  <Link fontWeight="bold" href="#">
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link fontWeight="bold" href="#">
                    privacy policy
                  </Link>
                  .
                </Text>
              </Box>
            </Stack>
            <Box w={["70%", "70%", "70%", "40%"]} h="100%">
              <img
                src="https://userguiding.com/wp-content/uploads/2022/05/best-cloud-computing-services.jpg"
                alt=""
              />
            </Box>
          </Flex>
          <Flex p="25px 0" justifyContent="center">
            <Image
              w="16%"
              src="https://desktime.com/static/web/clients/customer-sixt-logo-white.svg"
            />
            <Image
              w="16%"
              src="https://desktime.com/static/web/clients/customer-mapon-logo-white.svg"
            />
            <Image
              w="16%"
              src="https://desktime.com/static/web/clients/customer-montway-logo-white.svg"
            />
            <Image
              w="16%"
              src="https://desktime.com/static/web/clients/customer-onthemap-logo-white.svg"
            />
            <Image
              w="158px"
              src="https://desktime.com/static/web/clients/customer-printful-logo-white.svg"
            />
          </Flex>
        </Box>

        <Flex
          p="70px 0"
          justifyContent="center"
          alignItems="center"
          gap="50px"
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
        >
          <Stack
            w={["80%", "80%", "80%", "52%"]}
            textAlign="left"
            spacing="20px"
          >
            <Heading as="h1" fontSize="36px" color="#475056">
              PAUCEK AND LAGE
            </Heading>
            <Text color="#475056" fontSize="18px">
              “The increasing use of digital service pushed us to look for
              trusted network vendors that can provide reliable services with
              friendly prices. After using the services of this company, we
              definitely can recommend this company to help your needs.”
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" fontSize="18px" gap="30px">
              <Box>
                <Flex alignItems="center" pb="10px" gap="3px">
                  <IoRocketSharp className="homeicon" />
                  <Text fontWeight="bold">Skyrocket effectiveness</Text>
                </Flex>
                <Text>
                  Skyrocket effectiveness Know who's doing what and how it's
                  going all the while eliminating distractions.
                </Text>
              </Box>
              <Box>
                <Flex alignItems="center" pb="10px" gap="3px">
                  <VscGraph className="homeicon" />
                  <Text fontWeight="bold">Minimize business losses</Text>
                </Flex>
                <Text>
                  Get precise insights into projects to determine profitability
                  and allocate resources.
                </Text>
              </Box>
              <Box>
                <Flex alignItems="center" pb="10px" gap="3px">
                  <BiCalendarCheck className="homeicon" />
                  <Text fontWeight="bold">Automate team management</Text>
                </Flex>
                <Text>
                  Organize shifts, absences, and booking-related questions all
                  in one place.
                </Text>
              </Box>
              <Box>
                <Flex alignItems="center" pb="10px" gap="3px">
                  <TbFlameOff className="homeicon" />
                  <Text fontWeight="bold">Avoid burnout</Text>
                </Flex>
                <Text>
                  Take care of your team and eliminate overworking with break
                  reminders and private time.
                </Text>
              </Box>
            </Grid>
          </Stack>
          <Box
            position="relative"
            w={["50%", "50%", "50%", "27%"]}
            borderRadius="3px"
          >
            <Image
              top="100px"
              left="-50px"
              position="absolute"
              w="125px"
              h="135px"
              src="https://images.g2crowd.com/uploads/report_medal/image/1003081/medal.svg"
            />
            <Image
              w="100%"
              borderRadius="3px"
              src="https://desktime.com/static/web/new-homepage/boost-productivity/boost-productivity.webp"
            />
          </Box>
        </Flex>

        <Flex
          flexDirection={["column", "column", "column", "row"]}
          p="70px 0"
          justifyContent="center"
          alignItems="center"
          gap="50px"
        >
          <Box maxW="538px" borderRadius="3px">
            <Image
              borderRadius="3px"
              src="https://www.shutterstock.com/image-photo/professional-financial-experts-collaborating-during-260nw-1389400298.jpg"
            />
          </Box>
          <Box w={["70%", "70%", "70%", "45%"]} textAlign="left">
            <Heading as="h1" fontSize="36px" color="#475056" pb="20px">
              INGOUDE COMPANY
            </Heading>
            <Text color="#475056" fontSize="18px">
              “Before we used the services provided by this company, we’ve
              always had problems in setting the network ourselves and keeping
              them stable even for just a month. Now, after we cooperate with
              this company, those problems seem so far away.”
            </Text>
            <Stack spacing="20px">
              <Box>
                <Flex alignItems="center" pb="10px" gap="5px">
                  <IoCalendarSharp className="homeicon" />
                  <Text color="#475056" fontSize="18px" fontWeight="bold">
                    Flexible schedule
                  </Text>
                </Flex>
                <Text color="#475056" fontSize="18px">
                  Easy-to-Use, Robust, Flexible and Feature Rich HR, Payroll
                  Software and Employee Self Service with Web / Online and
                  Payroll Software Functionalities for the Indian. M-Tech can be
                  used Globally with some customizations to meet country
                  specific requirements.
                </Text>
              </Box>

              <Box>
                <Flex alignItems="center" pb="10px" gap="5px">
                  <IoReceiptSharp className="homeicon" />
                  <Text color="#475056" fontSize="18px" fontWeight="bold">
                    No more unbilled hours
                  </Text>
                </Flex>
                <Text color="#475056" fontSize="18px">
                  VisualPay Payroll Software can be used by private sector
                  companies in India as well as Internationally and by Indian
                  Central Govt Organizations meeting VI Pay Commission
                  requirements. M-Tech is committed to providing you with a
                  World class Product, Well defined Implementation Methodology &
                  Excellent Support System
                </Text>
              </Box>
            </Stack>
          </Box>
        </Flex>

        <Box bg="#F5F5F6" p="70px 0">
          <Heading
            maxW="70%"
            m="auto"
            as="h1"
            fontSize="36px"
            color="#475056"
            pb="20px"
          >
            Our Services
          </Heading>
          <Carousel />
        </Box>

        <Box p="70px 10px">
          <Heading
            w={["70%", "70%", "70%", "50%"]}
            m="auto"
            mb="20px"
            as="h1"
            fontSize="36px"
            pb="20px"
            color="#475056"
          >
            Things worth knowing about using a time tracker
          </Heading>

          <Stack w="70%" m="auto" spacing="20px">
            <Accordion border="1px solid #D6D8D9" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                      Can implementing DeskTime prevent burnout?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                  Yes! Using a time tracker can help highlight overachievers and
                  spot team members who are struggling or might need some extra
                  help. This is a great way to catch and prevent burnout, as
                  well as rethink resource distribution.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion border="1px solid #D6D8D9" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                      Is my team's privacy safe when using a time tracker?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                  First thing’s first – DeskTime is not an employee monitoring
                  or spy tool, but it’s no secret that some might use this kind
                  of software in ways that aren’t employee-friendly. Managers
                  have the right to know how their employees get the job done,
                  but it's imperative to also value your team's time and
                  privacy. That's why DeskTime even has a Private time feature
                  that disables the time tracker for when you have to take care
                  of non-work-related tasks during office hours.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion border="1px solid #D6D8D9" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                      How to communicate using a time tracker with your team?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                  You have to remember that time tracking is a two-way street of
                  communication and lead by example. Yes, it gives managers an
                  overview of what their employees are doing during the workday,
                  but it’s also a tool to help employees show their progress and
                  ask for help if needed. Be transparent and honest about
                  implementing a time tracker and take the time to show its
                  benefits. For example, DeskTime lets you set break reminders,
                  encourage private time, and eliminate overworking so your team
                  members feel rested, valued, and safe.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Box>

        <BottomMost />
      </Box>
    </ChakraProvider>
  );
}

export default Home;

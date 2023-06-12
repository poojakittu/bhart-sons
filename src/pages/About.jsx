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
import { bgImage, AccessControl, VisualERP } from "../assets/images";
import AboutTimeline from "../components/aboutTimeline";
export default function Box1() {
  useEffect(() => {
    document.title = "Bharat & Sons";
  });

  return (
    <ChakraProvider>
      <Box pt={"90px"}>
        <div id="hero" className="d-grid align-items-center">
          <Box p={8}>
            <Flex alignItems="center" width={"80%"} m={"auto"} gap={"40px"}>
              <Box flex="1" pr={[0, 0, 0, 4]}>
                <Heading as={"h1"} size="lg" mb={6}>
                  IT & CLOUD SOLUTIONS
                </Heading>
                <Text mb={4}>
                  To maintain the highest levels of quality services, we strive
                  to provide the best cloud, hardware, and software services.
                  Our commitment to excellence ensures that we deliver top-notch
                  solutions to meet your needs effectively and efficiently. By
                  staying at the forefront of technology and industry trends, we
                  aim to exceed expectations and provide you with exceptional
                  value. Trust us to deliver reliable, scalable, and secure
                  solutions that empower your business to thrive in the digital
                  age.
                </Text>
              </Box>
              <Box flex="1" pl={[0, 0, 0, 4]}>
                <Image
                  src="https://ebookinfotech.com/img/about-us.gif"
                  className="img-fluid animated"
                  alt="hero-img"
                  borderRadius={"90px"}
                />
              </Box>
            </Flex>
          </Box>
        </div>
        <Box pt="90px">
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
                    fontSize={["20px", "24px", "32px"]}
                    lineHeight="40px"
                    mb="30px"
                    color="#333c43"
                  >
                    Built first for us, then made available to others
                  </Heading>
                  <Text
                    textAlign="left"
                    lineHeight="24px"
                    color="#475056"
                    mb="30px"
                    fontSize={["14px", "16px", "18px"]}
                  >
                    Bharat & Sons Systems Solution is a technologically advanced
                    cloud computing company in India and a leading provider of
                    on-demand, scalable, and reliable cloud services. We
                    specialize in IT solutions and services, offering a wide
                    range of services to cater to your specific needs. Our
                    comprehensive offerings include dedicated servers, virtual
                    private servers, GPU servers, cloud backups, and solutions
                    for everyday requirements such as email solutions, employee
                    monitoring, software licensing, and hardware services.
                  </Text>
                  <Text
                    textAlign="left"
                    lineHeight="24px"
                    color="#475056"
                    fontSize={["14px", "16px", "18px"]}
                  >
                    At Bharat & Sons Systems Solution, we prioritize our
                    customers' satisfaction and strive to exceed their
                    expectations. We are committed to providing the best cloud,
                    hardware, and software services, backed by a reliable
                    support system. We partner with industry-leading providers
                    and adhere to global standards in cloud solutions, ensuring
                    100% encryption and a 99.9% uptime service level agreement
                    (SLA). Our goal is to deliver exceptional solutions that
                    empower your business and enable you to achieve your
                    objectives with confidence.
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
                  src="https://i.ibb.co/CmkNGVN/Whats-App-Image-2023-06-11-at-10-04-33-PM.jpg"
                />
              </Flex>
            </Flex>
          </Box>

          <Box w="90%" m="auto" mt="100px">
            <Box mb="70px">
              <Heading
                fontSize={["17px", "22px", "35px"]}
                lineHeight="40px"
                mb="30px"
                color="#333c43"
              >
                Our milestones and how it all began
              </Heading>
            </Box>

            <Box>
              <Box>
                <AboutTimeline
                  img="data:image/jpeg;base64,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"
                  heading="Cloud Services"
                  text="Our services include Dedicated Servers,
                  Virtual Private Servers, GPU Servers and
                  clouud backups & solutions."
                  tmp={true}
                  isA={true}
                />

                <AboutTimeline
                  img="data:image/jpeg;base64,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"
                  heading="Hardware Services"
                  text="we are provide all kinds of hardwares like
                  server s , firewall, laptop/computer & all kinds
                  of acces sories."
                  tmp={true}
                  isA={false}
                />
                <AboutTimeline
                  img="data:image/png;base64,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"
                  heading="Software & Licences"
                  text="Wa are provide all kind of software &
                  licenses like microsoft office365, windows,
                  MS-Office, Tally, SAP & SQL etc."
                  tmp={true}
                  isA={true}
                />
                <AboutTimeline
                  img={AccessControl}
                  heading="Access"
                  text="The full-system localization, which has been in the works for a while, is finalized. Its a step that makes our website and productivity tips more accessible to Spanish-speaking communities across the globe."
                  tmp={true}
                  isA={false}
                />
                <AboutTimeline
                  img={VisualERP}
                  heading="Visual ERP"
                  text="The new and improved functionality for Mac and Linux users in the Electron software framework has made using DeskTime faster and more convenient. The update introduced user interface improvements in the app and Project Manager, a passwordless magic link login, and a project Quick menu for added user experience."
                  tmp={true}
                  isA={true}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

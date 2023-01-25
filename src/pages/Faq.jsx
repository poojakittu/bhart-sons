import React, { useEffect } from "react";

import { faqData } from "../components/pricing/data";
import {
  Box,
  ChakraProvider,
  Heading,
  Stack,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import BottomMost from "../components/Demo_Component/BottomMost";
export const Faq = () => {
  useEffect(() => {
    document.title = "FAQ | Bharat & Sons";
  });

  return (
    <>
      <ChakraProvider>
        <Box pt="50px" w="100%" m="auto">
          <Box>
            <Box w={["100", "100%", "90%", "80%"]} m="auto" mt="80px" mb="80px">
              <Box mt="70px">
                <Box>
                  <Heading
                    fontSize={["20px", "20px", "25px", "30px"]}
                    mb="50px"
                  >
                    Frequently asked questions
                  </Heading>
                </Box>

                <Stack w="80%" m="auto" spacing="20px" mb="100px">
                  {faqData.map((ele, index) => {
                    return (
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
                                {ele.qus}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel
                            textAlign="left"
                            pb={4}
                            backgroundColor="white"
                          >
                            {ele.ans}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    );
                  })}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <BottomMost />
        </Box>
      </ChakraProvider>
    </>
  );
};

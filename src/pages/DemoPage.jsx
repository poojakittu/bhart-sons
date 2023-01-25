import React, { useEffect } from "react";
import BottomUp from "../components/Demo_Component/BottomUp";
import Cards from "../components/Demo_Component/Cards";
import Headersection from "../components/Demo_Component/Headersection";
import Reviews from "../components/Demo_Component/Reviews";

import BottomMost from "../components/Demo_Component/BottomMost";
import { ChakraProvider } from "@chakra-ui/react";

import Carousel from "../components/Carousel";


function DemoPage(props) {
  useEffect(() => {
    document.title = "Demo | Bharat";
  });

  return (
    <ChakraProvider>
     
      <Headersection />
      <Cards />
  
      <Reviews />
      <BottomUp />
      <Carousel />
      <BottomMost />
     
    </ChakraProvider>
  );
}

export default DemoPage;

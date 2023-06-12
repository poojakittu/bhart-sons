import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Directory.css";
import axios from "axios";
import {
  Box,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function Hardware() {
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [que, setQue] = useState(text);

  useEffect(() => {
    axios
      .get(`https://sparkling-blue-drill.cyclic.app/Hardware`)
      .then((res) => setArr(res.data));
  }, [page, que]);

  const searchDirectory = () => {
    setQue(text);
    console.log(arr);
  };

  return (
    <>
      <Box id="hero" className="d-grid align-items-center" pt={"90px"}>
        <Box p={8}>
          <Flex alignItems="center" width={"80%"} m={"auto"} gap={"40px"}>
            <Box flex="1" pr={[0, 0, 0, 4]}>
              <Heading as={"h1"} size="lg" mb={6} textAlign={"left"}>
                Hardware Solutions
              </Heading>
              <Text mb={4} fontSize="19px" textAlign={"left"}>
              We specialize in comprehensive IT solutions and computer networking services, offering our clients expert guidance in network design and consultancy. Our primary aim is to assist businesses in aligning their short-term and long-term goals with their overall business objectives, acting as a catalyst to provide clear direction. Operating within an industry that constantly pushes the boundaries of knowledge and redefines the way we live, we continuously embrace innovative and effective methods to manage our operations.
              </Text>
              <Text mb={4} fontSize="19px" textAlign={"left"}>
              At our company, we strive to create an efficient and harmonious working environment where individual aspirations are seamlessly integrated with organizational objectives. We understand the importance of affordability for businesses of all sizes, and therefore, our products are designed to be cost-effective. Furthermore, our solutions are quick and easy to implement, functioning as standalone systems. By investing in our products, you can expect to achieve maximum returns in minimal time.
              </Text>
            </Box>
            <Box flex="1" pl={[0, 0, 0, 4]}>
              <Image
                src="https://d31ezp3r8jwmks.cloudfront.net/r5tjwba8e9sotkffaatlu4qh799w"
                className="img-fluid animated"
                alt="hero-img"
                borderRadius={"90px"}
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}>
        We are Dealing with all kind of Hardware equipment
      </h1>
      <div className="directorycontainer">
        {arr &&
          arr.map((ele) => (
            <div className="directorycontainer2" key={ele._id}>
              <img
                style={{ height: "300px", width: "400px" }}
                src={ele.image}
                alt={ele.title}
              />
              <h1>{ele.title}</h1>

              <Link to={"/contact"}>
                {" "}
                <button className="demobtn">Contact Us</button>{" "}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

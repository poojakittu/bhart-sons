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

export default function Software() {
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [que, setQue] = useState(text);

  useEffect(() => {
    axios
      .get(`https://sparkling-blue-drill.cyclic.app/Software`)
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
                Software Solutions
              </Heading>
              <Text mb={4} fontSize="19px" textAlign={"left"}>
                Bharat & Sons has established an outstanding reputation for
                delivering high-quality products, services, and solutions while
                upholding strong ethical standards, professionalism, and
                credibility in the software development field. Our dedicated
                team of experienced professionals, equipped with diverse skills
                and expertise, manages and promotes Bharat & Sons. Additionally,
                we have a vast network of associates and consultants supporting
                our operations.
              </Text>
              <Text mb={4} fontSize="19px" textAlign={"left"}>
                Our range of products is designed to be affordable and
                accessible for businesses of all sizes. They are user-friendly
                and can be easily implemented, functioning effectively as
                standalone solutions. By choosing our products, you can achieve
                maximum efficiency and productivity within a minimal timeframe.
                Our solutions streamline and automate operational processes,
                ensuring timely, accurate, and actionable information for your
                organization.
              </Text>
            </Box>
            <Box flex="1" pl={[0, 0, 0, 4]}>
              <Image
                src="https://www.ussdesigners.in/assets/img/sd1.gif"
                className="img-fluid animated"
                alt="hero-img"
                borderRadius={"90px"}
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      <div className="directorycontainer">
        {arr &&
          arr.map((ele) => (
            <div className="directorycontainer2" key={ele._id}>
              <Link to={`/dir/${ele._id}`}>
                <img
                  style={{ height: "300px", width: "400px" }}
                  src={ele.image}
                  alt={ele.title}
                />
                <h1>{ele.title}</h1>
              </Link>

              <Link to={"/contact"}>
                {" "}
                <button className="demobtn">Shedule a Demo</button>{" "}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

import { Box, Heading, Text } from "@chakra-ui/react";
import PlanSingleDiv from "./planSingleDiv";

function PriceBox({ type, state, handleState, rs, tx, data }) {
  return (
    <Box
      onClick={() => handleState(type)}
      border={type === state ? "2px solid #4ea819" : "none"}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      borderRadius="10px"
      key={Date.now()}
    >
      {type === "Cloud VPS Premium" ? (
        <Box w="100%" borderRadius="7px 7px 0px 0px" mb="20px" bg="#4ea819">
          <Heading fontSize="17px" p="10px" color="#fff">
            Best value
          </Heading>
        </Box>
      ) : null}
      <Box p="15px">
        <Box>
          <Heading fontSize="20px" mt="2px">
            {type}
          </Heading>
          <Heading mt="1px">{rs}</Heading>
          <Text mt="1px">user / month</Text>
        </Box>
        <Box mt="5px" fontSize={"14px"}>
          <Text color={"#475056"} fontWeight={"900"} textAlign={"left"}>
            {tx}
          </Text>
          <Box fontSize={"14px"}>
            {data.map((ele) => {
              return <PlanSingleDiv ele={ele} />;
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PriceBox;

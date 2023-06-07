import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import OfferCard from "./OfferCard";

function OfferSlider() {
  return (
    <Box mt={"15px"} p={"19px 25px"}>
      <Flex
        gap={"15px"}
        overflowY={"scroll"}
        overflowX={"scroll"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </Flex>
    </Box>
  );
}

export default OfferSlider;

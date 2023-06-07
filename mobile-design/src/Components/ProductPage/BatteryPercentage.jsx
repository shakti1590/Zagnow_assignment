import { Box, Image } from "@chakra-ui/react";
import React from "react";

function BatteryPercentage({ battery }) {
  return (
    <Box position={"absolute"} p={"1px"} right={5} top={6} border={"1px solid re"}>
      <Box
        position={"absolute"}
        border={"2px solid black"}
        p={"1px"}
        right={3}
        top={0}
        w={"20px"}
        h="10px"
        borderRadius={"2px"}
      >
        <Image src="wifi.png" position={"absolute"} top={"-2px"} right={8}/>
        <Box
          w={`${battery}%`}
          h={"100%"}
          background={"#F3A80C"}
          position={"relative"}
        ></Box>
      </Box>
      <Box
        border={"2px solid black"}
        position={"absolute"}
        borderRightRadius={"5px"}
        right={"8px"}
        top={"2px"}
        h={"6px"}
        w={"5px"}
      ></Box>
    </Box>
  );
}

export default BatteryPercentage;

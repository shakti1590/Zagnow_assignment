import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Time({ hours, minutes }) {
  return (
    <Box>
      <Text
        position={"absolute"}
        top={4}
        left={7}
        fontSize={"16px"}
        fontWeight={600}
      >
        {hours}:{minutes}
      </Text>
    </Box>
  );
}

export default Time;

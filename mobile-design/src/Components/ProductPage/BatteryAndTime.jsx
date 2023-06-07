import { Box } from "@chakra-ui/react";
import React from "react";
import BatteryPercentage from "./BatteryPercentage";
import Time from "./Time";

function BatteryAndTime({ minutes, hours, battery }) {
  return (
    <Box w={"100%"} top={5} position={"absolute"} border={"1px solid re"}>
      <Time hours={hours} minutes={minutes} />
      <BatteryPercentage battery={battery} />
    </Box>
  );
}

export default BatteryAndTime;

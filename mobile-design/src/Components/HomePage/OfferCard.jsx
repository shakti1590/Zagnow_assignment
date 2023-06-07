import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

function OfferCard() {
  return (
    <Box
      flexShrink={"0"}
      border={"1px solid re"}
      borderRadius={"15px"}
      width={"260px"}
      height={"160px"}
      padding={"10px"}
      backgroundImage={"bag_banner.png"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Text fontSize={"25px"} fontWeight={700} mt={"5px"}>
        50% Off
      </Text>
      <Text fontSize={"16px"} fontWeight={400} mt={"5px"}>
        On Everything today
      </Text>
      <Text fontSize={"11px"} color={"#666666"} fontWeight={600} mt={"5px"}>
        On Everything today
      </Text>
      <Button size={"xs"} color={"#fff"} bg={"#000000"} mt={"15px"}>
        Get Now
      </Button>
    </Box>
  );
}

export default OfferCard;

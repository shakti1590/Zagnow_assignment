import React from "react";
import { Text, Box, Button, Image } from "@chakra-ui/react";

function TopPart() {
  return (
    <Box>
      <Box
        border={"1px solid re"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text fontSize={"24px"} fontWeight={700}>
            Orders
          </Text>
        </Box>
        <Box gap={"5px"}>
          <Button
            bg="#1B59F8"
            color="#fff"
            gap={"8px"}
            _hover={{ background: "#1B59F8" }}
          >
            {" "}
            <Image src="add_order_icon.png" w={"15%"} />
            <Text>Add Order</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TopPart;

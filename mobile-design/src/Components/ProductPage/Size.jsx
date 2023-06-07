import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

function Size({ size, setSize }) {
  const sizes = ["S", "M", "L", "Xl", "XXL"];
  return (
    <Box my={"15px"}>
      <Text>Size</Text>
      <Box
        border={"1px solid re"}
        display={"flex"}
        p={0}
        mt={"8px"}
        gap={"10px"}
      >
        {sizes.map((item) => {
          return (
            <Button key={item}
              border="1px solid #DDDDDD"
              size={"md"}
              p={0}
              _focus={{bg:"black",borderRadius:"50%"}}
              bg={size === item ? "black" : "white"}
              color={size !== item ? "black" : "white"}
              borderRadius={"50%"}
              onClick={() => setSize(item)}
            >
              <Text fontSize={"11px"}>{item}</Text>
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}

export default Size;

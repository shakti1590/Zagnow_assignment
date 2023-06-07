import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";
import { greyColor } from "../../Utils";
function TitleSection({  quantity, setQuantity }) {
  return (
    <Box
      className="top-part"
      border={"1px solid blac"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Box className="title">
        <Text fontSize={"18px"} fontWeight={600}>
          Roller Rabbit
        </Text>
        <Text fontSize={"11px"} color={greyColor} fontWeight={400} my={"4px"}>
          Vado Odelle Dress
        </Text>

        {/* rating section */}
        <Rating n={5} review={320} />
      </Box>

      {/* increment and decrement items here */}
      <Box
        className="add_buttons"
        border={"1px solid re"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"10px"}
      >
        <Box
          display={"flex"}
          border={"1px solid re"}
          borderRadius={"30px"}
          bg={"#EEEEEE"}
          justifyContent={"center"}
        >
          <Button
            bg={"#EEEEEE"}
            size={"xs"}
            borderLeftRadius={"30px"}
            isDisabled={quantity === 1}
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            {" "}
            -
          </Button>
          <Button bg={"#EEEEEE"} size={"xs"}>
            {quantity}
          </Button>
          <Button
            bg={"#EEEEEE"}
            size={"xs"}
            borderRightRadius={"30px"}
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </Button>
        </Box>
        <Text fontSize={"11px"} fontWeight={600} textAlign={"center"}>
          Available in Stock
        </Text>
      </Box>
    </Box>
  );
}

export default TitleSection;

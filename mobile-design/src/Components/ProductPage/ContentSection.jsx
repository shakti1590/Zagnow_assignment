import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TitleSection from "./TitleSection";
import Size from "./Size";
import { useNavigate } from "react-router-dom";

function ContentSection() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S");
  const [price, setPrice] = useState(198.0);
  const navigate = useNavigate();
  return (
    <Box
      border={"1px solid re"}
      borderRadius={"30px 30px 0px 0px"}
      bg={"#fff"}
      mt={"-15px"}
      zIndex={11}
      w={"100%"}
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
      pb={"30px"}
    >
      <Box position={"absolute"} width={"90%"} top={"10"}>
        {/* title section */}
        <TitleSection quantity={quantity} setQuantity={setQuantity} />
        {/* Sizes */}
        <Size size={size} setSize={setSize} />
        <Box className="Description">
          <Text fontSize={"16px"} fontWeight={600}>
            Description
          </Text>
          <Text
            fontSize={"11px"}
            fontWeight={400}
            mt={"10px"}
            color={"#666666"}
            lineHeight={"16px"}
          >
            Get a little lift from these Sam Edelman sandals featuring ruched
            straps and leather lace-up ties, while a braided jute sole makes a
            fresh statement for summer.
          </Text>
        </Box>
        <Box
          className="PriceAndButton"
          my={"18px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Text fontSize={"9px"} color={"#666666"} fontWeight={400}>
              Total Price
            </Text>
            <Text fontSize={"18px"} fontWeight={700}>
              ${+price * +quantity}.00
            </Text>
          </Box>
          <Box>
            <Button
              size={"lg"}
              borderRadius={"25px"}
              padding={"8px 38px"}
              bg={"black"}
              color={"#fff"}
              display={"flex"}
              gap={"8px"}
              onClick={() => navigate("/payment")}
            >
              <Image src="cartIcon3.png" />
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentSection;

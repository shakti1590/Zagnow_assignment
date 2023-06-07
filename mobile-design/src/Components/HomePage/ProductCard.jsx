import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { greyColor } from "../../Utils";
import { useNavigate } from "react-router-dom";

function ProductCard({ title, desc, image, price }) {
  const navigate = useNavigate();
  return (
    <Box
      position={"relative"}
      textAlign={"center"}
      border={"1px solid re"}
      onClick={() => navigate("/product")}
    >
      {/* <Box> */}
      <Image src={image} borderRadius={"15px"} w={"100%"} />
      <Image src="love.png" position={"absolute"} top={3} right={3}/>
      {/* </Box> */}
      <Text mt={"8px"} fontSize={"14"} fontWeight={600}>
        {title}
      </Text>
      <Text fontSize={"11"} color={greyColor} fontWeight={400}>
        {desc}
      </Text>
      <Text fontSize={"14"} fontWeight={600}>
        {price}
      </Text>
    </Box>
  );
}

export default ProductCard;

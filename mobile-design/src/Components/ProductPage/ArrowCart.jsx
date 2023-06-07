import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
function ArrowCart() {
  const naviagte = useNavigate();
  return (
    <Box
      w={"100%"}
      top={20}
      position={"absolute"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={"0 6%"}
    >
      <Box
        width={"35px"}
        height={"35px"}
        bg={"black"}
        borderRadius={"50%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={() => {
          naviagte("/");
        }}
      >
        <Image src="arrow.png" />
      </Box>
      <Box
        width={"30px"}
        height={"30px"}
        bg={"#fff"}
        borderRadius={"50%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src="cartIcon2.png" />
      </Box>
    </Box>
  );
}

export default ArrowCart;

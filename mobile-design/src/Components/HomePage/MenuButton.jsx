import { Box,Image } from "@chakra-ui/react";
import React from "react";

function MenuButton() {
  return (
    <Box
      borderRadius={"50%"}
      w={"35px"}
      height={"35px"}
      border={"1px solid re"}
      bg={"#000000"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image width={"50%"} src="menu_icon.png" />
    </Box>
  );
}

export default MenuButton;


{/*
  

*/}
import { Box, Image } from "@chakra-ui/react";
import React from "react";

function WishList() {
  return (
    <Box
      position={"absolute"}
      bottom={10}
      width={"100%"}
      display={"flex"}
      justifyContent={"flex-end"}
      pr={"6%"}
    >
      <Box
        width={"30px"}
        height={"30px"}
        bg={"#fff"}
        borderRadius={"50%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src="wishlist.png" />
      </Box>
    </Box>
  );
}

export default WishList;

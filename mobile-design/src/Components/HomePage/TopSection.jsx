import React from "react";
import { Box } from "@chakra-ui/react";
import MenuButton from "./MenuButton";
import AvatarSection from "./AvatarSection";
function TopSection() {
  return (
    <Box
      border={"1px solid blac"}
      
      p={"53px 25px 0px 25px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <MenuButton />
      <AvatarSection />
    </Box>
  );
}

export default TopSection;

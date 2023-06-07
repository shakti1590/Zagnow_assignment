import { Box, Image } from "@chakra-ui/react";
import React from "react";

function AvatarSection() {
  return (
    <Box
      borderRadius={"50%"}
      w={"56px"}
      height={"56px"}
      border={"1px solid re"}
      bg={"#dddddd"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* circular div  which has a png of avatar*/}
      <Image src="avatar.png" />
    </Box>
  );
}

export default AvatarSection;

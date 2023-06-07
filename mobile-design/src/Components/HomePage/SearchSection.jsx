import { Box, Input, InputGroup, InputLeftElement,Image } from "@chakra-ui/react";
import React from "react";
import MenuButton from "./MenuButton";
import { FiSearch } from "react-icons/fi";
function SearchSection() {
  return (
    <Box
      border={"1px solid re"}
      display={"flex"}
      gap={"5px"}
      mt={"19px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"0px 25px"}
    >
      <InputGroup
        border={"1px solid re"}
        bg={"#F3F4F5"}
        borderRadius={"30px"}
        w={"85%"}
      >
        <InputLeftElement pointerEvents="none">
          {/* search icon imported from react-icons */}
          <FiSearch />
        </InputLeftElement>
        <Input
          variant="filled"
          type="text"
          borderRadius={"30px"}
          placeholder="Search..."
          border={"none"}
        />
      </InputGroup>
      
      <Box
        borderRadius={"50%"}
        w={"50px"}
        height={"50px"}
        border={"1px solid re"}
        bg={"#000000"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image width={"50%"} src="menu_icon2.png" />
      </Box>
    </Box>
  );
}

export default SearchSection;

import React from "react";
import { Text, Button, Th, Menu, MenuButton,Box,Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function OptionsTag() {
  return (
    <Th
      textAlign={"center"}
      display={"flex"}
      gap={"4px"}
      justifyContent={"center"}
    >
      <Menu>
        <MenuButton
          _active={{ bg: "#f7f7fa" }}
          _hover={{ bg: "#f7f7fa" }}
          bg={"#f7f7fa"}
          p={"0 6px"}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          <Text fontSize={"14px"} color={"#4F5E74"} fontWeight={600}>
            Options
          </Text>
        </MenuButton>
        <Box display={"flex"} alignItems={"center"}>
          <Image src="up_down_arrow.png" />
        </Box>
      </Menu>
    </Th>
  );
}

export default OptionsTag;

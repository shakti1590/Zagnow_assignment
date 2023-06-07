import React from "react";
import { Text, Button, Th, Menu, MenuButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function PlacedOnTag() {
  return (
    <Th textAlign={"center"}>
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
            Placed on
          </Text>
        </MenuButton>
      </Menu>
    </Th>
  );
}

export default PlacedOnTag;

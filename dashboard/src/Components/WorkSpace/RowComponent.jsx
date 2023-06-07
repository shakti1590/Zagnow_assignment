import React from "react";
import { Tr, Image, Text, Td, useDisclosure, Box } from "@chakra-ui/react";
import ModalComponent from "./ModalComponent";
function RowComponent({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (val) => {
    item.title = val;
  };

  return (
    <Tr>
      <Td>
        <Box display={"flex"} gap={"17px"}>
          <Box display={"flex"} alignItems={"center"} gap={"16px"}>
            <Box>
              <Image src="radio_icon.png" />
            </Box>
            <Box>
              <Image src={item?.imageUrl} />
            </Box>
          </Box>
          <Box>
            <Text fontSize={"14px"} fontWeight={600}>
              {item?.title}
            </Text>
            <Text
              fontSize={"12px"}
              fontWeight={400}
              color={"rgba(0, 0, 0, 0.5);"}
            >
              {item?.desc}
            </Text>
          </Box>
        </Box>
      </Td>
      <Td
        textAlign={"center"}
        fontSize={"14px"}
        fontWeight={500}
        color={"#70768C"}
      >
        {item?.activeOrders}
      </Td>
      <Td
        textAlign={"center"}
        fontSize={"14px"}
        fontWeight={500}
        color={"#70768C"}
      >
        {item?.amount}
      </Td>
      <Td
        textAlign={"center"}
        fontSize={"14px"}
        fontWeight={500}
        color={"#70768C"}
      >
        {item?.orderDate}
      </Td>
      <Td border={"1px solid re"} onClick={onOpen} cursor={"pointer"}>
        <ModalComponent
          existing_title={item?.title}
          id={item?.id}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          handleChange={handleChange}
        />
      </Td>
    </Tr>
  );
}

export default RowComponent;

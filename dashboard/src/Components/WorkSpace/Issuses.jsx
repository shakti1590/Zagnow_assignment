import React from "react";
import {
  Text,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  TableContainer,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
function Issuses() {
  return (
    <AccordionItem
      border={"1px solid #EFF0F6"}
      borderRadius={"20px"}
      mt={"17px"}
      bg={"#fff"}
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton mt={"28px"} _hover={{ background: "#fff" }}>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"17px"} fontWeight={600}>
                  Issues{" "}
                  <span
                    style={{
                      color: "rgba(47, 47, 47, 0.4)",
                      marginLeft: "4px",
                    }}
                  >
                    {" "}
                    21
                  </span>{" "}
                </Text>
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel></AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default Issuses;

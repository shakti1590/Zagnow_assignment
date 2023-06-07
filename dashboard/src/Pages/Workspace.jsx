import React from "react";
import Sidebar from "../Components/Sidebar";
import { Box, Accordion } from "@chakra-ui/react";
import TopPart from "../Components/WorkSpace/TopPart";
import ConfirmOrder from "../Components/WorkSpace/ConfirmOrder";
import Issuses from "../Components/WorkSpace/Issuses";

function Workspace() {
  return (
    <Sidebar>
      <TopPart />
      <Box h={"1px"} background={"rgba(0, 0, 0, 0.1)"} mt={"20px"}></Box>
      <Accordion
        bg={"#f9f9f9"}
        defaultIndex={[0]}
        allowMultiple
        border={"1px solid re"}
        borderRadius={"20px"}
        my={"20px"}
      >
        <ConfirmOrder />

        <Issuses />
      </Accordion>
    </Sidebar>
  );
}

export default Workspace;

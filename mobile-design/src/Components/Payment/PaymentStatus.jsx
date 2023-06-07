import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
function PaymentStatus({ load }) {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      {load ? (
        <Box textAlign={"center"}>
          <Text fontWeight={700}>Payment is processing...</Text>
          <Text fontSize={"xs"}>Please wait, do not close the screen</Text>
        </Box>
      ) : (
        <Box textAlign={"center"}>
          <Box w={"40px"} height={"40px"} m={"auto"}>
            <Image src="order_done.png" />
          </Box>
          <Text fontWeight={700}>Payment received!</Text>
          <Text fontSize={"xs"}>
            Your order is now in the way, Please check your email for the
            receipt
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default PaymentStatus;

import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import PaymentStatus from "../Components/Payment/PaymentStatus";
import PaymentForm from "../Components/Payment/PaymentForm";
function PaymentPage() {
  const [load, setLoad] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  return (
    <Box
      display={"grid"}
      placeItems={"center"}
      w={"100%"}
      h={"100vh"}
      bg={"#f5f5f5"}
    >
      {/* conditional rendering of payment status and form  */}
      <Box border={"1px solid #fdf3f9"} p={"20px"} w={"70%"} bg={"#fdf3f9"}>
        {showLoader ? (
          <PaymentStatus load={load} />
        ) : (
          <PaymentForm
            load={load}
            setLoad={setLoad}
            showLoader={showLoader}
            setShowLoader={setShowLoader}
          />
        )}
      </Box>
    </Box>
  );
}

export default PaymentPage;

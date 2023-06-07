import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { RiMastercardFill } from "react-icons/ri";
import { AiFillQuestionCircle, AiTwotoneLock } from "react-icons/ai";
function PaymentForm({ load, setLoad, setShowLoader, showLoader }) {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");
  const toast = useToast();

  function toastMsg(msg, status) {
    toast({
      title: msg,
      position: "top",
      status: status,
      duration: 2000,
      isClosable: true,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && card && date && code) {
      if (card.length === 16 && /^\d+$/.test(card)) {
        if (date.length === 5) {
          if (date.includes("/")) {
            let newDate = date.split("/");

            if (
              newDate[0].length === 2 &&
              newDate[1].length === 2 &&
              /^\d+$/.test(newDate[0]) &&
              /^\d+$/.test(newDate[1])
            ) {
              if (code.length === 3 && /^\d+$/.test(code)) {
                setShowLoader(true);
                setLoad(true);
                setInterval(() => {
                  setLoad(false);
                }, 2000);
                return;
              } else {
                toastMsg("enter correct code", "warning");
              }
            } else {
              toastMsg("enter correct date", "warning");
            }
          } else {
            toastMsg("format should be mm/yy", "warning");
          }
        } else {
          toastMsg("format should be mm/yy", "warning");
        }
      } else {
        toastMsg("Please Enter Correct Card Number", "warning");
      }
    } else {
      toastMsg("Please Enter all Details", "warning");
    }
  };

  return (
    <form>
      <Text fontSize={"12px"} m="12px 0px 8px 0px">
        Card number
      </Text>
      <InputGroup>
        <InputRightElement pointerEvents="none" w={"20px"} mt={"-8px"}>
          <RiMastercardFill />
        </InputRightElement>
        <Input
          bg={"#fff"}
          type="tel"
          borderRadius={"4px"}
          required
          minLength={16}
          maxLength={16}
          size="xs"
          placeholder="xxxx xxxx xxxx xxxx"
          border={"1px solid black"}
          _focus={{ border: "1px solid black", boxShadow: "none" }}
          onChange={(e) => setCard(e.target.value)}
        />
      </InputGroup>
      <Text fontSize={"12px"} m="12px 0px 8px 0px">
        Name on card
      </Text>
      <Input
        bg={"#fff"}
        size="xs"
        type="text"
        placeholder="John doe"
        borderRadius={"4px"}
        border={"1px solid black"}
        _focus={{ border: "1px solid black", boxShadow: "none" }}
        onChange={(e) => setName(e.target.value)}
      />
      <Box display={"flex"} gap={"15px"}>
        <Box>
          <Text fontSize={"12px"} m="12px 0px 8px 0px">
            Expiration date
          </Text>
          <Input
            bg={"#fff"}
            size="xs"
            borderRadius={"4px"}
            type="text"
            placeholder="05/25"
            border={"1px solid black"}
            _focus={{ border: "1px solid black", boxShadow: "none" }}
            onChange={(e) => setDate(e.target.value)}
          />
        </Box>
        <Box>
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <Text fontSize={"12px"} m="12px 0px 8px 0px">
              Security code
            </Text>
            <AiFillQuestionCircle />
          </Box>
          <Input
            bg={"#fff"}
            size="xs"
            type="text"
            borderRadius={"4px"}
            placeholder="123"
            border={"1px solid black"}
            _focus={{ border: "1px solid black", boxShadow: "none" }}
            onChange={(e) => setCode(e.target.value)}
          />
        </Box>
      </Box>
      <Button
        size={"xs"}
        mt={"12px"}
        p={"15px"}
        gap={"5px"}
        bg={"#bf477f"}
        color={"#fff"}
        w={"100%"}
        onClick={handleSubmit}
      >
        <AiTwotoneLock />
        Pay Now
      </Button>
    </form>
  );
}

export default PaymentForm;

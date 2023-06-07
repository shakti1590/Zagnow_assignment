import React, { useEffect, useState } from "react";
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
  Spinner,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import RowComponent from "./RowComponent";
import SearchTag from "./SearchTag";
import ActiveOrderTag from "./ActiveOrderTag";
import AmountTag from "./AmountTag";
import PlacedOnTag from "./PlacedOnTag";
import OptionsTag from "./OptionsTag";

function getData(status, amount) {
  let baseurl = `https://zagnow-server.onrender.com/products/`;
  if (status && amount) {
    baseurl += `?status=${status}&_sort=amount&_order=${amount}`;
  } else if (amount) {
    baseurl += `?_sort=amount&_order=${amount}`;
  } else if (status) {
    baseurl += `?status=${status}`;
  }

  return fetch(baseurl)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => err);
}

function ConfirmOrder() {
  const [isLoading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    setLoading(true);
    getData(status, amount).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [status, amount]);

  return (
    <AccordionItem
      border={"1px solid #EFF0F6"}
      borderRadius={"20px"}
      bg={"#fff"}
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton mt={"28px"} _hover={{ background: "#fff" }}>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"17px"} fontWeight={600}>
                  Confirmed{" "}
                  <span
                    style={{
                      color: "rgba(47, 47, 47, 0.4)",
                      marginLeft: "4px",
                    }}
                  >
                    {" "}
                    258
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
          <AccordionPanel>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <SearchTag />
                    <ActiveOrderTag setStatus={setStatus} />
                    <AmountTag setAmount={setAmount} />
                    <PlacedOnTag />
                    <OptionsTag />
                  </Tr>
                </Thead>
                <Tbody>
                  {isLoading ? (
                    <Box
                      border={"1px solid re"}
                      h="200px"
                      w="200px"
                      m={"auto"}
                      position={"relative"}
                      left={"80%"}
                      display={"grid"}
                      placeItems={"center"}
                    >
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    </Box>
                  ) : (
                    products.length > 0 &&
                    products?.map((item) => {
                      return <RowComponent key={item.id} item={item} />;
                    })
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

export default ConfirmOrder;

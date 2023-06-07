import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function Rating({ n, review }) {
  if (n > 5) {
    n = 5;
  }
  const arr = new Array(n).fill(0);
  return (
    <Box
      display={"flex"}
      gap={"4px"}
      alignItems={"center"}
      justifyContent={"start"}
      border={"1px solid re"}
    >
      {arr.map((item) => {
        return <Image key={`${item} ${Math.random()}`} src="star.png" />;
      })}
      <Text ml={"3px"} fontSize={"11px"} fontWeight={400}>
        {review} (Review)
      </Text>
    </Box>
  );
}

export default Rating;

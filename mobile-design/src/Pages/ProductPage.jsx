import { Box } from "@chakra-ui/react";
import React from "react";
import ImageSection from "../Components/ProductPage/ImageSection";
import ContentSection from "../Components/ProductPage/ContentSection";

function ProductPage() {
  return (
    <Box>
      <ImageSection />
      <ContentSection/>
    </Box>
  );
}

export default ProductPage;

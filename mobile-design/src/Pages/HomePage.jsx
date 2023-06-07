import { Box } from "@chakra-ui/react";
import React from "react";
import TopSection from "../Components/HomePage/TopSection";
import TitleSection from "../Components/HomePage/TitleSection";
import SearchSection from "../Components/HomePage/SearchSection";
import Navbar from "../Components/HomePage/Navbar";
import OfferSlider from "../Components/HomePage/OfferSlider";
import NewArrivals from "../Components/HomePage/NewArrivals";

function HomePage() {
  return (
    <Box>
      <TopSection />
      <TitleSection />
      <SearchSection />
      <OfferSlider/>
      <NewArrivals/>
      <Navbar />
    </Box>
  );
}

export default HomePage;

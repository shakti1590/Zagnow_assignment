import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import PaymentPage from "../Pages/PaymentPage";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default AllRoutes;

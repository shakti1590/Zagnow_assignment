import React from "react";
import { Route, Routes } from "react-router-dom";

import Settings from "../Pages/Settings";
import Workspace from "../Pages/Workspace";
import Reports from "../Pages/Reports";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Reports />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/setting" element={<Settings />} />
    </Routes>
  );
}

export default AllRoutes;

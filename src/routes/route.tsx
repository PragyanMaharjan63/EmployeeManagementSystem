import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";

import Dashboard from "../pages/dashboardManager";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

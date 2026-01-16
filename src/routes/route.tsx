import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";

import Dashboard from "../pages/dashboardManager";
import EmployeeDashboard from "../pages/employeeDashbaord";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/manager" element={<Dashboard />} />
      <Route path="/employee/:id" element={<EmployeeDashboard />} />
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AllNotifications from "../pages/AllNotifications";
import PriorityNotifications from "../pages/PriorityNotifications";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/notifications" element={<AllNotifications />} />
      <Route path="/priority" element={<PriorityNotifications />} />
    </Routes>
  );
}

export default AppRoutes;
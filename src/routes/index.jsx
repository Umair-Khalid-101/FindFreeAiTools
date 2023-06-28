import { Route, Routes } from "react-router-dom";

import {
  HomePage,
  Login,
  EmailLogin,
  SignUp,
  AdminDashboard,
  AddTool,
  CategorySearch,
  Search,
} from "../pages";

const AppNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/emaillogin" element={<EmailLogin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/tools/:category" element={<CategorySearch />} />
      <Route path="/search" element={<Search />} />

      {/* Admin Routes */}
      <Route path="/dashboard" element={<AdminDashboard />}>
        <Route path="addtool" element={<AddTool />} />
      </Route>
      {/* Admin Routes */}
    </Routes>
  );
};

export default AppNavigation;

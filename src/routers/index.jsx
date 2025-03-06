import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Signin , Signup , EmailConfirm} from "../pages/login";


const AppRoutes = () => {
  return (
      <Routes>
        {/* Trang chủ */}
        <Route path="/" >
          <Route index />
          <Route path="dashboard" />
          <Route path="login" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="email-confirm" element={<EmailConfirm />} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Walkthrough from "../pages/walkthrough/index.jsx";
import SplashScreen from "../pages/walkthrough/SplashScreen";

const AppRoutes = () => {
  return (
      <Routes>
        {/* Trang chủ */}
        <Route path="/"  >
          <Route index element={<SplashScreen />}/>
          <Route path="dashboard" />
          <Route path="walkthrough" element={<Walkthrough />} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;

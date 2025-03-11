import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/home_screen"
import LoadingPlaceholder from "../pages/home_screen/LoadingPlaceholder";

const AppRoutes = () => {
  return (

      <Routes>
        {/* Trang chủ */}
        <Route path="/" >
          <Route index path="/" element={<LoadingPlaceholder />}/>
          <Route path="/homescreen" element={<HomeScreen />}/>
        </Route>
      </Routes>

  );
};

export default AppRoutes;

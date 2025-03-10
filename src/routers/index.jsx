import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/home_screen"

const AppRoutes = () => {
  return (

      <Routes>
        {/* Trang chủ */}
        <Route path="/" >
          <Route index  />
          <Route path="/homescreen" element={<HomeScreen />}/>
        </Route>
      </Routes>

  );
};

export default AppRoutes;

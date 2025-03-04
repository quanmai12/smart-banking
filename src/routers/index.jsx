import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" >
          <Route index  />
          <Route path="dashboard" />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

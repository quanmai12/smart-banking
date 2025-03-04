import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import LegalInfoScreen from "./components/LegalInfoScreen";
import HomeAddressScreen from "./components/HomeAddressScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/legal-info" element={<LegalInfoScreen />} />
        <Route path="/home-address" element={<HomeAddressScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
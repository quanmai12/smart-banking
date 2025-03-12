import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeAddressScreen, GetStarter, LegalInfoScreen } from "../pages/legal_information";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Trang chủ */}

            <Route path="/" >
                <Route path="/get-starter" element={<GetStarter />} />
                <Route path="/legal-info" element={<LegalInfoScreen />} />
                <Route path="/home-address" element={<HomeAddressScreen />} />
            </Route>
        </Routes>
    );
};
export default AppRoutes;

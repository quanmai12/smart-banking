import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VerifySplash , VerifyType , CameraAccess, TakePhoto} from "../pages/verify_identity";

const AppRoutes = () => {
  return (
      <Routes>
        {/* Trang chủ */}
        <Route path="/" >
          <Route path="verify-splash" element={<VerifySplash />}/>
          <Route path="verify-type" element={<VerifyType />}/>
          <Route path="camera-access" element={<CameraAccess />}/>
          <Route path="take-photo" element={<TakePhoto />}/>
        </Route>
      </Routes>
  );
};

export default AppRoutes;

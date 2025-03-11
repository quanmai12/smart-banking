import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome, AccountType, SelectCountry, EnterPhone, VerifyCode, PasscodeSetup, PhoneVerified, CreatePasscode} from "../pages/account_setup";
import Walkthrough from "../pages/walkthrough/index.jsx";
import SplashScreen from "../pages/walkthrough/SplashScreen";
import {Signin , Signup , EmailConfirm} from "../pages/login";
import HomeScreen from "../pages/home_screen/";
import LoadingPlaceholder from "../pages/home_screen/LoadingPlaceholder";


const AppRoutes = () => {
  return (
      <Routes>
        {/* Trang chủ */}
            
        <Route path="/" >
          <Route index element={<SplashScreen />}/>
          <Route path="walkthrough" element={<Walkthrough />} />
          <Route path="dashboard" />
          <Route path="login" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
            <Route index path="/loading" element={<LoadingPlaceholder />}/>
          <Route path="/homescreen" element={<HomeScreen />} />
          <Route path="email-confirm" element={<EmailConfirm />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="account-type" element={<AccountType />} />
            <Route path="select-country" element={<SelectCountry />} /> 
            <Route path="enter-phone" element={<EnterPhone />} /> 
            <Route path="verify-code" element={<VerifyCode />} />
            <Route path="phone-verified" element={<PhoneVerified />} />
            <Route path="create-passcode" element={<CreatePasscode />} />
            <Route path="passcode-setup" element={<PasscodeSetup />} />
        </Route>
      </Routes>
  );
};
export default AppRoutes;


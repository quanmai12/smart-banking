import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import AccountType from "./pages/AccountType";
import SelectCountry from "./pages/SelectCountry";
import EnterPhone from "./pages/EnterPhone";  // Sửa từ ConfirmCountry thành EnterPhone
import VerifyCode from "./pages/VerifyCode";
import PhoneVerified from "./pages/PhoneVerified";
import CreatePasscode from "./pages/CreatePasscode";
import PasscodeSetup from "./pages/PasscodeSetup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/select-country" element={<SelectCountry />} /> 
        <Route path="/enter-phone" element={<EnterPhone />} /> {/* Chuyển từ /confirm-country thành /enter-phone */}
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/phone-verified" element={<PhoneVerified />} />
        <Route path="/create-passcode" element={<CreatePasscode />} />
        <Route path="/passcode-setup" element={<PasscodeSetup />} />
      </Routes>
    </Router>
  );
}

export default App;

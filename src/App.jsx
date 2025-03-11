import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome, AccountType, SelectCountry, EnterPhone, VerifyCode, PasscodeSetup, PhoneVerified, CreatePasscode} from "./pages/account_setup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/select-country" element={<SelectCountry />} /> 
        <Route path="/enter-phone" element={<EnterPhone />} /> 
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/phone-verified" element={<PhoneVerified />} />
        <Route path="/create-passcode" element={<CreatePasscode />} />
        <Route path="/passcode-setup" element={<PasscodeSetup />} />
      </Routes>
    </Router>
  );
}

export default App;

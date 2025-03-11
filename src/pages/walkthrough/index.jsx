import Onboarding from "./Onboarding";
import Wrapper from "../../components/Wrapper";
import SwiperImage from "./SwiperImage";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

const Walkthrough = () => {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="mt-4">
        <Onboarding />
        <div className="w-screen mx-[-16px]">
          <SwiperImage />
        </div>
        <div className="w-full max-w-md text-center absolute bottom-0 left-1/2 -translate-x-1/2 px-4">
          <Button onClick={() => navigate("/signup")} text="Sign Up" className="bg-primary" /> 
          <Button onClick={() => navigate("/login")} text="Log In" className="bg-neutral text-primary"/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Walkthrough;

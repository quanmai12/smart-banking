import Onboarding from "./Onboarding";
import Wrapper from "../../components/Wrapper";
import SwiperImage from "./SwiperImage";
import Button from "../../components/button/button";

const Walkthrough = () => {
  return (
    <Wrapper>
      <div className="mt-4">
        <Onboarding />
        <div className="w-screen mx-[-16px]">
          <SwiperImage />
        </div>
        <div className="mt-auto">
          <Button text="Sign Up" className="bg-primary" /> 
          <Button text="Log In" className="bg-neutral text-primary"/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Walkthrough;

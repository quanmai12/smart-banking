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
        <div className="w-full max-w-md text-center pb-5 absolute bottom-5 left-1/2 -translate-x-1/2 px-4">
          <Button text="Sign Up" className="bg-primary" /> 
          <Button text="Log In" className="bg-neutral text-primary"/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Walkthrough;

import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import ProgressAndBackBar from "./ProgressAndBackBar";
import Wrapper from "../../components/Wrapper";

const Signin = () => {

    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [keyboardOffset, setKeyboardOffset] = useState(0);

    const validateEmail = (value) => {
        setEmail(value);
        setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.visualViewport) {
                const keyboardHeight = window.innerHeight - window.visualViewport.height;
                const isKeyboardOpen = keyboardHeight > 100;
                setKeyboardVisible(isKeyboardOpen);
                setKeyboardOffset(isKeyboardOpen ? keyboardHeight : 0);
            }
        };

        window.visualViewport?.addEventListener("resize", handleResize);
        return () => window.visualViewport?.removeEventListener("resize", handleResize);
    }, []);
    
    return (
        <Wrapper>
            <div className="mt-4">
                <ProgressAndBackBar onClick={() => navigate("/walkthrough")}/>
                <div >
                    <h2 className="mb-2 text-left text-[34px] sm:text-5xl font-semibold leading-tight max-w-xs sm:max-w-sm ">Login</h2>
                    <p className="text-sm text-gray-500 whitespace-nowrap">Enter the email address you use to sign in to SmartBank.</p>
                </div>
                <div className="flex flex-col items-center rounded-lg mt-10">
                    {/* Input Email */}
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => validateEmail(e.target.value)}
                    />

                    {/* Sign Up Text */}
                    <p className="text-[#265565] text-sm font-bold">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-[#2791B5] font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>

                <div 
                    className="absolute left-0 w-full transition-all duration-300"
                    style={{
                        bottom: isKeyboardVisible ? `${keyboardOffset}px` : "32px"
                    }} 
                >
                    <Button text="Continue" className={`absolute bottom-0 w-full
                    ${isValid ? "bg-primary text-white" : "bg-[#E7EAEB] text-[#B8C5CA]"}`}
                        isValid={isValid}
                        onClick={() => navigate("/email-confirm")}
                    />
                </div>
            </div>
        </Wrapper>

    )
}

export default Signin;
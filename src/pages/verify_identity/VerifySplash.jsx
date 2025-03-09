import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import { useLocation } from "react-router-dom";

export default function VerifySplash() {

    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state?.name || "Unknown User";

    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#265565] via-[#288FB1] to-[#265565]">
            {/* Back */}
            <button
                className="absolute top-[30px] left-[-15px]  p-[15px] gap-[10px] text-white z-50"
                onClick={() => navigate("/login")}
            >
                <img src="/image/Backarrow-white.svg" alt="" className="h-14 w-16"/>
            </button>

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/image/verify-identity.png"
                    alt="verify img"
                    className="w-full max-w-[220px] min-w-[190px] h-auto object-contain mx-auto fixed top-[200px] left-1/2 -translate-x-1/3 z-10"
                />
                <img
                    src="/image/verify-shadow.png"
                    alt="shadow"
                    className="w-full max-w-[150px] min-w-[80px] h-auto object-contain mx-auto fixed top-[500px] left-1/2 -translate-x-1/2"
                />
                <img
                    src="/image/hightlight-bg.png"
                    alt="shadow"
                    className="w-full max-w-[600px] min-w-[300px] h-auto object-contain mx-auto fixed top-[10px] left-1/2 -translate-x-1/2 z-0"
                />
                <img
                    src="/image/hightlight-bg.png"
                    alt="shadow"
                    className="w-full max-w-[500px] min-w-[300px] h-auto object-contain mx-auto fixed top-[-150px] left-1/2 -translate-x-1/4 z-0"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-sm px-4 pt-7 text-center mt-[33rem]">
                <h1 className="text-3xl font-semibold text-white">
                    {name}, we’ll need to verify your identity 
                </h1>
                <p className="mt-3 mb-8 text-[#F9FBF9] text-sm opacity-75">
                    We’re required by law to verify your identity before you can spend with your card or send money. 
                </p>

                <Button 
                    text="Continue" 
                    className="text-[#134555] bg-secondary"
                    onClick={() => navigate("/verify-type")}    
                />

                <Button text="Not right now" className="bg-[#265565] text-white " />
                    
            </div>
        </div>
    );
}

  
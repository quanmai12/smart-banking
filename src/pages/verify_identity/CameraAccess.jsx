import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import { useLocation } from "react-router-dom";

export default function CameraAccess() {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state?.name || "Unknown User";

    return (
        <div className="relative flex flex-col items-center justify-between h-screen bg-gradient-to-b from-[#265565] via-[#288FB1] to-[#265565] px-4">
            {/* Back button */}
            <button
                className="absolute top-6 left-4  text-white z-50"
                onClick={() => navigate("/login")}
            >
                <img src="/image/x.svg" alt="" className="h-10 w-10" />
            </button>

            {/* Content */}
            <div className="relative z-10 w-full max-w-sm  mt-16">
                <h1 className="text-[30px] md:text-[32px] font-semibold text-white leading-tight">
                    We’ll need to access <br /> your camera before continuing.
                </h1>
                <p className="mt-3 text-[#F9FBF9] text-sm opacity-75">
                    You’ll need to submit a selfie and a photo of the  <br /> document before continuing.
                    The photos will be used to verify your identity.
                </p>
            </div>

            {/* Background Images */}
            <div className="relative w-full flex justify-center ">
                <img
                    src="/image/camera.png"
                    alt="verify img"
                    className="w-50 md:w-52 h-auto object-contain z-10 relative top-[-30px] z-10"
                />
                {/* Artificial Shadow */}
    <div className="bg-black opacity-50 blur-md rounded-full h-[20px] absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[140px]  h-[20px] z-0"></div>
                <img
                    src="/image/highlight-cam.png"
                    alt="hihtlight"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-auto object-contain z-0"
                />
            </div>

            {/* Buttons - Luôn cố định cách đáy 20px */}
            <div className="w-full max-w-sm text-center pb-5 ">
                <Button 
                    text="Allow camera access" 
                    className="text-[#134555] bg-secondary w-full"
                    onClick={() => navigate("/take-photo")}    
                />
                <Button text="Not right now" className="bg-[#265565] text-white w-full" />
            </div>
        </div>
    );
}

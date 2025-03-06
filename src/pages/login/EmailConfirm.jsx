import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";

export default function ConfirmEmailPage() {

    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#265565] via-[#288FB1] to-[#265565]">
            {/* Nút Back (X) */}
            <button
                className="absolute top-[30px] left-[-15px]  p-[15px] gap-[10px] text-white z-50"
                onClick={() => navigate("/login")}
            >
                <img src="/image/Backarrow-white.svg" alt="" className="h-14 w-16"/>
            </button>

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/image/plane.png"
                    alt="Paper Plane"
                    className="w-full max-w-[430px] min-w-[375px] h-auto object-contain mx-auto fixed top-[90px] left-1/2 -translate-x-1/2"
                />
                <img
                    src="/image/EllipseShadow.png"
                    alt="Paper Plane"
                    className="w-full max-w-[130px] min-w-[100px] h-auto object-contain mx-auto fixed top-[450px] left-1/2 -translate-x-1/2"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-sm px-4 py-8 text-center mt-[33rem]">
                <h1 className="text-4xl font-semibold text-white">
                    Confirm your email
                </h1>
                <p className="mt-3 mb-8 text-[#F9FBF9] text-sm opacity-75">
                    We just sent you an email to
                    <br />
                    office@designmesocial.com
                </p>

                <Button text="Open email app" className="text-[#134555] bg-secondary"/>

                <Button text="I didn't receive my email" className="bg-[#265565] text-white " />
                    
            </div>
        </div>
    );
}

  

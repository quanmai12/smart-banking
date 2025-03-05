import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const PhoneVerified = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-[#265565] via-[#288FB1] to-[#265565]">
      {/* Khung chính */}
      <div className="relative w-[375px] h-[812px] overflow-hidden rounded-[30px] bg-transparent">
        
        {/* Nút Back (X) */}
        <button 
          className="absolute top-[44px] left-6 w-[44px] h-[44px] p-[15px] gap-[10px] text-white text-2xl z-50" 
          onClick={() => navigate("/verify-code")} // Quay lại trang Verify Code
        >
          <X size={32} />
        </button>

        {/* Hình ảnh xác nhận */}
        <div className="absolute top-[223px] left-[121px] w-[171px] h-[200px]">
          <img src="/phone_verified.png" alt="Phone Verified" className="w-full h-full" onError={(e) => e.target.style.display = "none"} />
        </div>

        {/* Bóng mờ dưới hình ảnh */}
        <div className="absolute top-[496px] left-[113px] w-[166px] h-[18px] bg-black opacity-50 blur-md rounded-full"></div>

        {/* Nội dung xác nhận */}
        <div className="absolute top-[566px] left-[16px] w-[343px] h-[126px] flex flex-col items-center justify-center gap-[8px] text-center">
          <h2 className="text-2xl font-bold text-white">We’ve verified your phone number</h2>
          <p className="text-sm text-white opacity-80">
            We just sent you an email to <br />
            <span className="font-semibold text-white">office@designmesocial.com</span>
          </p>
        </div>

        {/* Nút "Continue" */}
        <button
          className="absolute top-[724px] left-[16px] w-[343px] h-[48px] flex items-center justify-center rounded-full bg-[#F8FF7D] font-semibold text-gray-900 shadow-md transition hover:bg-yellow-300"
          onClick={() => navigate("/create-passcode")} // Điều hướng sang Create Passcode
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PhoneVerified;

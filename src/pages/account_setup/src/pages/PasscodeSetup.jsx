import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

function PasscodeSetup() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-[#265565] via-[#288FB1] to-[#265565]">
      {/* Khung chính */}
      <div className="relative w-[375px] h-[812px] overflow-hidden rounded-[30px] bg-transparent">
        
        {/* Nút Back (X) */}
        <button 
          className="absolute top-[44px] left-6 w-[44px] h-[44px] p-[15px] gap-[10px] text-white text-2xl z-50" 
          onClick={() => navigate(-1)}
        >
          <X size={32} />
        </button>

        {/* Hình ảnh minh họa */}
        <div className="absolute top-[180px] left-[50%] transform -translate-x-1/2 w-[375px] h-[250px]">
          <img src="/public/passcode-setup.png" alt="Passcode Setup" className="w-full h-full object-cover rounded-lg" onError={(e) => e.target.style.display = "none"} />
        </div>

        {/* Nút "Continue" */}
        <button
          className="absolute top-[680px] left-[16px] w-[343px] h-[48px] flex items-center justify-center rounded-full bg-[#F8FF7D] font-semibold text-gray-900 shadow-md transition hover:bg-yellow-300"
          onClick={() => navigate("/home")}
        >
          Continue
        </button>

        {/* Nội dung xác nhận */}
        <div className="absolute top-[556px] left-[16px] w-[343px] h-[126px] flex flex-col items-center justify-center gap-[8px] text-center">
          <h2 className="text-2xl font-bold text-white">Your passcode has been set up</h2>
        </div>
      </div>
    </div>
  );
}

export default PasscodeSetup;

import React from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate(); // Điều hướng đến trang AccountType

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-b from-[#265565] via-[#288FB1] to-[#265565]">
      {/* Khung chính */}
      <div className="relative w-[375px] h-[812px] overflow-hidden rounded-[30px] bg-transparent">
        
        {/* Hình ảnh trung tâm */}
        <div className="absolute top-[188px] left-[52px] w-[274px] h-[212px]">
          <img src="/globe.png" alt="Globe" className="w-full h-full" onError={(e) => e.target.style.display = "none"} />
        </div>

        {/* Bóng mờ dưới hình ảnh */}
        <div className="absolute top-[496px] left-[113px] w-[166px] h-[18px] bg-black opacity-50 blur-md rounded-full"></div>

        {/* Tiêu đề */}
        <div className="absolute top-[566px] left-[16px] w-[343px] h-[126px] flex flex-col items-center justify-center gap-[8px] text-center">
          <h1 className="text-2xl font-bold text-white">Welcome to</h1>
          <h1 className="text-2xl font-bold text-white">SmartBank</h1>
          <p className="text-sm text-white opacity-80">
            Spend, save and manage your money in one place.
            <br />
            Your money is safe with us.
          </p>
        </div>

        {/* Nút "Continue" */}
        <button
          className="absolute top-[724px] left-[16px] w-[343px] h-[48px] flex items-center justify-center rounded-full bg-[#F8FF7D] font-semibold text-gray-900 shadow-md transition hover:bg-yellow-300"
          onClick={() => navigate("/account-type")} // Điều hướng đến trang AccountType
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default HomeScreen;

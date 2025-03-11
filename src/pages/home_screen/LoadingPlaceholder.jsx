import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingPlaceholder = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/homescreen"); // Chuyển đến trang mới
    }, 2500); // 2.5 giây

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center  p-4 w-[100%] max-w-[375px] mx-auto bg-[#f9fbfa] h-screen">
      {/* Header với ba dấu chấm */}
      <div className="flex justify-between w-[100%] w-max-[343px] h-[36px]">
        <div className="w-[31px] h-[31px] bg-[#e6f2f0] rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div>
        </div>
        <div className="flex px-[10px]  w-max-[132px] space-x-2">
          <div className="w-[27px] h-[27px] my-1 bg-[#e6f2f0] rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div>
          </div>
          <div className="w-[27px] h-[27px] my-1 bg-[#e6f2f0] rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div>
          </div>
          <div className="w-[27px] h-[27px] my-1 ml-1 bg-[#e6f2f0] rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-custom rounded-[8px] mt-[24px] w-full h-[260px] flex flex-col items-center text-center">

        {/* Avatar */}
        <div className="w-[60px] h-[60px] mt-[32px] rounded-full bg-[#e6f2f0] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div>
        </div>

        {/* Text lines */}
        <div className="w-[31.5%] h-[20px] mt-2 bg-[#e6f2f0] rounded-[8px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div>
        </div>
        <div className="w-[64%] h-[18px] mt-2 bg-[#e6f2f0] rounded-[8px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div>
        </div>
        <hr className="w-full border-t border-gray-100 my-[24px]" style={{ height: "1px" }} />
        <div className="w-[44%] h-[34px] bg-[#e6f2f0] rounded-[8px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div>
        </div>
      </div>
      <div className="bg-white shadow-custom rounded-[8px] mt-[8px] w-full h-[327px] flex flex-col items-center text-center">

        {/* Large box */}
        <div className="w-[83%] h-[208px] mt-[31px] bg-[#e6f2f0] rounded-[16px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div>
        </div>

        {/* Button */}
        <div className="w-[70%] h-[36px] mt-[31px] bg-[#e6f2f0] rounded-[8px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;

{/* <div className="absolute inset-0 bg-gradient-to-r from-[#e9f1f0] via-[#d4e8e6] via-[#c3dddc] via-[#b2d3d2] to-[#e9f1f0] animate-shimmer"></div> */ }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center text-white p-6 flex-col relative">
      <div className="w-[375px] h-[812px] rounded-[30px] flex flex-col items-center justify-center bg-gradient-to-b from-[#265565] via-[#288FB1] to-[#265565] text-white p-6 relative shadow-lg">
        {/* Nút Back */}
        <button 
          className="absolute top-[44px] left-[10px] w-[44px] h-[44px] flex items-center justify-center p-[10px]"
          onClick={() => navigate(-1)}
        >
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6H3.83L8.71 1.12L7.29 -0.29L0 7L7.29 14.29L8.71 12.88L3.83 8H16V6Z" fill="white"/>
          </svg>
        </button>
        
        {/* Layout chứa ảnh và bóng */}
        <div className="relative w-[311px] h-[320.13px] mt-[140px] flex flex-col items-center gap-[93px]">
          <img 
            src="/anh1.png"  // Nếu ảnh trong public/
            alt="Illustration" 
            className="w-full h-full" 
          />
          <div className="w-[160px] h-[13.63px] bg-[#004852] opacity-60 rounded-full" style={{ filter: 'blur(11.85px)' }}></div>
        </div>

        {/* Phần chữ */}
        <h1 className="text-2xl font-bold mt-6 text-center">Tell us about yourself</h1>
        <p className="text-center mt-2 px-4">
          Signing up shouldn’t take longer than 10 minutes and you do it all from your phone.
        </p>
        <p className="text-center mt-2 px-4">
          We’ll store any info you give us securely and only share it with your permission. 
        </p>

        {/* Nút Continue */}
        <button
          className="bg-[#E8F569] text-black w-[343px] h-[48px] rounded-[12px] flex items-center justify-center mt-6"
          onClick={() => navigate("/legal-info")}
        >
          Continue
        </button>
        
        {/* Nút Not Right Now */}
        <button 
          className="mt-4 w-[343px] h-[48px] bg-[#265565] text-white rounded-[12px] flex items-center justify-center"
          onClick={() => setShowModal(true)}
        >
          Not right now
        </button>
      </div>
      
      {/* Modal Xác nhận */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[270px] h-[176.5px] bg-[#F2F2F2E5] rounded-[14px] backdrop-blur-[22px] p-4 text-black text-center flex flex-col justify-between">
            <div>
              <p className="text-lg font-semibold">Are you sure you want to skip the verification process?</p>
              <p className="text-sm text-gray-600 mt-2">You won’t be able to send, receive and exchange money until we have verified your identity.</p>
            </div>
            <div className="flex gap-0.5">
              <button 
                className="w-1/2 h-[44px] bg-gray-300 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button 
                className="w-1/2 h-[44px] bg-blue-500 text-white rounded-lg"
                onClick={() => navigate("/home")}
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeScreen;

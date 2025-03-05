import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function VerifyCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || "+0000000000";
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // Xử lý nhập OTP
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Chuyển focus sang ô tiếp theo nếu có số
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Xử lý xóa bằng phím Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Xử lý nhấn "Continue"
  const handleVerify = () => {
    if (otp.every((num) => num !== "")) {
      navigate("/phone-verified"); // Điều hướng khi nhập đủ 6 số
    }
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-between p-6 relative rounded-lg">
      {/* Nút Back và Thanh tiến trình */}
      <div className="flex items-center justify-between w-full mb-6">
        <ArrowLeft
          size={24}
          className="text-gray-900 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="w-2/3 h-[5px] bg-gray-300 rounded-full mx-auto">
          <div className="w-2/3 h-[5px] bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Tiêu đề */}
      <div className="mt-8 w-[375px] h-[106px] px-[16px] pt-[4px] pb-[4px] text-center" style={{ margin: "0 auto" }}>
        <h1 className="text-2xl font-bold text-gray-900">Enter your code</h1>
        <p className="text-sm text-gray-600 mt-2">
          We sent a verification code to <br />
          <span className="font-bold">{phoneNumber}</span>
        </p>
      </div>

      {/* Nhập OTP */}
      <div className="mt-8 flex justify-center space-x-2">
        {otp.map((value, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            className="w-12 h-12 text-center text-lg font-bold border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        ))}
      </div>

      {/* Resend */}
      <div className="text-center mt-4 opacity-60">
        <p className="text-gray-600 text-sm">
          Didn’t get the code? 
          <span 
            className="text-blue-600 font-bold cursor-pointer transition duration-300 ease-in-out hover:text-blue-800 hover:scale-105"
          >
            Resend it.
          </span>
        </p>
      </div>

      {/* Nút tiếp tục */}
      <div className="mt-8 flex-grow" />
      <button
        className={`mx-auto w-[90%] sm:w-[343px] h-[48px] rounded-lg text-white font-bold transition ${
          otp.every((num) => num !== "") ? "bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!otp.every((num) => num !== "")}
        onClick={handleVerify}
      >
        Continue
      </button>
    </div>
  );
}

export default VerifyCode;

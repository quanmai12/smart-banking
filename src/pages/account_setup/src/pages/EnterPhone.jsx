// EnterPhone.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function EnterPhone() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCountry = location.state?.selectedCountry; // Lấy thông tin quốc gia đã chọn

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    if (phoneNumber) {
      // Điều hướng tới trang tiếp theo (Ví dụ: trang xác minh)
      navigate("/verify-code", {
        state: { phoneNumber, selectedCountry }, // Truyền số điện thoại và quốc gia đã chọn
      });
    }
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-between p-6 relative rounded-lg">
      {/* Nút Back và Thanh tiến tiến nằm ngang */}
      <div className="flex items-center justify-between w-full mb-6">
        <ArrowLeft
          size={24}
          className="text-gray-900 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="w-2/3 h-[5px] bg-gray-300 rounded-full mx-auto">
          <div className="w-1/2 h-[5px] bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Tiêu đề */}
      <div className="mt-8 w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          What phone number would you like to use?
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          We will send you a verification code to this number.
        </p>
      </div>

      {/* Phần nhập mã vùng và số điện thoại */}
      <div className="mt-8 flex justify-between space-x-4">
        {/* Phần Country */}
        <div className="w-[40%]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <div className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg">
            {selectedCountry ? (
              <>
                {/* Hiển thị mã vùng và lá cờ */}
                <img
                  src={`https://flagcdn.com/w320/${selectedCountry.flag}.png`}
                  alt={selectedCountry.name}
                  className="w-[24px] h-[24px] object-cover"
                />
                <span className="text-gray-900">+{selectedCountry.phoneCode}</span>
              </>
            ) : (
              <span className="text-gray-500">No country selected</span>
            )}
          </div>
        </div>

        {/* Phần Mobile Number */}
        <div className="w-[55%]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>
          <div className="p-3 border border-gray-300 rounded-lg">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Nút tiếp tục */}
      <div className="mt-8 flex-grow" /> 
      <button
        className={`mx-auto w-[90%] sm:w-[343px] h-[48px] rounded-lg text-white font-bold transition ${
          phoneNumber ? "bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!phoneNumber}
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}

export default EnterPhone;

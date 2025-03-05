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
      navigate("/verify-code", {
        state: { phoneNumber, selectedCountry },
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
      <div
        className="mt-8 w-[375px] h-[106px] px-[16px] pt-[4px] pb-[4px] text-center"
        style={{ margin: "0 auto" }} // Căn giữa
      >
        <h1 className="text-2xl font-bold text-gray-900">
          What phone number would you like to use?
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          We will send you a verification code to this number.
        </p>
      </div>


      {/* Phần nhập mã vùng và số điện thoại */}
      <div className="mt-8 flex justify-center items-center space-x-4">
        {/* Phần Country */}
        <div
          className="flex items-center justify-center border border-gray-300 rounded-[12px] p-[8px] pl-[10px]"
          style={{ width: "98px", height: "56px", gap: "10px" }}
        >
          {selectedCountry ? (
            <>
              {/* Hiển thị mã vùng và lá cờ */}
              <img
                src={`https://flagcdn.com/w320/${selectedCountry.flag}.png`}
                alt={selectedCountry.name}
                className="w-[24px] h-[24px] object-cover"
              />
              <span className="text-gray-900 ml-2">+{selectedCountry.phoneCode}</span>
            </>
          ) : (
            <span className="text-gray-500">No country</span>
          )}
        </div>

        {/* Phần Mobile Number */}
        <div
          className="border border-gray-300 rounded-lg flex items-center px-3"
          style={{ width: "239px", height: "56px" }}
        >
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full outline-none"
          />
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

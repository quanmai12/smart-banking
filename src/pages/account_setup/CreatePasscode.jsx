import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function CreatePasscode() {
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState(new Array(6).fill(""));
  const [showConfirm, setShowConfirm] = useState(false);
  const inputRefs = useRef([]);

  // Xử lý nhập passcode
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return; // Chỉ nhận số

    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);

    // Chuyển focus sang ô tiếp theo
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Nếu nhập đủ 6 số, hiển thị thông báo
    if (newPasscode.every((num) => num !== "")) {
      setTimeout(() => setShowConfirm(true), 200);
    }
  };

  // Xử lý xóa bằng phím Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !passcode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Xác nhận passcode
  const handleConfirm = () => {
    setShowConfirm(false);
    navigate("/passcode-setup");
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-between px-6 py-8 relative rounded-lg">
      {/* Nút Back và Thanh tiến trình */}
      <div className="flex items-center justify-between w-full mb-6">
        <ArrowLeft
          size={24}
          className="text-gray-900 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="w-2/3 h-[5px] bg-gray-300 rounded-full mx-auto">
          <div className="w-full h-[5px] bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Tiêu đề */}
      <div className="mt-4 w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900">Create Passcode</h1>
        <p className="text-sm text-gray-600 mt-2 px-4">
          You’ll be able to log in to SmartBank using the following passcode.
        </p>
      </div>

      {/* Nhập Passcode */}
      <div className="mt-8 flex justify-center space-x-2">
        {passcode.map((value, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
        ))}
      </div>

      {/* Nút tiếp tục */}
      <div className="mt-8 flex-grow" />
      <button
        className={`mx-auto w-full max-w-[343px] h-[50px] rounded-lg text-white font-bold transition ${
          passcode.every((num) => num !== "") ? "bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!passcode.every((num) => num !== "")}
        onClick={() => setShowConfirm(true)}
      >
        Continue
      </button>

      {/* Hộp thoại xác nhận */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[300px] text-center">
            <h2 className="text-lg font-bold text-gray-900">Smart passcode</h2>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to set a passcode that anyone can guess?
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="text-blue-500 font-bold w-1/2 py-2"
                onClick={() => setShowConfirm(false)}
              >
                Change it
              </button>
              <button
                className="text-blue-500 font-bold w-1/2 py-2 border-l"
                onClick={handleConfirm}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePasscode;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LegalInfoScreen = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  
  const isFormValid = firstName && lastName && dob;

  return (
    <div className="h-screen flex flex-col bg-gray-100 px-6 pt-6">
      {/* Back button & progress bar */}
      <div className="flex items-center w-full mb-4 relative">
        <button 
          className="w-[44px] h-[44px] flex items-center justify-center p-[10px]"
          onClick={() => navigate(-1)}
        >
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6H3.83L8.71 1.12L7.29 -0.29L0 7L7.29 14.29L8.71 12.88L3.83 8H16V6Z" fill="#2791B5"/>
          </svg>
        </button>
        <div className="flex-1 h-1 bg-gray-300 rounded-full mx-4">
          <div className="w-1/3 h-1 bg-blue-500 rounded-full"></div>
        </div>
      </div>
      
      {/* Title */}
      <h1 className="text-2xl font-semibold">Tell us about yourself</h1>
      <p className="text-sm mb-4">We need this information to verify your identity.</p>

      {/* Input fields */}
      <div className="space-y-3">
        <div className="relative">
          <label className="absolute top-2 left-3 text-sm font-medium text-[#2791B5]">Legal first name</label>
          <input type="text" className="border p-3 pt-6 rounded-lg w-full text-gray-900" 
                 value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="relative">
          <label className="absolute top-2 left-3 text-sm font-medium text-[#2791B5]">Legal last name</label>
          <input type="text" className="border p-3 pt-6 rounded-lg w-full text-gray-900"
                 value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="relative">
          <label className="absolute top-2 left-3 text-sm font-medium text-[#2791B5]">Date of birth (DD/MM/YYYY)</label>
          <input type="text" className="border p-3 pt-6 rounded-lg w-full text-gray-900"
                 value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>
      </div>
      
      {/* Continue button */}
      <button 
        className={`mt-6 p-3 w-full text-white rounded-lg ${isFormValid ? 'bg-[#2B6173]' : 'bg-gray-300'}`} 
        disabled={!isFormValid} 
        onClick={() => navigate("/home-address")}
      >
        Continue
      </button>
    </div>
  );
};

export default LegalInfoScreen;

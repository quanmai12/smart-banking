import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";

function AccountType() {
  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <div className="bg-white w-full h-full shadow-lg p-6 relative rounded-lg">
          {/* Thanh tiến trình + Nút Back */}
          <div className="flex items-center justify-between mb-6">
            <ArrowLeft
              size={24}
              className="text-gray-900 cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <div className="w-2/3 h-[5px] bg-gray-300 rounded-full mx-auto">
              <div className="w-1/4 h-[5px] bg-blue-500 rounded-full"></div>
            </div>
          </div>

          {/* Tiêu đề */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              What kind of account <br /> would you like to open?
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              You will be able to add new accounts later on.
            </p>
          </div>

          {/* Danh sách tài khoản */}
          <div className="space-y-4">
            {/* Personal Account */}
            <div
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200"
              onClick={() => navigate("/select-country")}
            >
              <div className="flex items-center gap-3">
                <img src="/personal-icon.png" alt="Personal" className="w-12 h-12" />
                <div>
                  <h2 className="font-semibold text-gray-900">Personal account</h2>
                  <p className="text-gray-500 text-sm">
                    Send, spend, receive, and exchange your money freely.
                  </p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-900" />
            </div>

            {/* Business Account */}
            <div
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200"
              onClick={() => navigate("/select-country")}
            >
              <div className="flex items-center gap-3">
                <img src="/business-icon.png" alt="Business" className="w-12 h-12" />
                <div>
                  <h2 className="font-semibold text-gray-900">Business account</h2>
                  <p className="text-gray-500 text-sm">
                    Collect invoices, do freelance or business work internationally.
                  </p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-900" />
            </div>   
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountType;

// SelectCountry.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

const countries = [
  { name: "United States", flag: "us", phoneCode: "1" },
  { name: "United Kingdom", flag: "gb", phoneCode: "44" },
  { name: "Canada", flag: "ca", phoneCode: "1" },
  { name: "Australia", flag: "au", phoneCode: "61" },
  { name: "Germany", flag: "de", phoneCode: "49" },
  { name: "France", flag: "fr", phoneCode: "33" },
  { name: "Japan", flag: "jp", phoneCode: "81" },
  { name: "Vietnam", flag: "vn", phoneCode: "84" },
  { name: "India", flag: "in", phoneCode: "91" },
  { name: "China", flag: "cn", phoneCode: "86" },
  { name: "Singapore", flag: "sg", phoneCode: "65" },
  { name: "Thailand", flag: "th", phoneCode: "66" },
  { name: "Brazil", flag: "br", phoneCode: "55" },
  { name: "Italy", flag: "it", phoneCode: "39" },
  { name: "Spain", flag: "es", phoneCode: "34" },
  { name: "Mexico", flag: "mx", phoneCode: "52" },
  { name: "South Korea", flag: "kr", phoneCode: "82" },
  { name: "Russia", flag: "ru", phoneCode: "7" },
  { name: "Netherlands", flag: "nl", phoneCode: "31" },
  { name: "Sweden", flag: "se", phoneCode: "46" },
];

function SelectCountry() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Lọc các quốc gia theo tên khi có tìm kiếm
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handleContinue = () => {
    if (selectedCountry) {
      // Khi ấn tiếp tục, điều hướng đến trang EnterPhone và truyền dữ liệu quốc gia qua state
      navigate("/enter-phone", {
        state: { selectedCountry }, // Truyền thông tin quốc gia qua state
      });
    }
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-between p-6 relative rounded-lg">
      {/* Nút Back và Thanh tiến trình nằm ngang */}
      <div className="flex items-center justify-between w-full mb-6">
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
      <div className="mt-8 w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          What is your country of primary residence?
        </h1>
      </div>

      {/* Ô chọn quốc gia */}
      <div
        className="mt-8 mx-auto w-[90%] sm:w-[343px] p-3 border border-gray-300 rounded-lg cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {selectedCountry ? (
              <img
                src={`https://flagcdn.com/w320/${selectedCountry.flag}.png`}
                alt={selectedCountry.name}
                className="w-[24px] h-[24px] object-cover"
              />
            ) : null}
            <span className="text-gray-900">
              {selectedCountry ? selectedCountry.name : "Select a country"}
            </span>
          </div>
          {isDropdownOpen ? (
            <ChevronUp size={20} className="text-gray-500" />
          ) : (
            <ChevronDown size={20} className="text-gray-500" />
          )}
        </div>
      </div>

      {/* Danh sách quốc gia */}
      {isDropdownOpen && (
        <div
          className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-y-auto flex flex-col items-center mx-auto"
          style={{
            width: "341px",
            height: "802px",
            top: "138px",
            left: "17px",
            gap: "8px",
          }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a country"
            className="w-[90%] sm:w-[343px] p-2 mb-4 border border-gray-300 rounded-lg"
          />
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-2 gap-4 border-b border-gray-300 w-full cursor-pointer"
                onClick={() => handleSelectCountry(country)}
              >
                <img
                  src={`https://flagcdn.com/w320/${country.flag}.png`}
                  alt={country.name}
                  className="w-[66px] h-[66px] object-cover rounded-full"
                />
                <span className="text-gray-900 flex-1 text-center">{country.name}</span>
              </div>
            ))
          ) : (
            <span className="text-gray-500">No countries found</span>
          )}
        </div>
      )}

      <div className="mt-8 flex-grow" />
      <button
        className={`mx-auto w-[90%] sm:w-[343px] h-[48px] rounded-lg text-white font-bold transition ${
          selectedCountry ? "bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!selectedCountry}
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}

export default SelectCountry;

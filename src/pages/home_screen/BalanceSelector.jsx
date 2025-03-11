import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const localBalances = [
  { id: 1, name: "British Pound", description: "Account number, IBAN, and UK sort code", flag: "/image/flags/Flags-british.svg" }
];

const otherBalances = [
  { id: 2, name: "Australian Dollar", description: "Account number and BSB code", flag: "/image/flags/Flags-aus.svg" },
  { id: 3, name: "Canadian Dollar", description: "Account number, Institution number, and Transit number", flag: "/image/flags/Flags-cnd.svg" },
  { id: 4, name: "Euro", description: "Bank code (SWIFT/BIC) and IBAN", flag: "/image/flags/Flags-eur.svg" },
  { id: 5, name: "United States Dollar", description: "Account number", flag: "/image/flags/Flags-usa.svg" },
  { id: 6, name: "Australian Dollar", description: "Account number and BSB code", flag: "/image/flags/Flags-aus.svg" },
  { id: 7, name: "Canadian Dollar", description: "Account number, Institution number, and Transit number", flag: "/image/flags/Flags-cnd.svg" },
  { id: 8, name: "Euro", description: "Bank code (SWIFT/BIC) and IBAN", flag: "/image/flags/Flags-eur.svg" },
  { id: 9, name: "United States Dollar", description: "Account number", flag: "/image/flags/Flags-usa.svg" }
];

export default function BalanceSelector({ onClose ,onSelect }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Vô hiệu cuộn trang khi popup mở
    document.body.classList.add("overflow-hidden");

    return () => {
      // Khôi phục cuộn trang khi popup đóng
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const filterBalances = (balances) =>
    balances.filter(({ name, description }) =>
      `${name} ${description}`.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50">
      <AnimatePresence>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-full max-w-md h-[92vh] rounded-t-2xl p-[15px] shadow-lg relative"
        >
          {/* Nút đóng (góc trên bên trái) */}
          <div className="flex justify-start  h-[29px]">
            <button className="absolute " onClick={onClose}>
              <img src="/image/homescreen/vector-x-cyan.svg" alt="x" />
            </button>
          </div>

          {/* Tiêu đề */}
          <h2 className="text-[28px] leading-[36px] font-semibold text-left h-[44px] py-[4px]">Choose balance to open</h2>

          {/* Ô tìm kiếm */}
          <div className="relative mb-2 flex items-center border rounded-[10px] p-2 bg-[#E7EAEB]">
            <img src="/image/homescreen/search-gray.svg" alt="Search" className="w-[16px] h-[16px] text-gray-400" />
            <input
              type="text"
              className="w-full bg-transparent ml-2 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {!search && <span className="absolute left-[30px] font-semibold text-[#808C91]">Search bank...</span>}
          </div>

          {/* Danh sách cuộn */}
          <div className="overflow-y-auto h-[calc(80vh-80px)] scrollbar-hide">
            {filterBalances(localBalances).length > 0 && (
              <>
                <h3 className="h-[18px] mt-[18px] mb-[8px] font-semibold text-gray-500 text-[13px] text-left">Local account details</h3>
                {filterBalances(localBalances).map(({ id, name, description, flag }) => (
                  <div
                    key={id}
                    className="flex items-center py-[15px] px-[8px] cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      onSelect({ id, name, number: "1234567890", balance: "0.00 " + name.split(" ")[0], flag });
                      onClose();
                    }}
                  >
                    <img src={flag} alt={name} className="w-[66px] h-[66px] mr-4" />
                    <div >
                      <p className="w-full h-[21px] mt-[11px] mb-[4px] font-semibold text-left leading-[21px] tracking-[-0.32px] text-[16px]">{name}</p>
                      <p className="w-full h-[19px] mb-[11px] text-[12px] leading-[16px] text-left ">{description}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
            {filterBalances(otherBalances).length > 0 && (
              <>
                <h3 className="h-[18px] my-[8px] font-semibold text-gray-500 text-[13px] text-left">Balances with account details</h3>
                {filterBalances(otherBalances).map(({ id, name, description, flag }) => (
                  <div
                    key={id}
                    className="flex items-center py-[15px] px-[8px] cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      onSelect({ id, name, number: "1234567890", balance: "0.00 " + name.split(" ")[0], flag });
                      onClose();
                    }}>
                    <img src={flag} alt={name} className="w-[66px] h-[66px] mr-4" />
                    <div>
                      <p className="w-full h-[21px] mt-[11px] mb-[4px] font-semibold text-left leading-[21px] tracking-[-0.32px] text-[16px]">{name}</p>
                      <p className="w-full h-[19px] mb-[11px] text-[12px] leading-[16px] text-left ">{description}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

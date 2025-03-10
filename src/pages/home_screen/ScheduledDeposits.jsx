import { Link } from "react-router-dom";

const ScheduledDeposits = () => {
    // Giá trị dữ liệu (tạm thời mặc định là 0, sẽ cập nhật sau)
    const totalDeposits = "$0.00";
    const directDeposits = 0;
    const recurringTransfers = 0;

    return (
        <div className="bg-white rounded-[13px] mx-[16px] w-auto h-[478px] shadow-custom mt-[16px] pt-[18px]">
            {/* Tiêu đề */}
            <h3 className="text-[22px] font-bold text-[#676767] ml-[15px] h-[84px] leading-[28px] tracking-[0.35px] mb-[23px]">
                You have <span className="text-[#2791B5]">{totalDeposits}</span> in <p></p> scheduled deposits every month
            </h3>

            {/* Hình ảnh chồng lên */}
            <div className="relative ml-[15px] h-[183px]">
                <img src="/image/homescreen/lotsofcoins.svg" alt="Coins" className="w-auto h-[187px] object-cover" />
                <div className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-transparent" />
            </div>

            {/* Thông tin chi tiết */}
            <div className="h-[96px] w-auto ml-[18px] mr-[14px]">
                <div className="flex justify-between">
                    <div>
                        <p className="font-semibold text-[15px] text-[#111827] h-[20px] leading-[20px] tracking-[-0.5px] ">Direct deposits</p>
                        <p className="h-[18px] text-gray-500 text-[13px] leading-[18px] tracking-[-0.08%] font-semibold ">{directDeposits} paychecks</p>
                    </div>
                    <p className="font-semibold text-[15px] text-[#111827] h-[20px] leading-[20px] tracking-[-0.5px] ">${directDeposits}</p>
                </div>

                <div className="flex justify-between mt-[16px]">
                    <div>
                        <p className="font-semibold text-[15px] text-[#111827] h-[20px] leading-[20px] tracking-[-0.5px] ">Recurring</p>
                        <p className="h-[18px] text-gray-500 text-[13px] leading-[18px] tracking-[-0.08%] font-semibold ">{recurringTransfers} active transfers</p>
                    </div>
                    <p className="font-semibold text-[15px] text-[#111827] h-[20px] leading-[20px] tracking-[-0.5px] ">${recurringTransfers}</p>
                </div>
            </div>

            {/* Nút điều hướng */}
            <Link to="/manage-money" >
                <button className="px-[12px] py-[8px] ml-[18px] mb-[22px] mt-[16px] w-[45.1%] h-[36px] bg-[#D4EAEF] text-[#004852] text-[11px] leading-[13px] tracking-[0.0007em] font-semibold rounded-[8px] flex items-center justify-center hover:bg-[#d0e7ec] transition">
                    Manage your money
                    <img src="/image/homescreen/arrow-right-dark.svg" alt="Go" className=" w-[15px] h-[12px] ml-[10px] text-[#004852]" />
                </button>
            </Link>
        </div>
    );
};

export default ScheduledDeposits;

import { useState } from "react";
import BalanceSelector from "./BalanceSelector";
import MoreOptionsPopup from "./MoreOptionsPopup";


const accounts = [
    { id: 1, name: "GBP ACCOUNT", number: "4212423532", balance: "0,00 GBP", flag: "/image/flags/Flags-british.svg" },
    { id: 2, name: "USD ACCOUNT", number: "9876543210", balance: "1,200.50 USD", flag: "/image/flags/Flags-usa.svg" },
    { id: 3, name: "USD ACCOUNT", number: "9876543210", balance: "1,200.50 USD", flag: "/image/flags/Flags-usa.svg" }
];
const transactions = [
    { id: 1, name: "To Adrian UIUX", amount: "-£250", time: "Today, 3:30 PM", avatar: "AK" }
];



const BalanceCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState();
    const [showMoreOptions, setShowMoreOptions] = useState(false);


    


    return (
        <div>

            {/* Nếu chưa chọn tài khoản, hiển thị Open a balance */}
            {!selectedAccount ? (
                <div className="bg-white shadow-custom rounded-[8px] px-[16px] py-[25px] mt-[65px] mx-[16px] w-auto h-[248px] flex flex-col items-center text-center">

                    <div className="flex flex-col items-center h-[114px] w-full text-center">
                        <img
                            src="/image/homescreen/Openbalance.svg"
                            alt="Balance Icon"
                            className="mb-[8px] cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                        <div className="h-[46px]">
                            <p className="mb-[8px] font-semibold text-[#004852] h-[20px] text-[15px]">Open a balance</p>
                            <p className="text-gray-500 h-[18px] text-[13px]">Hold and receive multiple currencies</p>
                        </div>
                        <hr className="w-full border-t border-gray-100 my-[24px]" style={{ height: "1px" }} />

                        {/* Nút Add Account */}
                        <button className="flex items-center bg-[#E5F1F5]  px-[12px] py-[9px] rounded-[8px] h-[36px]">
                            <div className="flex items-center gap-[10px] h-[18px]">
                                <img src="/image/homescreen/+.svg" alt="" className="w-[14px] h-[18px]" />
                                <p className="text-[13px] leading-[18px] text-[#2791B5] font-bold">Add a new account</p>
                            </div>
                        </button>
                    </div>
                </div>
            ) : (
                /* Nếu đã chọn tài khoản, hiển thị thông tin tài khoản */
                <div className="bg-white shadow-custom rounded-[8px] mt-[65px] mx-[16px] w-auto h-[265px] flex flex-col items-center text-center">

                    <div className=" w-full text-center-">
                        <div className="flex h-[41px] mx-[12px] mt-[9px] justify-between items-center">
                            <div>
                                <p className="text-[#15141F] h-[21px] font-semibold uppercase text-[15px]">{accounts[0].name}</p>
                                <p className="text-gray-500 h-[18px] mt-[2px] text-left text-[12px]">{accounts[0].number}</p>
                            </div>
                            <button onClick={() => setShowMoreOptions(true)}>
                            <img src="/image/homescreen/moreoptions.svg" alt="More Options" />
                            </button>
                        </div>
                        <div className="mt-[4px] mx-[12px] h-[39px] justify-between text-right items-center">
                            <p className="text-gray-500 font-medium h-[16px] text-[12px] w-full">Available balance</p>
                            <p className="text-[#15141F] font-bold text-[22px] h-[26px] w-full">{accounts[0].balance}</p>
                        </div>
                        <div className="mt-[15px] mx-[12px] gap-[10px] flex justify-between">
                        <button className="flex bg-[#E5F1F5] h-[32px] px-[18px] flex-1 rounded-[8px] text-[#2B6173] font-semibold text-[11px] leading-[13px] tracking-[0.07%]">
                        <img src="/image/homescreen/+.svg" alt="" className="mr-[8px] h-[10px] w-[10px] my-[11px]" />
                                <p className="my-[9.5px]" >Top up</p>
                            </button>
                            <button className="flex bg-[#E5F1F5] h-[32px] px-[18px] flex-1 rounded-[8px] text-[#2B6173] font-semibold text-[11px] leading-[13px] tracking-[0.07%]">
                                <img src="/image/homescreen/transfer-icon.svg" alt="" className="mr-[8px] h-[10px] w-[10px] my-[11px]" />
                                <p className="my-[9.5px]">Transfer</p>
                            </button>
                            <button className="flex bg-[#E5F1F5] h-[32px] px-[13.25px] flex-1 rounded-[8px] text-[#2B6173] font-semibold text-[11px] leading-[13px] tracking-[0.07%]">
                                <img src="/image/homescreen/exchange-icon.svg" alt="" className="mr-[8px] h-[10px] w-[13px] my-[11px]" />
                                <p className="my-[9.5px]">Exchange</p>
                            </button>
                        </div>

                        <hr className="mx-[12px] w-auto border-t border-gray-100 mt-[19.5px] mb-[16.5px]" style={{ height: "1px" }} />

                        <div className="h-[68px] px-[12px]">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-500 text-[12px] h-[16px]">Transactions</p>
                                {transactions.length > 0 && <button className="text-[#2791B5] h-[16px] text-[12px] font-semibold">See all</button>}
                            </div>
                            {transactions.length === 0 ? (
                                <div className="flex items-center mt-[12px]">
                                    <div className="w-[34px] h-[34px] bg-gray-200 rounded-full mr-[8px]"></div>
                                    <p className="text-gray-400 font-medium text-[12px] h-[18px]">You don’t have any transactions yet</p>
                                </div>
                            ) : (
                                <div className="flex mt-[12px] h-[40px]">
                                    <div className="w-[34px] h-[34px] bg-[#2791B5] text-white flex items-center justify-center rounded-full text-[13px] font-bold">{transactions[0].avatar}</div>
                                    <div className="ml-[8px] flex-1">
                                        <p className="h-[18px] text-left text-[#004852] font-semibold text-[13px]">{transactions[0].name}</p>
                                        <p className="text-gray-400 text-left text-[11px]">{transactions[0].time}</p>
                                    </div>
                                    <p className="text-[#004852] text-top font-semibold text-[13px]">{transactions[0].amount}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Hiển thị indicator theo số lượng tài khoản */}
            {selectedAccount && (
                <div className="mt-[24px] flex justify-center space-x-2">
                    {accounts.map((account) => (
                        <span
                            key={account.id}
                            className={`w-2 h-2 rounded-full transition-all ${selectedAccount.id === account.id ? "bg-[#004852] w-4" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
            )}

            {/* Popup chọn tài khoản */}
            {isOpen && <BalanceSelector onClose={() => setIsOpen(false)} onSelect={setSelectedAccount} />}
            {showMoreOptions && <MoreOptionsPopup onClose={() => setShowMoreOptions(false)} isSwipeable={true} />}

        </div>
    );
};

export default BalanceCard;

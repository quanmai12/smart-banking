import { useState } from "react";

const WalletInfo = () => {
    const [isVisible, setIsVisible] = useState(true); // Kiểm soát hiển thị

    return (
        <div className={`transition-all duration-300 ${isVisible ? "h-[342px]" : "h-[10px]"} overflow-hidden`}>
            {isVisible && (
                <div className="bg-white h-[332px] rounded-[8px] mx-[16px] w-auto shadow-custom mt-[6px] justify-center relative">
                    <button className="absolute top-[15px] right-[15px]" onClick={() => setIsVisible(false)}>
                        <img src="/image/homescreen/Vector-x.svg" alt="Close" />
                    </button>
                    <div className="flex justify-center pt-[31px]">
                        <img src="/image/homescreen/Illustration.png" alt="Illustration" className="h-[208px] w-auto mr-[25.62px] ml-[31px]" />
                    </div>
                    <p className="text-gray-500 text-center text-[13px] h-[54px] w-[calc(100%-34.3%)] mx-auto mb-[23px] mt-[16px]">
                        All your transactions, cards, and deposits will appear here once you’ve completed the account setup.
                    </p>
                </div>
            )}
        </div>
    );
};

export default WalletInfo;

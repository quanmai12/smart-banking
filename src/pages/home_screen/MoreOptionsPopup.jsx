import { useState, useEffect } from "react";

const MoreOptionsPopup = ({ onClose }) => {
    const [startY, setStartY] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [closing, setClosing] = useState(false);
    const [opening, setOpening] = useState(true);


    useEffect(() => {
        setTimeout(() => setOpening(false), 10);
    }, []);

    useEffect(() => {
        // Vô hiệu cuộn trang khi popup mở
        document.body.classList.add("overflow-hidden");

        return () => {
            // Khôi phục cuộn trang khi popup đóng
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    const handleTouchStart = (e) => {
        setStartY(e.touches[0].clientY);
        setIsDragging(false);
    };

    const handleTouchMove = (e) => {
        if (startY !== null) {
            const diff = e.touches[0].clientY - startY;
            if (diff > 50) {
                setIsDragging(true);
            }
        }
    };

    const handleTouchEnd = () => {
        if (isDragging) {
            setClosing(true);
            setTimeout(onClose, 300);
        }
        setStartY(null);
        setIsDragging(false);
    };
    const handleOverlayClick = (e) => {
        if (e.target.id === "popup-overlay") {
            setClosing(true);
            setTimeout(onClose, 300);
        }
    };

    return (

        <div
            id="popup-overlay"
            className={` z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end transition-opacity duration-300 ${closing ? "opacity-0" : "opacity-100"}`}
            onClick={handleOverlayClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className={`bg-white rounded-t-[12px] px-[16px] pt-[8px] mx-auto w-[100%] max-w-[375px] shadow-lg max-h-1/2 overflow-hidden transform transition-transform duration-300 ${closing ? "translate-y-full" : opening ? "translate-y-full" : "translate-y-0"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-10 h-1 mb-[30px] bg-gray-300 rounded-full mx-auto "></div>
                <ul className="mb-[12px] h-[296px]">
                    <li className="flex h-[40px]  items-center cursor-pointer mb-[24px] hover:bg-gray-100">
                        <img src="/image/homescreen/exchange-button.svg" alt="" className="w-[40px] h-[40px] mr-[12px]" />
                        <span className="text-[15px] h-[22px] font-semibold text-[#000000]">Exchange</span>
                    </li>
                    <li className="flex h-[40px]  items-center cursor-pointer mb-[24px] hover:bg-gray-100">
                        <img src="/image/homescreen/statements-button.svg" alt="" className="w-[40px] h-[40px] mr-[12px]" />
                        <span className="text-[15px] h-[22px] font-semibold text-[#000000]">Get statements</span>
                    </li>
                    <li className="flex h-[40px]  items-center cursor-pointer mb-[24px] hover:bg-gray-100">
                        <img src="/image/homescreen/account-details-button.svg" alt="" className="w-[40px] h-[40px] mr-[12px]" />
                        <span className="text-[15px] h-[22px] font-semibold text-[#000000]">Account details</span>
                    </li>
                    <li className="flex h-[40px]  items-center cursor-pointer mb-[24px] hover:bg-gray-100">
                        <img src="/image/homescreen/hide-button.svg" alt="Account details" className="w-[40px] h-[40px] mr-[12px]" />
                        <span className="text-[15px] h-[22px] font-semibold text-[#000000]">Hide</span>
                    </li>
                    <li
                        className="flex h-[40px]  items-center cursor-pointer mb-[24px] hover:bg-gray-100"
                    // onClick={() => {
                    //     setClosing(true); // Ẩn popup MoreOptions
                    //     setTimeout(() => {
                    //         onClose(); // Đóng hẳn popup MoreOptions
                    //         onOpenBalanceSelector(); // Mở popup BalanceSelector
                    //     }, 300); // Delay để hoàn thành hiệu ứng
                    // }}
                    >
                        <img src="/image/homescreen/add-account-button.svg" alt="" className="w-[40px] h-[40px] mr-[12px]" />
                        <span className="text-[15px] h-[22px] font-semibold text-[#000000]">Add new account</span>
                    </li>
                </ul>
            </div>

        </div>


    );
};

export default MoreOptionsPopup;

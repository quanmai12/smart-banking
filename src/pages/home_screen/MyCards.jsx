import { Link } from "react-router-dom";

const MyCards = () => {
    return (
        <div className="bg-white rounded-[8px] px-[8px] py-[10px] mx-[16px] w-auto h-[72px] shadow-custom mt-[6px] justify-between items-center flex">
            <div className="pl-[8px]">
                <h2 className="text-[#15141F] font-semibold mt-[4px] mb-[6px] h-[20px] text-[15px]">My cards</h2>
                <Link to="/cards" className="text-[#2791B5] text-[13px] mb-[4px] h-[18px] font-semibold">
                    Top up your account
                </Link>
            </div>
            <img 
                src="/image/homescreen/double_cards.svg" 
                alt="Cards" 
                className="h-[52px] "
            />
        </div>
    );
};

export default MyCards;

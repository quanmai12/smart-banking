import { Link } from "react-router-dom";

const InviteFriends = () => {
    return (
        <div className="bg-white rounded-[8px] p-[10px] mx-[16px] mt-[8px] w-auto h-[96px] shadow-custom  justify-between items-center flex">
            {/* Hình ảnh */}
            <img src="/image/homescreen/EarnChart.svg" alt="Invite Chart" className="w-[46px]" />

            {/* Nội dung văn bản */}
            <div className="h-[76px] ml-[10px] w-auto mr-[27px]">
                <h3 className="font-semibold text-black text-[15px] h-[20px] mb-[4px] mt-[8px]">Invite friends and earn $$$!</h3>
                <p className="text-gray-500 text-[13px] h-[36px] font-medium">Refer SmartBank to your friends and earn rewards</p>
            </div>

            {/* Nút điều hướng */}
            <Link to="/invite" className="w-[35px]">
                <img src="/image/homescreen/arrow-right.svg" alt="Go to Invite" className="w-[9px] h-[15px] mx-[13px]" />
            </Link>
        </div>
    );
};

export default InviteFriends;

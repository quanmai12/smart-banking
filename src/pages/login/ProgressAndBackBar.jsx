 {/* Progress and Back */ }
const ProgressAndBackBar = ({onClick}) => {
    return (
        <div className="flex items-center justify-between mb-6">
            <div onClick={onClick}>
                <img src="/image/Backarrow.svg" alt="" className="h-[22px] w-[18px]"/>
            </div>
            <div className="w-2/3 h-[5px] bg-gray-300 rounded-full mx-auto">
                <div className="w-1/2 h-[5px] bg-[#2791B5] rounded-full"></div>
            </div>
        </div>
    )
}
export default ProgressAndBackBar;
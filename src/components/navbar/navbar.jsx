// import { useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const navItems = [
//     { name: "Home", icon: "/image/homescreen/Home.svg", path: "/homescreen" },
//     { name: "Cards", icon: "/image/homescreen/cards.svg", path: "/cards" },
//     { name: "Insights", icon: "/image/homescreen/insights.svg", path: "/insights" },
//     { name: "Invite", icon: "/image/homescreen/invite.svg", path: "/invite" },
// ];

// const Navbar = ({ isMock = false }) => {
//     const location = useLocation();
//     const [selected, setSelected] = useState("/homescreen");

//     useEffect(() => {
//         if (!isMock) {
//             setSelected(location.pathname);
//         }
//     }, [location.pathname, isMock]);

//     return (
//         <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-t-[24px] h-[97px] flex justify-between px-[20px] items-center">
//             {navItems.map((item, index) => {
//                 const isActive = selected === item.path;

//                 return (
//                     <div key={index} className="relative flex flex-col items-center w-[60px]">
//                         <Link 
//                             to={isMock ? "#" : item.path} 
//                             onClick={() => isMock && setSelected(item.path)} 
//                             className={`flex flex-col items-center transition-all duration-300 ${isActive ? "translate-y-[-5px]" : "translate-y-0"}`}
//                         >
//                             <img src={item.icon} alt={item.name} className="w-[24px] h-[24px]" />
//                         </Link>

//                         {isActive && (
//                             <motion.img
//                                 src="/image/homescreen/dot.svg"
//                                 alt="selected"
//                                 className="absolute bottom-[-5px] w-[5px] h-[5px]"
//                                 layoutId="dot"
//                                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                             />
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", icon: "/image/homescreen/Home.svg", path: "/homescreen" },
    { name: "Cards", icon: "/image/homescreen/cards.svg", path: "/cards" },
    { name: "Insights", icon: "/image/homescreen/insights.svg", path: "/insights" },
    { name: "Invite", icon: "/image/homescreen/invite.svg", path: "/invite" },
];

const Navbar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState("/homescreen");

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);

    return (
        <div className="fixed bottom-0 mx-auto w-[100%] max-w-[375px] h-[64px] bg-gray-100 shadow-lg rounded-t-[24px]  flex justify-between items-center z-40">
            {navItems.slice(0, 2).map((item, index) => {
                const isActive = selected === item.path;
                return (
                    <div key={index} className="relative flex flex-col items-center w-[75px]">
                        <Link 
                            to={item.path} 
                            className={`flex flex-col items-center transition-all duration-300 ${isActive ? "translate-y-[-5px]" : "translate-y-0"}`}
                        >
                            <img src={item.icon} alt={item.name} className="w-[38px] h-[38px]" />
                        </Link>
                        {isActive && (
                            <motion.img
                                src="/image/homescreen/dot.svg"
                                alt="selected"
                                className="absolute bottom-[-5px] w-[5px] h-[5px]"
                                layoutId="dot"
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        )}
                    </div>
                );
            })}

            {/* Transfer Button (Ở giữa) */}
            <div className="relative flex justify-center items-center p-[8px]">
                <Link to="/transfer" className="flex justify-center items-center  rounded-full ">
                    <img src="/image/homescreen/Transfers.svg" alt="Transfer" className="w-[48px] h-[48px]" />
                </Link>
            </div>

            {navItems.slice(2).map((item, index) => {
                const isActive = selected === item.path;
                return (
                    <div key={index} className="relative flex flex-col items-center w-[75px]">
                        <Link 
                            to={item.path} 
                            className={`flex flex-col items-center transition-all duration-300 ${isActive ? "translate-y-[-5px]" : "translate-y-0"}`}
                        >
                            <img src={item.icon} alt={item.name} className="w-[38px] h-[38px]" />
                        </Link>
                        {isActive && (
                            <motion.img
                                src="/image/homescreen/dot.svg"
                                alt="selected"
                                className="absolute bottom-[-5px] w-[5px] h-[5px]"
                                layoutId="dot"
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Navbar;

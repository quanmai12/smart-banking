import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

export default function VerifyType() {

    const navigate = useNavigate();
    const methods = [
        {
          icon: "\ud83c\udf10", // Placeholder icon
          title: "Passport",
          description: "Issued in United Kingdom",
          path: "/image/identity-card.svg",
          route: "/verify/passport"
        },
        {
          icon: "\ud83d\udc64", // Placeholder icon
          title: "National identity card",
          description: "Issued in United Kingdom",
          path: "/image/passport.svg",
          route: "/camera-access"
        },
        {
          icon: "\ud83d\udcda", // Placeholder icon
          title: "Driving license",
          description: "Issued in United Kingdom",
          path: "/image/driver-license.svg",
          route: "/verify/passport"
        },
      ];

    const checks = [
        { text: "it hasn’t expired"},
        { text: "it is still valid"},
        { text: "it matches your identity"}
    ];

    return (
        <Wrapper className="bg-gray-100">
            <div className="mx-auto max-w-md pt-[52px] flex-col ">
                <div className="text-[#15131f] text-[32px] font-semibold  leading-9">Verify your identity</div>
                <div className=" opacity-60  text-[#132f38] text-[15px] font-medium  leading-[18px] pt-4">We need to check that you are who you say you are. <br /> Here’s how you can do it.</div>
            </div>
            <div className="mt-5 max-w-md mx-auto  rounded-lg">
                <h2 className="text-lg font-semibold mb-2">Method of verification</h2>
                <div className="space-y-3">
                    {methods.map((method, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-white rounded-lg  cursor-pointer hover:bg-gray-100 transition"
                            onClick={() => navigate(method.route)}
                        >
                            <div className="flex items-center space-x-3">
                                <img src={method.path} alt={method.title} />
                                <div>
                                    <p className="font-bold">{method.title}</p>
                                    <p className="text-sm text-gray-600">{method.description}</p>
                                </div>
                            </div>
                            <img src="/image/right-arrow.svg" alt="check" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-8">
                <div className="w-full max-w-md">
                    <h2 className="text-md font-semibold text-gray-900 mb-4">
                        Make sure that your document:
                    </h2>

                    {/* Danh sách kiểm tra */}
                    <div className="border-2 rounded-[25px] p-4 bg-gray-50">
                        {checks.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 mb-4 last:mb-0">
                                <img src="/image/check.svg" alt="" />
                                <span className="text-gray-700 font-medium pl-2">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex mx-auto max-w-md item-center justify-center">
                {/* Skip */}
                <button className="mt-6 text-[17px] text-primary font-bold hover:underline">
                        Skip for now
                </button>
            </div>
        </Wrapper>
    )
}
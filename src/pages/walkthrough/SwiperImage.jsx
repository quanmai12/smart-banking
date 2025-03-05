import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../style/customPagination.css";

const SwiperImage = () => {
  return (
    <div className="relative w-full">
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        modules={[Pagination]}
        slidesPerView="auto"
        centeredSlides={true}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="flex flex-col items-start">
          <h2 className="text-left text-4xl sm:text-5xl font-semibold leading-tight max-w-xs sm:max-w-sm pl-4 pb-10">
            Managing your money has never been so easy.
          </h2>
          <img src="/image/Managing-money.png" alt="" className="w-full max-w-md" />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="flex flex-col items-start">
          <h2 className="text-left text-4xl sm:text-5xl font-semibold leading-tight max-w-xs sm:max-w-sm pl-4 pb-10">
            Spend smarter every day, all from one app.
          </h2>
          <div className="w-full flex justify-center">
            <img src="/image/Onboarding-illustration.png" alt="" className="w-auto max-w-md" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative flex flex-col items-start">
          <h2 className="text-left text-4xl sm:text-5xl font-semibold leading-tight max-w-xs sm:max-w-sm pl-4">
            Safe and secure international transactions.
          </h2>
          <div className="w-full flex justify-center -mt-8">
            <img src="/image/Safe-transactions.png" alt="" className="w-auto max-w-md" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

  );
};

export default SwiperImage;

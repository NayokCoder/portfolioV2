import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { skills } from "@/lib/skills";

const Swip = () => {
  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-7xl mx-auto py-12"
      >
        {skills.map((item) => (
          <SwiperSlide key={item.id} className="!w-80">
            <div
              className="flex flex-col items-center space-y-4 rounded-xl p-8 glassyBg text-white
              transition-all duration-300 cursor-pointer
              hover:bg-[rgba(40,40,40,0.45)]
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.45),inset_0_0_25px_rgba(255,255,255,0.06)]
              hover:scale-[1.04]
              backdrop-blur-xl border border-white/10
              h-72"
            >
              <div className="flex items-center justify-center w-32 h-32 bg-black rounded-xl">
                <Image src={item.logo} alt={item.name} width={80} height={80} className="opacity-90 w-20 h-20 object-contain" />
              </div>
              <p className="text-center text-2xl font-semibold">{item.name}</p>
              <p className="text-center text-sm text-gray-400">{item.proficiency}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swip;

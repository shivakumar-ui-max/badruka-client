import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { images } from "../images/images";

// Import Swiper styles
import "swiper/css";

const Glimps = () => {
   return (
      <div className="mt-16" id="glimps">
         <h3 className="text-center text-3xl uppercase tracking-wide textBlack font-bold">
            Glimps
         </h3>
         <p className="text-center mt-4 capitalize text-base text-slate-300 tracking-wider">
            glimps of 2023 abacus event
         </p>
         <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            loop={true}
            slidesPerView={1}
            breakpoints={{
               640: {
                  slidesPerView: 3,
               },
            }}
            className=" mt-11 black md:pl-16"
         >
            {images.map((image) => (
               <SwiperSlide key={image.id}>
                  <div className="w-96 h-60">
                     <img
                        loading="lazy"
                        width={384}
                        height={240}
                        src={image.img}
                        alt="pic1"
                        className="object-cover w-full h-full"
                     />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Glimps;

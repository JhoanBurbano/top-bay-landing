import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import { testimonials } from "../constants/testimonials.contants";
import CardTestimonial from "./CardTestimonial";

const TestimonialList = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      className=" xl:w-[70%] m-auto"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="py-10">
          <CardTestimonial {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialList;

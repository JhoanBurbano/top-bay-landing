import { Autoplay } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"
import { gallery } from "../constants/gallery.constants"

const GalleryList = () => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    modules={[ Autoplay]}
    className="p-4"
    autoplay={{delay: 2000, disableOnInteraction: false}}
  >
    {gallery.map((image, index) => (
      <SwiperSlide key={index} className="py-10">
        <img src={image.source} alt={image.alt} className="w-full h-full object-cover rounded-xl" />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default GalleryList
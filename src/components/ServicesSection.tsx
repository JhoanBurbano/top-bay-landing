import { Services } from "../constants/services.constant"
import CardService from "./CardService"
import book from "../assets/waves.svg"
import { PathsEnum } from "../enums/paths.enum"

const ServicesSection = () => {
  return (
    <section className="min-h-[95vh] bg-white pt-16 flex flex-col gap-10 relative" id={PathsEnum.SERVICES}>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"><b className="text-blue-500 font-bold animate__animated animate__fadeInleft">OUR</b> SERVICES</h2>
        <main className="w-[95%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[210px] items-stretch content-stretch flex-1">
            {
                Services.map((service, index) => (
                    <CardService key={index} {...service} />))
            }
        </main>
        <img src={book} alt="book separator" className="rotate-180 w-full absolute bottom-0 left-0" />
    </section>
  )
}

export default ServicesSection
import AboutSection from "../components/AboutSection"
import FooterSection from "../components/FooterSection"
import HeroBanner from "../components/HeroBanner"
import ServicesSection from "../components/ServicesSection"
import TestimonialSection from "../components/TestimonialSection"


const Home = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
        <HeroBanner />
        <ServicesSection />
        <AboutSection />
        <TestimonialSection/>
        <FooterSection />
    </div>
  )
}

export default Home
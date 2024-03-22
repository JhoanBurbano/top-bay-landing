import divider from "../assets/wavesOpacity.svg";
import dividerFooter from "../assets/wavesDark.svg";
import MapComponent from "./MapComponent";
import ContactComponent from "./ContactComponent";
import { PathsEnum } from "../enums/paths.enum";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <>
      <section className="pt-44 bg-blue-500 relative min-h-[95vh] flex flex-col items-stretch pb-[100px] md:flex-row" id={PathsEnum.CONTACT}>
        <img
          src={divider}
          alt="section divider"
          className="w-full absolute top-0 left-0"
        />
        <div className="md:w-[50%] flex flex-col items-center gap-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-black">
            CONTACT <b className="font-bold text-white">US</b>
          </h2>
          <ContactComponent/>
        </div>
        <div className="flex-1">
          <MapComponent />
        </div>
        <img
          src={dividerFooter}
          alt="section divider"
          className="w-full absolute bottom-0 left-0 rotate-180 h-[70px]"
        />
      </section>
      <footer className="bg-[#1E3A66] min-h-[10vh] flex  justify-between text-white p-8 gap-4">
        <p>© 2024 - Top Bay Area Services - All rights reserved.</p>
        <Link to={PathsEnum.PRIVACY_AND_POLICY} className="text-blue-100">Privacy & Policy</Link>
      </footer>
    </>
  );
};

export default FooterSection;

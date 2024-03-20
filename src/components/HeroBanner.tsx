import waves from "../assets/wavesOpacity.svg";
import personCleaner from "../assets/person_cleaner.png";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const HeroBanner = () => {
  return (
      <section className="bg-blue-500 h-[95vh]  flex flex-col pt-[150px] lg:flex-row relative lg:pt-0 overflow-hidden 2xl:pl-28">
        <main className="self-center flex flex-col px-4 gap-4 w-[80%] m-auto text-center md:text-left">
          <h2 className="font-bold text-white text-4xl">
            Revamp Your Cleaning Services!
          </h2>
          <p className="text-white">
            Top Bay Area Services is a leading provider of cleaning services
            consulting in Bay Area CA, USA.
          </p>
          <span className="flex gap-2 flex-col items-center sm:items-start sm:flex-row">
            <i className="p-2 bg-[#00000022] max-w-max rounded-lg text-white flex gap-2 text-sm md:text-md">
              {" "}
              <EnvelopeIcon className="h-6 w-6 text-white" />{" "}
              info@topcleaningsf.com
            </i>
            <i className="p-2 bg-[#00000022] max-w-max rounded-lg text-white flex gap-2 text-sm md:text-md">
              {" "}
              <MapPinIcon className="h-6 w-6 text-white" /> San Francisco, CA
            </i>
          </span>
          <button className="max-w-max py-2 px-4 rounded-full bg-white text-blue-500 font-semibold hover:bg-[#ffffffdd] m-auto sm:m-0">
            Get Consultation
          </button>
        </main>
        <img
          src={personCleaner}
          alt="man with cleaning equipment"
          className="self-end lg:mb-[60px] max-h-[524px] md:max-h-[600px] mx-auto lg:max-h-[75vh]"
        />

        <img
          src={waves}
          className="w-full h-[40px] sm:h-[100px] lg:h-[150px] rotate-180 absolute bottom-0 left-0"
        />
      </section>
  );
};

export default HeroBanner;

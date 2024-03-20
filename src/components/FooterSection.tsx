import divider from "../assets/wavesOpacity.svg";
import dividerFooter from "../assets/wavesDark.svg";
import MapComponent from "./MapComponent";

const FooterSection = () => {
  return (
    <>
      <section className="pt-44 bg-blue-500 relative min-h-[95vh] flex flex-col items-stretch pb-[100px] md:flex-row">
        <img
          src={divider}
          alt="section divider"
          className="w-full absolute top-0 left-0"
        />
        <div className="md:w-[50%] flex flex-col items-center gap-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-black">
            CONTACT <b className="font-bold text-white">US</b>
          </h2>
          <form className="flex flex-col gap-4 w-[90%]" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="Name" className="p-2 rounded-lg" />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg"
            />
            <textarea placeholder="Message" className="p-2 rounded-lg h-32 resize-none" />
            <button className="bg-black text-white font-bold py-2 rounded-lg hover:text-yellow-300 hover:bg-zinc-900">
              Send
            </button>
          </form>
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
      <footer className="bg-[#1E3A66] min-h-[10vh] flex flex-col justify-end text-white p-8">
        <p>© 2024 - Top Bay Area Services - All rights reserved.</p>
      </footer>
    </>
  );
};

export default FooterSection;

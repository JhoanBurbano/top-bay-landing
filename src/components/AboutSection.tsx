import teamwork from "../assets/teamwork.png";
import book from "../assets/book.svg";
import { PathsEnum } from "../enums/paths.enum";


const AboutSection = () => {
  return (
    <article className="min-h-[95vh] relative pt-16 flex flex-col gap-10 bg-yellow-300 pb-[150px]" id={PathsEnum.ABOUT}>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
        ABOUT <b className="text-blue-500 font-bold">US</b>
      </h2>
      <main className="flex items-center flex-col mb-[150px] xl:flex-row 2xl:px-[5%]">
        <p className="lg:w-[70%] lg:m-auto w-[80%] text-md lg:text-base lg:text-justify bg-yellow-200 p-4 rounded-xl">
          Welcome to <b className="font-semibold">Top Bay Aea Services</b>, a leading provider of cleaning
          services and cleaning organizations consulting in the Bay Area, California, USA. With our
          exceptional expertise and dedication, we strive to deliver top-notch
          cleaning solutions tailored to meet the unique needs of our clients.
          At top bay area services, we understand the importance of a clean and
          well-maintained environment. Our team of experienced professionals is
          committed to delivering high-quality cleaning services that exceed
          expectations. Whether you need assistance with residential or
          commercial cleaning, we have the knowledge and skills to ensure a
          spotless and hygienic space. Trust us to provide reliable and
          efficient cleaning solutions that enhance the overall appearance and
          cleanliness of your premises.
        </p>
        <img src={teamwork} alt="Four people with black t-shirts" className="w-[80%] max-w-[800px]" />
      </main>
      <img src={book} alt="book shape separator" className="rotate-180 w-full absolute bottom-0 left-0" />
    </article>
  );
};

export default AboutSection;

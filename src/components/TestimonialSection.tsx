import { PathsEnum } from "../enums/paths.enum";
import GalleryList from "./GalleryList";
import TestimonialList from "./TestimonialList";

const TestimonialSection = () => {
  return (
    <section className="pt-16 flex gap-6 min-h-[95vh] flex-col" id={PathsEnum.TESTIMONIALS}>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">TESTIMONIALS</h2>
      <div className="flex gap-10 flex-col xl:flex-row xl:items-center">
        <div className="xl:w-[38%]">
          <TestimonialList />
        </div>
        <div className=" w-[60%] m-auto xl:w-[58%] xl:p-0 xl:m-0">
          {/* <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">GALLERY</h2> */}
          <GalleryList />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

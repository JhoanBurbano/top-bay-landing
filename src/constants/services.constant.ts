import {
  HomeModernIcon,
  BuildingOffice2Icon,
  TruckIcon,
  RectangleGroupIcon,
  CakeIcon,
  ComputerDesktopIcon,
  SparklesIcon,
  InboxStackIcon,
} from "@heroicons/react/24/solid";
import { Service } from "../interfaces/service.interface";
import { ServicesEnum } from "../enums/service.enum";

export const Services: Service[] = [
  {
    title: ServicesEnum.RESIDENTIAL_CLEANING_SERVICES,
    alt: "Modern living room interior with colonial style furniture and bright floor.",
    description:
      "Expert cleaning solutions for your home, tailored to meet your specific needs and ensure a clean and healthy living environment.",
    icon: HomeModernIcon,
    source:
      "https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/blond-woman-cleaning-furniture.mp4",
    type: "video",
    thumb:"https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/blond-woman-cleaning-furniture.png",
  },
  {
    title: ServicesEnum.COMMERCIAL_CLEANING_SERVICES,
    alt: "Hotel lobby interior with reception desk, marble floor and crystal lamp.",
    description:
      "Professional cleaning services for businesses of all sizes, maintaining a clean and tidy workplace to enhance productivity and create a positive impression.",
    icon: BuildingOffice2Icon,
    source:
      "https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/cleaning_man_indoor.mp4",
    type: "video",
    thumb:"https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/cleaning_man_indoor.png",
  },
  {
    title: ServicesEnum.MOVE_IN_MOVE_OUT_CLEANING,
    alt: "Luxurious dining room with a large dining table, chairs, crystal chandelier, kitchen ",
    description:
      "Through cleaning services for when you're moving in or out, leaving your old or new place spotless and ready for the next occupant.",
    icon: TruckIcon,
    source:
      "https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/new_home_empty.mp4",
    type: "video",
    thumb:"https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/new_home_empty.png",
  },
  {
    title: ServicesEnum.POST_CONSTRUCTION_CLEANING,
    alt: "blond, beautiful woman is overjoyed with the idea to expand the loft",
    description:
      "Specialized cleaning to remove dust, debris, and traces of construction, ensuring a clean and presentable space after renovations or construction projects.",
    icon: RectangleGroupIcon,
    source:
      "https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/two_builders_walk_in_construction.mp4",
    type: "video",
    thumb:"https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/two_builders_walk_in_construction.png",
  },
  {
    title: ServicesEnum.EVENT_CLEANUP_SERVICES,
    alt: "Cupcake market with a party in the background.",
    description:
      "Efficient event cleanup services to handle post-event mess and restore the venue to its pristine condition, allowing you to focus on the success of your event.",
    icon: CakeIcon,
    source:
      "https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/people_black_woman_african_american.mp4",
    type: "video",
    thumb:"https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/people_black_woman_african_american.png",
  },
  {
    title: ServicesEnum.CLEANING_ORGANIZATION_CONSULTING,
    alt: "gray computer monitor",
    description:
      "Professional consultancy services to optimize and streamline your office space, improving efficiency and creating a well-organized workspace.",
    icon: ComputerDesktopIcon,
    source:
      "https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/confortable_office_clean.mp4",
    type: "video",
    thumb:"https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/confortable_office_clean.png",
  },
  {
    title: ServicesEnum.CARPET_CLEANING,
    alt: "Laminate parquete floor. Light wooden texture. Beige soft carpet. Warm interior design",
    description:
      "We can provide a quality job to take care of floors even if you had hard floor, wood or carpet.",
    icon: SparklesIcon,
    source:
      "https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/cleaning_floor.mp4",
    type: "video",
    thumb:"https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/cleaning_floor.png",
  },
  {
    title: ServicesEnum.UPHOLSTERY,
    alt: "Portrait of young woman in white shirt and jeans holding in hands wireless vacuum cleaner while cleaning in living room at home, copy space, back view. Housework, cleanig and chores concept",
    description:
      "We conect you with expertise crew to professional care of your uphostery, all types of fabrics and odor extraction and desinfection.",
    icon: InboxStackIcon,
    source:
      "https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/clean_living_room.mp4",
    type: "video",
    thumb:"https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/freelance/clean_living_room.png",
  },
];

export const ServicesOptions = Services.map((service) => {
  return {
    value: service.title,
    label: service.title,
  };
});

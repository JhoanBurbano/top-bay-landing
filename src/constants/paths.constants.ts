import { PathsEnum } from "../enums/paths.enum";
import { Path } from "../interfaces/path.interface";

export const PathList: Array<Path> = [
  { name: "Home", path: PathsEnum.HOME },
  { name: "About", path: PathsEnum.ABOUT },
  { name: "Services", path: PathsEnum.SERVICES },
  { name: "Testimonials", path: PathsEnum.TESTIMONIALS },
  { name: "Contact Us", path: PathsEnum.CONTACT },
];

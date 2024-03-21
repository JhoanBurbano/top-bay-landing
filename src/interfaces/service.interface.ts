import { ServicesEnum } from "../enums/service.enum";

export interface Service {
    title: ServicesEnum;
    alt: string;
    description: string;
    icon: React.JSXElementConstructor<any>;
    source: string;
    type: "image" | "video";
    thumb: string
  }
import React from "react";
import { Service } from "../interfaces/service.interface";
import divider from "../assets/waves.svg";

interface CardServiceProps extends Service {}

const CardService: React.FC<CardServiceProps> = ({
  description,
  icon: Icon,
  source,
  title,
  alt,
  type,
  thumb,
}) => {
  return (
    <article
      className={`relative max-h-min flex flex-col text-white items-center rounded-xl overflow-hidden m-auto h-full animate__animated animate__fadeIn`}
    >
      {type === "image" ? (
        <img src={source} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <video
        preload="auto"
          autoPlay={true}
          className="h-full w-full object-cover"
          poster={thumb}
          loop
          muted
          onTimeUpdate={(e)=>e.currentTarget.currentTime>5?e.currentTarget.currentTime=0:null}
        >
            <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <span className="z-10 flex-1 bg-yellow-300 text-black min-h-[220px] text-center flex flex-col items-center gap-4 p-2 relative">
        <img src={divider} alt="divider" className="absolute top-0 left-[-1px] w-[102%] translate-y-[-100%] rotate-180 h-4"/>
        <Icon className="min-h-8 min-w-8 h-8 w-8" />
        <h3 className="font-bold text-2xl">{title}</h3>
        <p>{description}</p>
      </span>
    </article>
  );
};

export default CardService;

import React from "react";
import RaitingComponent from "./RaitingComponent";

interface TestimonialProps {
    description: string;
    user: {
      name: string;
      role: string;
      avatar: string;
    }
  }

const CardTestimonial: React.FC<TestimonialProps> = ({description, user: {avatar, name, role}}) => {
  return (
    <article className="w-[300px] h-[400px] bg-white rounded-xl shadow-md flex flex-col gap-2 p-4 m-auto">
        <div className="flex gap-2">
          <img
            src={avatar}
            alt="user"
            className="w-12 h-12 rounded-full"
            />
            <div>
                <h3 className="font-bold">{name}</h3>
                <p>{role}</p>
            </div>
        </div>
        <p className="text-gray-500">
          {description}
        </p>
        <RaitingComponent raiting={5} />
    </article>
  )
}

export default CardTestimonial
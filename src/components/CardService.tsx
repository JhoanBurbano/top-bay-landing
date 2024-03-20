import React from 'react'

interface CardServiceProps {
    title: string;
    description: string;
    icon: React.JSXElementConstructor<any>;
    source: string
    }

const CardService: React.FC<CardServiceProps> = ({description, icon: Icon, source, title}) => {
  return (
    <article className={`relative lg:w-[300px] xl:w-[400px] h-[300px] flex text-white items-center justify-center rounded-xl overflow-hidden m-auto`} style={{background: `url(${source})`, backgroundSize: 'cover'}}>
        <span className='z-10 flex-1 bg-[#00000055] h-full text-center flex flex-col justify-center items-center gap-4 p-2'>
        <Icon className="h-10 w-10" />
        <h3 className='font-bold text-2xl'>{title}</h3>
        <p>{description}</p>
        </span>
    </article>
  )
}

export default CardService
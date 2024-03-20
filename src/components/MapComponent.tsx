import { MapPinIcon } from "@heroicons/react/24/solid";

const MapComponent = () => {
  return (
    <div className="p-4 relative">
        <article className="absolute top-[16px] left-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] z-10 flex items-end justify-end bg-[#00000022] rounded-xl">
            <span className="w-full p-4 bg-[#ffffffef] rounded-lg m-4 flex flex-col items-center z-20">
        <MapPinIcon className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold">Location</h2>
                <p>Bay Area, CA, USA</p>
            </span>
        </article>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73862.39705544795!2d-122.48875658486172!3d37.74724036914695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808583a3a688d7b5%3A0x8c891b8457461fa9!2s%C3%81rea%20de%20la%20Bah%C3%ADa%20de%20San%20Francisco%2C%20California%2C%20EE.%20UU.!5e1!3m2!1ses!2sco!4v1710891800148!5m2!1ses!2sco"
        className="w-full h-[500px] border-0 rounded-lg"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;

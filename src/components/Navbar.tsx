import { PathList } from "../constants/paths.constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import classNames from "classnames";
import { PathsEnum } from "../enums/paths.enum";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <nav
      className={`flex min-h-[70px] items-center p-4 fixed w-full z-50 text-white flex-row gap-2 bg-blue-500 justify-between sm:justify-normal`}
    >
      <h1 className="font-bold bg-white p-2 text-blue-500 rounded-xl sm:text-white sm:bg-transparent ">
        Top Bay Area Services
      </h1>
      <ul className="flex-1 hidden justify-center gap-4 sm:flex">
        {PathList.map((path, index) => {
          if(path.path === PathsEnum.CONTACT) {
            return
          }
          return (
            <li key={index}>
                <button>
                {path.name}
                </button>
            </li>
          )
        })}
      </ul>
      <button className="py-2 px-4 border-2 border-white hover:bg-white hover:text-blue-500 active:bg-[#ffffffdd] transition-colors rounded-full hidden sm:block">
        Contact Us
      </button>
      <button className="sm:hidden cursor-pointer" onClick={()=> setNavbarOpen(true)}>
        <Bars3Icon className="h-6 w-6" />
      </button>
      <div className={classNames('fixed flex flex-col gap-4 items-center top-0 left-0 z-50 bg-blue-500 text-white sm:hidden w-full h-[100vh] transition-transform',{'translate-y-[-100%]': !navbarOpen})}>
        <button onClick={()=> setNavbarOpen(false)} className="block ml-auto p-2">
          <XMarkIcon className="h-6 w-6" />
        </button>
          <p className="text-2xl font-bold text-center">MENU</p>
      <ul className="w-[90%] h-[90%] relative flex flex-col items-center gap-10 text-xl font-semibold sm:text-2xl bg-white rounded-xl pt-10">
        {PathList.map((path, index) => {
          if(path.path === PathsEnum.CONTACT) {
            return (
              <li key={index} className="px-6 py-2 border text-yellow-300 w-[70%] text-center cursor-pointer rounded-xl bg-black hover:text-white transition-colors absolute bottom-10">
                  {path.name}
              </li>
            )
          }
          return (
            <li key={index} className="px-6 py-2 border border-black text-black w-[70%] text-center cursor-pointer rounded-xl hover:bg-black hover:text-white transition-colors">
                {path.name}
            </li>
          )
        })}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;

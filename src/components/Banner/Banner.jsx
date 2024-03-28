import { NavLink } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 rounded-3xl">
      <div className="flex flex-col justify-center md:p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-items-center md:gap-7">
        <div className="flex-auto flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl playfair">
            Books to freshen up your bookshelf
          </h1>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-9">
            <NavLink
              to="/pages_to_read"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-400 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <FaArrowRight />
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <FaArrowLeft className="w-4 h-4 text-white" />
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                View The List
              </span>
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/banner2.png"
            alt=""
            className="object-contain h-72 hidden lg:flex sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
          <div className="flex lg:hidden">
            <Marquee pauseOnClick={true} speed={30}>
              <img src="/slide1.png" alt=""  className="h-48 mx-3"/>
              <img src="/slide2.png" alt=""  className="h-48 mx-3"/>
              <img src="/slide3.png" alt=""  className="h-48 mx-3"/>
              <img src="/slide4.png" alt=""  className="h-48 mx-3"/>
              <img src="/slide1.png" alt=""  className="h-48 mx-3"/>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

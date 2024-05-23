import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Image } from "../Image/Index";
import Airpocket from "@/assets/Airpocket.svg";
import Cancel from "./assets/cances.svg";

type MobileNavPros = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const MobileNav = ({ setIsOpen, isOpen }: MobileNavPros) => {
  const location = useLocation();

  const [windowSize, setWindowSize] = useState(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  const handleResize = () => {
    // Client-side-only code
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  if (windowSize?.width && windowSize.width >= 768) {
    setIsOpen(false);
  }

  useEffect(() => {
    // Attach event listener on component mount
    window.addEventListener("resize", handleResize);

    // Detach event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={`z-[1000] fixed w-full top-0 left-0 overflow-hidden bg-[#F5F6FA] transition-all ease-in-out duration-[1.5s] ${
        isOpen ? "h-[100vh]" : "h-0"
      }`}
    >
      <div className="flex items-center justify-between bg-white h-[5rem] px-4">
        <span>
          <Image src={Airpocket} alt="Airpocket" className=" shrink-0" />
        </span>
        <span onClick={() => setIsOpen(false)}>
          <Image src={Cancel} alt="Cancel" className=" shrink-0" />
        </span>
      </div>

      <div className="mt-8">
        <div className="flex flex-col gap-4 ml-6 text-[#283841] opacity-60 ">
          <Link
            className={` text-[18px] ${
              location.pathname === "/" && "font-bold text-black"
            }`}
            to={"/"}
            // onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className={` whitespace-nowrap text-[18px] ${
              location.pathname === "/about-us" && "font-bold text-black"
            }`}
            to={"/about-us"}
            // onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            className={`text-[18px] ${
              location.pathname === "/flights" && "font-bold text-black"
            }`}
            to={"/flights"}
            // onClick={() => setIsOpen(false)}
          >
            Flights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;

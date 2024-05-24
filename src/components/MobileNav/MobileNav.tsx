import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Image } from "../Image/Index";
import Airpocket from "@/assets/Airpocket.svg";
import Cancel from "./assets/cances.svg";
import SignUp from "@/auth/Signup/Signup";
import Login from "@/auth/Login/Login";

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
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className={` whitespace-nowrap text-[18px] ${
              location.pathname === "/about-us" && "font-bold text-black"
            }`}
            to={"/about-us"}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            className={`text-[18px] ${
              location.pathname === "/flights" && "font-bold text-black"
            }`}
            to={"/flights"}
            onClick={() => setIsOpen(false)}
          >
            Flights
          </Link>
        </div>
      </div>

      <div className="mt-48 text-center w-full flex items-center justify-center max-w-lg">
        <div className="sm:mx-auto flex flex-col w-full mx-4">
          <Dialog>
            <DialogTrigger>
              <p
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 hover:shadow-md rounded-md"
              >
                Sign In
              </p>
            </DialogTrigger>
            <DialogContent className=" max-h-[90vh]   ">
              <Login />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <p
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-white bg-[#1B96D6] rounded-md cursor-pointer"
              >
                Sign Up
              </p>
            </DialogTrigger>
            <DialogContent className=" w-full flex item center justify-center h-fit my-4">
              <SignUp />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;

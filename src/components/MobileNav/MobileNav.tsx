import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Image } from "../Image/Index";
import Airpocket from "@/assets/Airpocket.svg";
import Cancel from "./assets/cances.svg";
import SignUp from "@/auth/Signup/Signup";
import Login from "@/auth/Login/Login";
import { RootState } from "@/store/store";
import { clearStorage } from "@/utils/locaStorage";

type MobileNavPros = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const MobileNav = ({ setIsOpen, isOpen }: MobileNavPros) => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user.user);

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

  const NAV_ITEM = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "About", path: "/about-us" },
    { id: "3", name: "Flight", path: "/flights" },
    { id: "4", name: "Account", path: "/account-infomation" },
    { id: "5", name: "Booked Flight", path: "/account-infomation" },
    // { id: "5", name: "Log Out", path: "/account-infomation" },
  ];

  const UNPROTECTED_ITEM = NAV_ITEM.slice(0, 3);

  const PROTECTED_ITEM = NAV_ITEM.slice(3, 5);

  const handleLogout = () => {
    setIsOpen(false);
    clearStorage();
    window.location.href = "/";
  };

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
          {UNPROTECTED_ITEM.map((item) => {
            return (
              <Link
                key={item.id}
                className={` text-[18px] ${
                  location.pathname === item.path && "font-bold text-black"
                }`}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}

          {PROTECTED_ITEM.map(
            (item) =>
              user?._id && (
                <Link
                  className={` text-[18px] ${
                    location.pathname === item.path && "font-bold text-black"
                  }`}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
          )}
        </div>
      </div>

      {!user?._id && (
        <div className="mt-32 text-center w-full flex items-center justify-center max-w-lg mx-auto">
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
      )}

      {user?._id && (
        <div className="mt-32 text-center w-full flex items-center justify-center max-w-lg mx-auto">
          <div className="sm:mx-auto flex flex-col w-full mx-4">
            <p
              onClick={handleLogout}
              className="px-3 py-2 text-white bg-[#1B96D6] rounded-md cursor-pointer"
            >
              Logout
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MobileNav;

import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import MaxWidthWrapper from "../../components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import { Image } from "../../components/Image/Index";
import Airpocket from "../../assets/Airpocket.svg";
import SignUp from "@/auth/Signup/Signup";
import Login from "@/auth/Login/Login";
import { RootState } from "@/store/store";
import User from "./assets/user.svg";
import DownArrow from "./assets/downarrow.svg";
import Menu from "./assets/Menu.svg";
import MobileNav from "@/components/MobileNav/MobileNav";
import { clearStorage } from "@/utils/locaStorage";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleLogOut = () => {
    clearStorage();
    window.location.href = "/";
    navigate(location.pathname);
  };

  return (
    <div>
      <MaxWidthWrapper>
        <section className="h-24 w-full flex justify-between items-center px-2 md:px-6 bg-transparent relative z-[90] ">
          <div className=" w-full flex items-center md:gap-20 lg:gap-28">
            <Link to={"/"}>
              <Image
                src={Airpocket}
                alt="Airpocket"
                className="mr-4 md:mr-0 w-full shrink-0"
              />
            </Link>
            <div className="hidden md:flex gap-6 text-[#283841] opacity-60 ">
              <Link
                className={`${
                  location.pathname === "/" && "font-bold text-black"
                }`}
                to={"/"}
              >
                Home
              </Link>
              <Link
                className={` whitespace-nowrap ${
                  location.pathname === "/about-us" && "font-bold text-black"
                }`}
                to={"/about-us"}
              >
                About Us
              </Link>
              <Link
                className={`${
                  location.pathname === "/flights" && "font-bold text-black"
                }`}
                to={"/flights"}
              >
                Flights
              </Link>
            </div>
          </div>

          <div className="w-full flex justify-end">
            {user?._id ? (
              <div
                ref={modalRef}
                onClick={() => setShowDropdown(!showDropdown)}
                className=" relative bg-[#1B96D6]  rounded-md "
              >
                <div className=" px-4 py-2 ml-6  w-full cursor-pointer hidden md:flex items-center gap-2 ">
                  <Image src={User} alt="user" />

                  <p className=" text-white">{user.firstname}</p>
                  <Image src={DownArrow} alt="arrow_down" />
                </div>

                {showDropdown && (
                  <div
                    className="bg-white text-black rounded-md absolute top-[4rem] z-[10000]  h-fit flex flex-col gap-4
                  px-4 py-4 w-[11rem] shadow-md
                  "
                  >
                    <Link to="/account-infomation">Account</Link>
                    <Link to="/account-infomation">Booked Flight</Link>
                    <span className="cursor-pointer" onClick={handleLogOut}>
                      Log out
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-full hidden items-center justify-end md:flex gap-4">
                <div className="w-[90%]! mx-4">
                  <Dialog>
                    <DialogTrigger>
                      <p className="px-4 py-2 hover:shadow-md rounded-md">
                        Sign In
                      </p>
                    </DialogTrigger>
                    <DialogContent className=" max-h-[90vh] w-full  ">
                      <Login />
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="w-[90vw]! mx-4">
                  <Dialog>
                    <DialogTrigger>
                      <p className="px-3 py-2 text-white bg-[#1B96D6] rounded-md cursor-pointer">
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

            <div className="md:hidden ">
              <span onClick={() => setIsOpen(!isOpen)}>
                <Image src={Menu} alt="Menu" className="cursor-pointer" />
              </span>
            </div>
          </div>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
      </MaxWidthWrapper>

      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

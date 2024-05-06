import { Link, Outlet, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import MaxWidthWrapper from "../../components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import { Image } from "../../components/Image/Index";
import Airpocket from "../../assets/Airpocket.svg";
import SignUp from "@/auth/Signup/Signup";
import Login from "@/auth/Login/Login";
import Footer from "@/components/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <MaxWidthWrapper>
        <section className="h-24 w-full flex justify-between items-center px-6 bg-transparent">
          <div className=" w-full flex items-center md:gap-20 lg:gap-28">
            <Image src={Airpocket} alt="Airpocket" />
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
          <div className="w-full hidden items-center justify-end md:flex gap-4">
            <Dialog>
              <DialogTrigger>
                <button className="px-4 py-2 hover:shadow-md rounded-md">
                  Sign In
                </button>
              </DialogTrigger>
              <DialogContent className=" max-h-[90vh]   ">
                <Login />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger>
                <button className="px-3 py-2 text-white bg-[#1B96D6] rounded-md cursor-pointer">
                  Sign Up
                </button>
              </DialogTrigger>
              <DialogContent className=" overflow-y-auto min-h-full max-h-[50%] ">
                <SignUp />
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </MaxWidthWrapper>

      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

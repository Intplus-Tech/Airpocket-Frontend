import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

import { Image } from "../Image/Index";
import Logo from "@/assets/logo.jpeg";
import MaxwidthWrapper from "../MaxwidthWrapper.tsx/MaxWidthWrapper";
import X from "./assets/x.png";
import Tiktok from "./assets/tiktok.png";

const Footer = () => {
  return (
    <MaxwidthWrapper>
      <div className="px-4 md:flex justify-between mb-5">
        <div className="space-y-3 max-w-[420px]">
          <div className="relative w-28 h-8">
            <Image src={Logo} alt="logo" />
          </div>
          <p className="text-xs md:text-sm md:max-w-[20rem] text-gray-600">
            Our passion for travel fuels our dedication to exceeding
            expectations and delivering unparalleled value, ensuring that every
            journey with Airpockets is an extraordinary adventure.
          </p>
          <div className="pt-6 space-y-2">
            <p className="text-primaryColor font-semibold text-sm lg:hidden">
              Follow us
            </p>
            <div className="space-x-3 flex items-center">
              <Link
                to={"https://www.instagram.com/airpocketstravels"}
                className="inline-block  border rounded-full  p-2 lg:border-gray-300"
              >
                <FaInstagram className="text-primaryColor lg:text-[#333333]" />
              </Link>
              <Link
                to={
                  "https://www.tiktok.com/@airpocketstravels?_t=8mfNVkAGf38&_r=1"
                }
                className="inline-block  border rounded-full p-2 lg:border-gray-300"
              >
                <Image
                  src={Tiktok}
                  alt="Tiktok"
                  className="text-black bg-black h-4 w-4 "
                />
              </Link>
              <Link
                to={"https://x.com/airpocketstrave"}
                className=" inline-block border rounded-full p-2 lg:border-gray-300"
              >
                <Image
                  src={X}
                  alt="X"
                  className="text-black bg-black h-4 w-4 "
                />
                {/* <FaTwitter className="text-primaryColor lg:text-[#333333]" /> */}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between lg:gap-x-28">
          <div className="space-y-4 pt-6">
            <h3 className="font-semibold">Product</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Link to={"/about-us"}>About</Link>
              </li>
              <li>
                <Link to={"/career"}>Career</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 pt-6">
            <h3 className="font-semibold">Help</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Link to={"/faqs"}>FAQ</Link>
              </li>
              <li>
                <Link to={"/terms&conditon"}>Terms and Contitions</Link>
              </li>

              <li>
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 mb-6">
          <h3 className="font-semibold">Contact Information</h3>
          <div className="text-gray-600 space-y-2 mt-2">
            <p>42 Local Airport Road, Ikeja Lagos</p>
            <p>+234 816 971 5754</p>
            <p>connect@airpockets.co</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex mx-auto justify-center my-8">
        <ul className="flex gap-x-6 text-gray-700 text-sm">
          <li>
            <Link to={"/terms"}>Terms</Link>
          </li>
          <li>
            <Link to={"/privacy-policy"}>Privacy</Link>
          </li>
        </ul>
      </div>
    </MaxwidthWrapper>
  );
};
export default Footer;

"use client";

import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useMemo, useState } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";
import Select, { GroupBase, SingleValue } from "react-select";
import countryList from "react-select-country-list";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.jpeg";
import { Image } from "@/components/Image/Index";



const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [countryValue, setCountryValue] = useState("");
  const COUNTRY_LIST = useMemo(() => countryList().getData(), []);

  const handleChange = (newValue: SingleValue<string>) => {
    if (newValue) {
      setCountryValue(newValue);
    }
  };
  return (
    // <div className="mt-[-3.5rem] inset-0 z-10">
    <div className=" mt-[-2rem] w-[80vw] max-w-[480px] mx-auto  rounded-lg p-2 relative">
      <div className="py-6 px-3">
        <div className="w-36 h-10 mx-auto relative">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="text-center my-3 space-y-1">
          <p>Create your account</p>
          <p className="text-sm text-gray-500">
            Get started with best of flight prices
          </p>
        </div>
        <form>
          <div className="space-y-6 mt-10">
            <div className="flex gap-6">
              <div className="relative">
                <input
                  type="text"
                  className="peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
                />
                <p className="peer-focus:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                  First Name
                </p>
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
                />
                <p className="peer-focus:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                  Last Name
                </p>
              </div>
            </div>

            <div className="relative">
              {/* <input
									type='number'
									className='peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor'
								/> */}
              <PhoneInput
                country={"ng"}
                inputClass="!border !border-gray-400 !focus:border-primaryColor rounded-lg !w-full !h-10 px-4 py-2 focus:outline-none text-primaryColor"
                containerClass="peer"
                placeholder="+234 8000000000"
              />

              <p className="peer-focus-within:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Phone Number
              </p>
            </div>

            <div className="relative">
              <Select
                options={COUNTRY_LIST}
                value={countryValue}
                onChange={handleChange}
                placeholder=""
                className="peer border-none rounded-lg w-full h-10  !focus:outline-none text-primaryColor"
              />
              <p className="peer-focus-within:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Country
              </p>
            </div>

            <div className="relative">
              <input
                type="text"
                className="peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
              />
              <p className="peer-focus:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Gender
              </p>
            </div>

            <div className="relative">
              <input
                type="email"
                className="peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
              />
              <p className="peer-focus:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Email address
              </p>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
              />
              <p className="peer-focus:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Password
              </p>
              <span
                className="absolute right-6 translate-y-[100%] text-primaryColor"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-4 h-4" />
                ) : (
                  <EyeIcon className="w-4 h-4" />
                )}
              </span>
            </div>
          </div>
          {/* <div className="flex text-xs justify-between item-center "> */}
          <div className="space-x-1 text-xs flex items-start mt-2 text-gray-500">
            <input type="checkbox" name="" id="" className="mt-1 mr-2" />
            <span>
              By entering and registering on the site, I agree to our{" "}
              <Link to="" className="text-SecondaryColor">
                Terms & Conditions
              </Link>
            </span>
          </div>
          {/* </div> */}
          <button className="bg-gray-100 w-full rounded-md p-3 text-gray-500 mt-5">
            Sign Up
          </button>
          <div className="text-sm flex  items-center gap-3 justify-center py-4 text-gray-500">
            <button>Already have an account?</button>
            <Link to="/sign-in" className="text-SecondaryColor">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default SignUp;

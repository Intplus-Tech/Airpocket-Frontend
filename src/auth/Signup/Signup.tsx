"use client";

import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import countryList from "react-select-country-list";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import { countries } from "countries-list";
import { FieldValues, useForm } from "react-hook-form";

import Logo from "../../assets/logo.jpeg";
import { Image } from "@/components/Image/Index";
import { useToast } from "@/components/ui/use-toast";
import { signUpAccount } from "@/Features/userSlice/api";
import { useDispatch } from "react-redux";

interface countryList {
  value: string;
  label: string;
}
[];

const SignUp = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [selectedOption, setSelectedOption] = useState<countryList | null>(
    null
  );
  const [countryOptions, setCountryOptions] = useState<countryList[]>([]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (selectedCountry: countryList | null) => {
    setSelectedOption(selectedCountry);
  };

  const handleChangePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };
  console.log(errors);

  const handleSignUp = async (data: FieldValues) => {
    const response = await signUpAccount(
      {
        ...data,
        phone: `+${phoneNumber}`,
        country: selectedOption?.label,
      },
      dispatch
    );
    console.log(response.error);
    if (response?.success) {
      toast({
        // variant: "success",ss
        title: `Success`,
        // description: `${response.success.message}`,
      });
      reset();
    } else {
      toast({
        // variant: "success",
        // title: `${response?.error.status}`,
        // description: `${response?.error.message}`,
      });
    }
  };

  useEffect(() => {
    const countryList = Object.keys(countries).map((countryCode) => ({
      value: countryCode,
      label: countries[countryCode as keyof typeof countries].name,
    }));

    setCountryOptions(countryList);
  }, []);

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
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="space-y-6 mt-6">
            <div className="flex gap-6">
              <div className="relative">
                <input
                  type="text"
                  {...register("firstname", {
                    required: "Firstname is required",
                    minLength: {
                      value: 4,
                      message: "Firstname must be at least 4 characters long",
                    },
                  })}
                  className="peer border border-gray-400 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]"
                />
                <p className="peer-focus:text-[#1D91CC] text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                  First Name
                </p>
                {errors.firstname && (
                  <p className="text-red-500">
                    {errors.firstname.message as string}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  {...register("lastname", {
                    required: "lastname is required",
                    minLength: {
                      value: 4,
                      message: "lastname must be at least 4 characters long",
                    },
                  })}
                  className="peer border border-gray-400 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-1.5 focus:outline-none text-[#1D91CC]"
                />
                <p className="peer-focus:text-[#1D91CC] text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                  Last Name
                </p>
                {errors.lastname && (
                  <p className="text-red-500">
                    {errors.lastname.message as string}
                  </p>
                )}
              </div>
            </div>

            <div className="relative">
              {/* <input
									type='number'
									className='peer border border-gray-400 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-[#1D91CC]'
								/> */}
              <PhoneInput
                country={"ng"}
                inputClass="!border !border-gray-400 !focus:border-[#1D91CC] rounded-lg !w-full !h-10 px-4 py-1.5 focus:outline-none text-black"
                containerClass="peer"
                value={phoneNumber}
                onChange={handleChangePhoneNumber}
                placeholder="+234 8000000000"
              />

              <p className="peer-focus-within:text-[#1D91CC] text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Phone Number
              </p>
            </div>

            {/* <div className="relative">
              <select
                // type="text"
                className="peer border border-gray-400 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-2 focus:outline-none "
                {...register("gender")}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p className="peer-focus:text-[#1D91CC] text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Gender
              </p>
            </div> */}

            {/* <div className="relative">
              <Select
                options={countryOptions}
                onChange={handleChange}
                value={selectedOption}
                // onChange={handleChange}
                placeholder=""
                className="peer border-none rounded-lg w-full h-10    "
              />
              <p className="peer-focus-within:text-[#1D91CC] outline-none text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Country
              </p>
            </div> */}

            <div className="relative">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className="peer border border-gray-400 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-1.5 focus:outline-none text-[#1D91CC]"
              />
              <p className="peer-focus:text-[#1D91CC] text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Email address
              </p>
              {errors.email && (
                <p className="text-red-500">{errors.email.message as string}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="peer border border-gray-400 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-1.5 focus:outline-none text-[#1D91CC]"
              />
              <p className="peer-focus:text-[#1D91CC] text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Password
              </p>
              <span
                className="absolute right-6 translate-y-[100%] text-[#1D91CC]"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-4 h-4" />
                ) : (
                  <EyeIcon className="w-4 h-4" />
                )}
              </span>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("passwordConfirm")}
                className="peer border border-gray-400 focus:border-[#1D91CC] rounded-lg w-full h-10 px-4 py-1.5 focus:outline-none text-[#1D91CC]"
              />
              <p className="peer-focus:text-[#1D91CC] text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                Confirm Password
              </p>
              <span
                className="absolute right-6 translate-y-[100%] text-[#1D91CC]"
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
          <div className="space-x-1 text-xs flex items-start mt-1.5 text-gray-500">
            <input type="checkbox" name="" id="" className="mt-1 mr-2" />
            <span>
              By entering and registering on the site, I agree to our{" "}
              <Link to="" className="text-SecondaryColor">
                Terms & Conditions
              </Link>
            </span>
          </div>
          {/* </div> */}
          <button className="bg-gray-100 w-full rounded-md p-3 text-gray-500 mt-3">
            Sign Up
          </button>
          <div className="text-sm flex  items-center gap-3 justify-center py-2 text-gray-500">
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

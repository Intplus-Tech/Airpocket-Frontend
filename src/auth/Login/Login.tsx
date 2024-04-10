import { Link } from "react-router-dom";

import { Image } from "@/components/Image/Index";
import Logo from "../../assets/logo.jpeg";

const SignIn = () => {
  return (
    <div className=" mt-[-4rem] inset-0 z-10">
      <div className=" w-[80vw] mx-auto mt-16 rounded-lg p-2 relative max-w-[480px]">
        <div className="py-6 px-3">
          <div className="w-36 h-10 mx-auto relative">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="text-center my-3 space-y-1">
            <p>Login</p>
            <p className="text-sm text-gray-500">Enter Your Login Details</p>
          </div>
          <form>
            <div className="space-y-6 mt-10">
              <div className="relative">
                <input
                  type="email"
                  className="peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
                />
                <p className="peer-focus:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                  Email Address
                </p>
              </div>
              <div className="relative">
                <input
                  type="password"
                  className="peer border border-gray-400 focus:border-primaryColor rounded-lg w-full h-10 px-4 py-2 focus:outline-none text-primaryColor"
                />
                <p className="peer-focus:text-primaryColor text-gray-400 text-sm bg-white px-2 absolute top-0 left-6 translate-y-[-50%]">
                  Password
                </p>
              </div>
            </div>
            <div className="flex text-xs justify-between item-center my-2">
              <div className="space-x-1 flex items-center text-gray-500">
                <input type="checkbox" name="" id="" />
                <span>Remember Password</span>
              </div>
              <Link to="#" className="text-SecondaryColor">
                Forget Password
              </Link>
            </div>
            <button className="bg-gray-100 w-full rounded-md p-3 text-gray-500 mt-10">
              Log In
            </button>
            <div className="text-sm flex flex-col items-center justify-between py-4 text-gray-500">
              <button>Don't have an account?</button>
              <button className="text-SecondaryColor">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

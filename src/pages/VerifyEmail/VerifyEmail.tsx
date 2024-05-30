// import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CircleX } from "lucide-react";

import { Image } from "@/components/Image/Index";
import confirmation from "@/pages/Confirmation/assets/confirm.svg";
import { useVerityEmail } from "./slice/query";
import Loader from "@/components/Loader/Loader";

const VerifyEmail = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, isError } = useVerityEmail({ id });

  if (isError) {
    console.log(isError);
    return (
      <section className="max-w-xl sm:mx-auto mx-4 flex items-center justify-center h-[80vh]">
        <div>
          <p className="bg-[#F3FDFA] px-6 py-2 text-center rounded-md flex items-center justify-center gap-1 md:gap-2 capitalize">
            <span>
              <CircleX className="text-red-500" />
            </span>
            Email verificatin Failed.
          </p>

          <div className="mt-4 text-xl">
            <p>!Oops, Token is either not valid, been used or has expired</p>
          </div>

          <div className="text-center mt-4">
            <Link
              to={"/"}
              //   onClick={() => handleBookFlight()}
              className="bg-[#1D91CC] px-4 py-2 rounded-md text-white"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-xl sm:mx-auto mx-4 flex items-center justify-center h-[80vh]">
      {isLoading ? (
        <section className="fixed w-[100vw] h-full bg-[#1B96D6] bg-opacity-30 top-0 left-0 z-[100] ">
          <Loader />
          <p className="text-xl text-center h-[100vh] flex items-center justify-center z-[101]">
            Verifying....
          </p>
        </section>
      ) : (
        <div className="">
          <p className="bg-[#F3FDFA] px-6 py-2 text-center rounded-md flex items-center justify-center gap-1 md:gap-2 capitalize">
            <span>
              <Image src={confirmation} alt="confirmation" />
            </span>
            Email Verified Sucessfully
          </p>
          <div className="my-4 py-2 px-2 flex items-center justify-center max-w-[40rem] text-center">
            <p className=" cursor-pointer">
              Your Email have been verified Successfully
            </p>
          </div>

          <div className="text-center">
            <Link
              to={"/"}
              //   onClick={() => handleBookFlight()}
              className="bg-[#1D91CC] px-4 py-2 rounded-md text-white"
            >
              Back Home
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default VerifyEmail;

// import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Image } from "@/components/Image/Index";
import confirmation from "@/pages/Confirmation/assets/confirm.svg";

const VerifyEmail = () => {
  const { id } = useParams<{ id: string }>();
  //   const [status, setStatus] = useState<string>("Verifying...");
  console.log(id);
  return (
    <section className="max-w-xl sm:mx-auto mx-4 flex items-center justify-center h-[80vh]">
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
    </section>
  );
};

export default VerifyEmail;

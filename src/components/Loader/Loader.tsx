import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import Airpocket from "@/assets/Airpocket.svg";
// import { Image } from "../Image/Index";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
  return (
    <main className="w-full h-screen grid place-items-center">
      <DotLottieReact
        src="https://lottie.host/8e3ca5f2-27f8-4d92-85c3-3e70220ca43b/7ZhQMiavxb.lottie"
        loop
        autoplay
        className=" "
      />
    </main>
  );
};

export const FetchLoader = () => {
  return (
    <main className="w-full h-screen grid place-items-center">
      <DotLottieReact
        src="https://lottie.host/8e3ca5f2-27f8-4d92-85c3-3e70220ca43b/7ZhQMiavxb.lottie"
        loop
        autoplay
        className=""
      />
    </main>
  );
};

export default Loader;

export const SkeletonComponent = () => {
  return (
    <section className="mx-4 overflow-hidden">
      <div className="flex flex-col gap-1 border mb-4 rounded-md">
        <div className=" flex gap-2  justify-between h-[6rem]  px-2 py-1">
          <span className="h-fit">
            <Skeleton className="w-[10rem] h-[5rem]" />
          </span>
          <span className="h-fit">
            <Skeleton className="w-[10rem] h-[5rem]" />
          </span>
          <span className="h-fit">
            <Skeleton className="w-[10rem] h-[5rem]" />
          </span>
          <span className="h-fit">
            <Skeleton className="w-[10rem] h-[5rem]" />
          </span>
          <span className="h-fit">
            <Skeleton className="w-[10rem] h-[5rem]" />
          </span>
        </div>
        <div className="flex items-center justify-between px-2">
          <span>
            <Skeleton className=" w-[10rem]" />
          </span>
          <span>
            <Skeleton className=" w-[10rem]" />
          </span>
        </div>
      </div>

      <div className="border h-full px-1 py-1">
        <Skeleton className="h-[3rem] my-4" count={5} />
      </div>
    </section>
  );
};

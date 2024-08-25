import { getItemFromStorage } from "@/utils/locaStorage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Airpocket from "@/assets/Airpocket.svg";
import { Image } from "../Image/Index";

const Loader = () => {
  return (
    <main className="flex flex-col items-center justify-center h-[100vh] relative">
      <div className="rotating-box bg-gray-100"></div>
      <div className="text-xs z-10 w-36 h-36 flex flex-col gap-2 items-center justify-center mt-[-150px]  rounded-[50%] text-center">
        <p>
          <Image src={Airpocket} alt="Airpocket" className="h-20 w-20" />
        </p>
      </div>
    </main>
  );
};

export const FetchLoader = () => {
  const flightLocation = getItemFromStorage("location");
  return (
    <main className="flex flex-col items-center justify-center h-[100vh] relative">
      <div className="rotating-box bg-gray-100"></div>
      <div className="text-xs z-10 w-36 h-36 flex flex-col gap-2 items-center justify-center mt-[-150px]  rounded-[50%] text-center">
        <p>
          <Image
            src={Airpocket}
            alt="Airpocket"
            className="h-10 w-20 mt-[-2rem]"
          />
        </p>
        <div className="flex gap-1 font-bold">
          <span className="text-[8px]">{flightLocation?.depature?.label}</span>{" "}
          {flightLocation && <span>to</span>}{" "}
          <span className="text-[8px]">
            {flightLocation?.destination?.label}
          </span>
        </div>
      </div>
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

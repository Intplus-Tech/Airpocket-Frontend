import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute border-4 border-blue-500 border-t-transparent rounded-full w-full h-full spin-clockwise"></div>
        <div className="absolute border-4 border-green-500 border-t-transparent rounded-full w-2/3 h-2/3 spin-counterclockwise"></div>
        <div className="absolute border-4 border-red-500 border-t-transparent rounded-full w-1/3 h-1/3 spin-clockwise"></div>
      </div>
    </div>
  );
};

{
  /* <div className="flex h-[100vh] items-center justify-center text-4xl font-bold">
            Loading...
          </div> */
}

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

import { Image } from "../../../components/Image/Index";
import Swimming from "../assets/Img1.svg";
import Turkey from "../assets/Img2.svg";
import History from "../assets/Img3.svg";
import Desert from "../assets/Img4.svg";
import Water from "../assets/Img5.svg";
import BlueSquare from "../assets/Bluesquare.svg";
import SmallImage from "../assets/smallImg.svg";
import BlackStar from "../assets/Blackstar.svg";
import Location from "../assets/Location.svg";
import Jakarta from "../assets/Jakarta.svg";
import Dubai from "../assets/Dubai.svg";
import London from "../assets/London.svg";

const Places = () => {
  return (
    <main className=" max-w-screen-xl h-full mx-6 sm:mx-auto mt-8">
      <div className="mb-4">
        <h1 className="text-[20px] md:text-[43px] font-bold">
          Plan Your Vacation
        </h1>
        <p className="text-[#283841] text-opacity-70 text-[14px]">
          Tempora facere doloribus id aut. Ea maiores esse accusantium
          laboriosam. Quos commodi non assumenda quam illum. Id omnis saepe
          corrupti incidunt qui sed delectus. Eaque minus ducimus.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        <div>
          <Image src={Swimming} alt="swimmig" />
        </div>
        <div>
          <Image src={Turkey} alt="Turkey" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <Image src={History} alt="History" />
          </div>
          <div>
            <Image src={Desert} alt="Desert" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center col-span-1 my-6 h-full">
        <div className="w-fit relative">
          <Image src={Water} alt="Water" className=" " />
          <div className="absolute top-4 right-[-4rem] bg-white z-30 p-4 rounded-md flex flex-col items-start shadow-lg w-[220px] ">
            <Image
              src={SmallImage}
              alt="small image"
              // height={50}
              // width={50}
              className="relative rounded-lg pb-4 "
            />
            <div className="font-bold text-[11px] flex items-center justify-between w-full">
              <span>culpa est similique</span>
              <p className="flex gap-2">
                <Image src={BlackStar} alt="Black star" />
                <span className="font-bold">4.92</span>
              </p>
            </div>
            <p className="text-[#283841] text-opacity-70 text-[11px] py-2">
              Voluptatibus nemo amet voluptatem quia ipsa eum. Est ut voluptas.
            </p>

            <div className="flex justify-between items-center w-full">
              <p>
                $240 <span>Night</span>
              </p>
              <p className="flex items-center gap-2">
                <Image src={Location} alt="location" />
                <span>India</span>
              </p>
            </div>
          </div>
        </div>

        <div className=" grow flex flex-col  justify-center h-full col-span-2 md:pl-32">
          <div className="py-4">
            <h1 className="text-[40px] text-[#1B96D6] font-bold">About Us</h1>
            <p className="text-[#283841] text-opacity-70 text-[14px]">
              Tempora facere doloribus id aut. Ea maiores esse accusantium
              laboriosam. Quos commodi non assumenda quam illum.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <p className="flex gap-4 py-1">
              <Image src={BlueSquare} alt="BlueSquare" />
              <span className="font-bold text-xs">
                Assumenda nobis sit deserunt dolorem repudiandae occaecati
                quisquam.
              </span>
            </p>
            <p className="flex gap-4 py-1">
              <Image src={BlueSquare} alt="BlueSquare" />
              <span className="font-bold text-xs">
                Assumenda nobis sit deserunt dolorem repudiandae occaecati
                quisquam.
              </span>
            </p>
            <p className="flex gap-4 py-1">
              <Image src={BlueSquare} alt="BlueSquare" />
              <span className="font-bold text-xs">
                Assumenda nobis sit deserunt dolorem repudiandae occaecati
                quisquam.
              </span>
            </p>
            <p className="flex gap-4 py-1">
              <Image src={BlueSquare} alt="BlueSquare" />
              <span className="font-bold text-xs">
                Assumenda nobis sit deserunt dolorem repudiandae occaecati
                quisquam.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="px-0 md:px-6">
          <h1 className="font-bold text-xl lg:text-[41px]">
            Trending <span className="text-[#1B96D6]">destination</span> now
            days
          </h1>
          <p>
            Tempora facere doloribus id aut. Ea maiores esse accusantium
            laboriosam. Quos commodi non assumenda quam illum. Id omnis saepe
            corrupti incidunt qui sed delectus. Eaque minus ducimus.
          </p>
        </div>

        {/* <div className="mt-8 max-w-[30rem] md:max-w-full min-w-full overflow-x-auto grid grid-cols-3 space-x-8 md:gap-4 place-items-center"> */}
        <div className="flex gap-x-4 gap-y-10 pt-8 py-4 w-full max-w-[30rem] min-w-full overflow-x-auto wrapper md:max-w-full">
          <div className="relative min-w-[20rem] w-full">
            <Image src={Jakarta} alt="jakarta" className="rounded-lg" />
            <p className=" absolute mx-16 w-[60%] top-[-1.2rem] bg-white px-10 py-3 rounded-xl text-center">
              Jakart
            </p>
          </div>
          <div className="relative min-w-[20rem] w-full">
            <Image src={Dubai} alt="Dubai" className="rounded-lg" />
            <p className=" absolute mx-16 w-[60%] top-[-1.2rem] bg-white px-10 py-3 rounded-xl text-center">
              Dubai
            </p>
          </div>
          <div className="relative min-w-[20rem] w-full">
            <Image src={London} alt="London" className="rounded-lg" />
            <p className=" absolute mx-16 w-[60%] top-[-1.2rem] bg-white px-10 py-3 rounded-xl text-center">
              London
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Places;

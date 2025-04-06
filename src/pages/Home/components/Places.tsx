import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee"

import { Image } from "../../../components/Image/Index";
import Water from "../assets/Img5.svg";
import AboutUs from "./aboutUs";

const Places = () => {
  const destinations = [
    {
      id: "1",
      Img: "https://ik.imagekit.io/0xy9wqmrh/barcelona.jpeg",
      name: "Thailand",
    },
    {
      id: "3",
      Img: "https://ik.imagekit.io/0xy9wqmrh/singapore.jpeg",
      name: "Singapore",
    },
    {
      id: "4",
      Img: "https://ik.imagekit.io/0xy9wqmrh/thailand.jpg",
      name: "Barcelona",
    },
    {
      id: "2",
      Img: "https://ik.imagekit.io/0xy9wqmrh/thailand%20(2).jpeg",
      name: "Thailand",
    },
    {
      id: "5",
      Img: "https://ik.imagekit.io/0xy9wqmrh/shangai.jpeg",
      name: "Shangai",
    },
  ];




  return (
    <main className=" max-w-screen-xl h-full mx-6 sm:mx-auto mt-8">
      <div className="mb-4">
        <h1 className="text-[20px] md:text-[43px] font-bold">
          Plan Your Vacation
        </h1>
        <p className="text-[#283841] text-opacity-70 text-[14px]">
          Experience the best with our summer deals
        </p>
      </div>
      <Marquee pauseOnHover={true}>
        <div className="flex items-center overflow-hidden gap-4 place-items-center my-5">
          <div className="w-[300px] h-[300px]">
            <Image
              src="https://ik.imagekit.io/0xy9wqmrh/New%20Folder/japan"
              alt="kigali"
              className="shadow-md rounded-md "
            />
          </div>
          <div className="w-[300px] h-[300px]">
            <Image
              src="https://ik.imagekit.io/0xy9wqmrh/New%20Folder/japan"
              alt="Egypt"
              className="shadow-md rounded-md "
            />
          </div>
          <div className="w-[300px] h-[300px]">
            <Image
              src="https://ik.imagekit.io/0xy9wqmrh/New%20Folder/china"
              alt="zanziba"
              className="shadow-md rounded-md flex shrink-0"
            />
          </div>
          <div className="w-[300px] h-[300px]">
            <Image
              src="https://ik.imagekit.io/0xy9wqmrh/New%20Folder/london"
              alt="zanziba"
              className="shadow-md rounded-md flex shrink-0"
            />
          </div>
          <div className="w-[300px] h-[300px]">
            <Image
              src="https://ik.imagekit.io/0xy9wqmrh/New%20Folder/cairo"
              alt="zanziba"
              className="shadow-md rounded-md flex shrink-0"
            />
          </div>
          <div className="w-[300px] h-[300px] mr-4">
            <Image
              src="https://ik.imagekit.io/0xy9wqmrh/New%20Folder/coming"
              alt="zanziba"
              className="shadow-md rounded-md flex shrink-0"
            />
          </div>
        </div>
      </Marquee>

      <div>
        <AboutUs img={Water} text={"About Us"} />
      </div>

      <div>
        <div className="px-0 md:px-6">
          <h1 className="font-bold text-xl py-4 lg:text-[41px]">
            Trending <span className="text-[#1B96D6]">destinations</span>
          </h1>
          <p>Incredible places you must visit…</p>
        </div>

        <div className="mt-8 mx-auto  w-[95%]">
          <Marquee >
            {destinations.map((destination) => {
              return (
                <div key={destination.id} className="relative mx-2 ">
                  <Image
                    src={destination.Img}
                    alt={destination.name}
                    className="rounded-lg w-full mx-auto h-[20rem] "
                  />
                  <p className=" absolute top-[-1rem] px-auto  mx-auto w-full   capitalize px-10 py-3 rounded-xl text-center">
                    <span className="w-[80%] mx-auto  bg-white px-10 py-3 rounded-xl">
                      {destination.name}
                    </span>
                  </p>
                </div>
              );
            })}
          </Marquee>
        </div>
        {/* </div> */}
      </div>
    </main>
  );
};

export default Places;

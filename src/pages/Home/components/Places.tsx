import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image } from "../../../components/Image/Index";
import Water from "../assets/Img5.svg";
import BlueSquare from "../assets/Bluesquare.svg";
import SmallImage from "../assets/smallImg.svg";
import BlackStar from "../assets/Blackstar.svg";
import Location from "../assets/Location.svg";
import Jakarta from "../assets/Jakarta.svg";
import Dubai from "../assets/Dubai.svg";
import London from "../assets/London.svg";
import Zanziba from "@/pages/Home//assets/Zanziba.jpeg";
import Egypt from "@/pages/Home//assets/Egypt.jpeg";
import Kigali from "@/pages/Home//assets/Kigali.jpeg";

const Places = () => {
  const destinations = [
    {
      id: "1",
      Img: Jakarta,
      name: "jakarta",
    },
    {
      id: "2",
      Img: London,
      name: "London",
    },
    {
      id: "3",
      Img: Dubai,
      name: "Dubai",
    },
    {
      id: "4",
      Img: London,
      name: "Dubai",
    },
    {
      id: "5",
      Img: Dubai,
      name: "Dubai",
    },
  ];

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
          background: "black",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 500,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 place-items-center py-5">
        <div>
          <Image src={Kigali} alt="kigali" className="shadow-md rounded-md " />
        </div>
        <div>
          <Image src={Egypt} alt="Egypt" className="shadow-md rounded-md " />
        </div>
        <div>
          <Image
            src={Zanziba}
            alt="zanziba"
            className="shadow-md rounded-md flex shrink-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 col-span-1 my-6 h-full">
        <div className="w-fit relative">
          <Image src={Water} alt="Water" className="" />
          <div className="absolute top-4 right-[-1rem] sm:right-[-3rem] bg-white z-30 p-4 rounded-md flex flex-col items-start shadow-lg w-[200px] ">
            <Image
              src={SmallImage}
              alt="small image"
              // height={50}
              // width={50}
              className="relative rounded-lg pb-4 "
            />
            <div className="font-bold text-[11px] flex items-center justify-between w-full">
              <span>Miami, Florida, US</span>
              <p className="flex gap-2">
                <Image src={BlackStar} alt="Black star" />
                <span className="font-bold">4.92</span>
              </p>
            </div>
            <p className="text-[#283841] text-opacity-70 text-[11px] py-2">
              Get breath taking experiences from shortlets and hotels wherever
              you are traveling to on Airpockets Coming soon!{" "}
            </p>

            <div className="flex justify-between items-center w-full">
              <p>
                $70 <span>Night</span>
              </p>
              <p className="flex items-center gap-2">
                <Image src={Location} alt="location" />
                <span>Florida</span>
              </p>
            </div>
          </div>
        </div>

        <div className=" grow flex flex-col mt-4  justify-center h-full col-span-2 md:pl-32">
          <div className="py-4">
            <h1 className="text-[40px] text-[#1B96D6] font-bold">About Us</h1>
            <p className="text-[#283841] text-opacity-70 text-[14px]">
              At Airpockets, we understand that travel is more than just a trip,
              it's an experience. It's about feeling young and alive, exploring
              new cultures, and creating memories that last a lifetime. That's
              why we're dedicated to providing you with the most affordable
              luxury flights and travel packages, without compromising on
              quality or service.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <p className="flex gap-4 py-1">
              <Image src={BlueSquare} alt="BlueSquare" />
              <span className="font-bold text-xs sm:text-base">
                Unbeatable Prices: Get the cheapest luxury rate in the market,
                while flying in style.
              </span>
            </p>
            <p className="flex gap-4 py-1">
              <Image src={BlueSquare} alt="BlueSquare" />
              <span className="font-bold text-xs sm:text-base">
                Luxury for Less: Enjoy luxury at the cheapest prices.
              </span>
            </p>
            <p className="flex gap-4 py-1 items-center">
              <Image
                src={BlueSquare}
                alt="BlueSquare"
                className="flex items-start "
              />
              <span className="font-bold text-xs sm:text-base">
                Tailored Support: You can reach us 24/7 (Monday – Sunday).
              </span>
            </p>
            <p className="flex gap-4 py-1">
              <Image src={BlueSquare} alt="BlueSquare" />
              <span className="font-bold text-xs sm:text-base">
                Focus on Youthful Exploration: Take advantage of our summer
                deals.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="px-0 md:px-6">
          <h1 className="font-bold text-xl py-4 lg:text-[41px]">
            Trending <span className="text-[#1B96D6]">destination</span>
          </h1>
          <p>Incredible places you must visit….</p>
        </div>

        {/* <div className="mt-8 max-w-[30rem] md:max-w-full min-w-full overflow-x-auto grid grid-cols-3 space-x-8 md:gap-4 place-items-center"> */}
        {/* <div className="flex gap-x-4 gap-y-10 pt-8 py-4 w-full max-w-[30rem] min-w-full overflow-x-auto wrapper md:max-w-full"> */}
        <div className="mt-8 w-full">
          <Slider {...settings}>
            {destinations.map((destination) => {
              return (
                <div
                  key={destination.id}
                  className="relative mx-2 "
                  // className="relative min-w-[20rem] w-full mx-2"
                >
                  <Image
                    src={destination.Img}
                    alt={destination.name}
                    className="rounded-lg mx-auto "
                  />
                  <p className=" absolute mx-16 w-[60%] top-[-1.2rem]  bg-white px-10 py-3 rounded-xl text-center">
                    {destination.name}
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
        {/* </div> */}
      </div>
    </main>
  );
};

export default Places;

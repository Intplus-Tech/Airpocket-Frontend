import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center py-5">
        <div>
          <Image
            src="https://ik.imagekit.io/0xy9wqmrh/Kigali.jpeg?updatedAt=1725265629732"
            alt="kigali"
            className="shadow-md rounded-md "
          />
        </div>
        <div>
          <Image
            src="https://ik.imagekit.io/0xy9wqmrh/Egypt.jpeg?updatedAt=1725265629392"
            alt="Egypt"
            className="shadow-md rounded-md "
          />
        </div>
        <div>
          <Image
            src="https://ik.imagekit.io/0xy9wqmrh/Zanziba.jpeg?updatedAt=1725265629998"
            alt="zanziba"
            className="shadow-md rounded-md flex shrink-0"
          />
        </div>
      </div>

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
          <Slider {...settings}>
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
          </Slider>
        </div>
        {/* </div> */}
      </div>
    </main>
  );
};

export default Places;

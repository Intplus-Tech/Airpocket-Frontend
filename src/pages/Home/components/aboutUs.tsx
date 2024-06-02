import BlueSquare from "../assets/Bluesquare.svg";
import SmallImage from "../assets/smallImg.svg";
import BlackStar from "../assets/Blackstar.svg";
import Location from "../assets/Location.svg";
import { Image } from "@/components/Image/Index";

type AboutProp = {
  img: string;
  text: string | null;
};

const AboutUs = ({ img, text }: AboutProp) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 col-span-1 my-6 h-full">
      <div className="w-fit relative">
        <Image src={img} alt="Water" className="" />
        {text && (
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
        )}
      </div>

      <div
        className={` grow flex flex-col mt-4  justify-center h-full col-span-2 ${
          text ? "md:pl-32" : "md:pl-10"
        }`}
      >
        <div className="py-4">
          <h1 className="text-[40px] text-[#1B96D6] font-bold">{text}</h1>
          <p className="text-[#283841] text-opacity-70 text-[14px]">
            {text &&
              "At Airpockets, we understand that travel is more than just a trip. Its an experience. Its about feeling young and alive, exploring new cultures, and creating memories that last a lifetime. That's why were dedicated to providing you with the most affordable luxury flights and travel packages, without compromising on quality or service."}
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
              Focus on Youthful Exploration: Take advantage of our summer deals.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

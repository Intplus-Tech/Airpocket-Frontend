import { Image } from "../../../components/Image/Index";
import Mimi from "@/pages/Home/assets/Mimi.jpeg";
import Paul from "@/pages/Home/assets/Paul.jpeg";
import Samuel from "@/pages/Home/assets/Samuel.jpeg";
import Chidi from "@/pages/Home/assets/Chidi.jpeg";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
const Testimonials = () => {
  const TESTIMONIALS = [
    {
      id: "1",
      text: "OBooked my flight with Airpockets and it was like breeze, amazing customer support and feedback, I definitely recommend them. ",
      img: Chidi,
      name: "Chidi",
      country: "Nigeria",
    },
    {
      id: "2",
      text: "Airpockets has become my go to travel platform, I enjoy the luxury perks they off offer. I used to get higher rates elsewhere till I discovered Airpockets ",
      img: Mimi,
      name: "Mimi",
      country: "Nigeria",
    },
    {
      id: "3",
      text: "After spending for school requirements, money for flight was a bit challenge, but surprisingly I got a budget friendly flight on Airpocket ",
      img: Samuel,
      name: "Samuel",
      country: "Nigeria",
    },
    {
      id: "4",
      text: "The convenience and constant support is impressive. ",
      img: Paul,
      name: "Paul",
      country: "Nigeria",
    },
  ];

  return (
    <main className=" max-w-screen-xl mx-auto mt-8">
      <div className="w-full px-2 mx-auto space-y-16">
        <div className="lg:flex justify-between">
          <div className="space-y-3">
            <h1 className="font-bold text-xl md:text-[42px] py-1">
              <span className="text-[#1B96D6]">Why</span> Choose Us
            </h1>
            <p className="text-gray-500 text-xs">
              At Airpockets, we are more than just a travel booking platform. We
              are your travel partner, here to help you discover the world and
              create unforgettable experiences.
            </p>
          </div>

          <div className="hidden md:flex gap-x-4 items-end my-2">
            <button className="border rounded-md h-8 w-8 p-2 border-[#1B96D6]">
              <ChevronLeftIcon className="w-4 h-4 text-primaryColor  rounded-md" />
            </button>
            <button className="border rounded-md p-2 h-8 w-8 border-primaryColor bg-[#1B96D6]">
              <ChevronRightIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        {/* TODO: Horizontal scroll on mobile: remove the "flex-wrap" below */}
        {/* <div className='flex gap-x-4 gap-y-10 pt-8 py-4 w-full max-w-[30rem] min-w-full overflow-x-auto wrapper md:max-w-full'> */}
        <div className="flex gap-x-4 gap-y-10 pt-8 py-4 w-full max-w-[30rem] min-w-full overflow-x-auto wrapper md:max-w-full">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white shadow shadow-gray-300 pt-8 py-4 px-2 w-full min-w-[18rem] max-w-[320px] mx-auto rounded-lg space-y-4"
            >
              <div className="absolute top-0 right-[50%] translate-x-[50%] translate-y-[-50%] w-[51px] h-[51px]">
                <Image
                  src={testimonial.img}
                  alt="random"
                  className="rounded-[50%] h-[51px] w-[51px]"
                />
              </div>
              <p className="text-xs text-gray-500 text-center">
                {testimonial.text}
              </p>
              <div className="flex  justify-between">
                <span className="flex item-center gap-x-1 ">
                  <StarIcon className="w-4 h-4 text-[#DABE29]" />
                  <StarIcon className="w-4 h-4 text-[#DABE29]" />
                  <StarIcon className="w-4 h-4 text-[#DABE29]" />
                  <StarIcon className="w-4 h-4 text-[#DABE29]" />
                  <StarIcon className="w-4 h-4 text-[#DABE29]" />
                </span>
                <div className="text-center md:text-start">
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;

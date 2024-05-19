import { Image } from "../../../components/Image/Index";
import Test1 from "../assets/Test1.svg";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
const Testimonials = () => {
  const TESTIMONIALS = [
    {
      id: "1",
      text: "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a. ",
      img: Test1,
      name: "Carolyn Jacobson",
      country: "Brazil",
    },
    {
      id: "2",
      text: "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a. ",
      img: Test1,
      name: "Carolyn Jacobson",
      country: "Brazil",
    },
    {
      id: "3",
      text: "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a. ",
      img: Test1,
      name: "Carolyn Jacobson",
      country: "Brazil",
    },
    {
      id: "4",
      text: "Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a. ",
      img: Test1,
      name: "Carolyn Jacobson",
      country: "Brazil",
    },
  ];

  return (
    <main className=" max-w-screen-xl mx-auto mt-8">
      {/* <div className="my-2">
        <h1 className="font-bold text-xl md:text-[42px] py-1">
          <span className="text-[#1B96D6]">Why</span> Choose Us
        </h1>
        <p className="text-[#283841]">
          Tempora facere doloribus id aut. Ea maiores esse accusantium
          laboriosam. Quos commodi non assumenda quam illum.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-16">
        {testimonial.map((item) => (
          <div className="bg-white shadow-2xl py-2 px-3 rounded-md relative">
            <div className="w-fit h-fit mx-auto">
              <Image
                src={item.img}
                alt={item.img}
                className=" absolute top-[-1rem] w-fit text-center "
              />
            </div>
            <p className="text-center mt-10 text-sm text-opacity-60">
              {item.text}
            </p>
            <div>
              <p>{item.name}</p>
              <p>{item.country}</p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="w-full px-2 mx-auto space-y-16">
        <div className="lg:flex justify-between">
          <div className="space-y-3">
            <h1 className="font-bold text-xl md:text-[42px] py-1">
              <span className="text-[#1B96D6]">Why</span> Choose Us
            </h1>
            <p className="text-gray-500 text-xs">
              Tempora facere doloribus id aut. Ea maiores esse accusantium
              laboriosam. Quos commodi non assumenda quam illum.
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
                  className="rounded-full"
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
                  <h4 className="font-bold text-sm">Carolyn Jacobson</h4>
                  <p className="text-xs text-gray-500">Brazil</p>
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

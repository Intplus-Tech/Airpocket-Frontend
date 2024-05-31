import { ClockIcon } from "@heroicons/react/24/outline";
import { IoAirplane } from "react-icons/io5";
import { GiGymBag } from "react-icons/gi";
import { Image } from "@/components/Image/Index";
import Gulf from "@/pages/SearchResults/assets/Gulf.svg";
import { useState } from "react";
import { ContactInformation } from "./ContactInformation";
import { FlightFareBreakdown } from "./FlightFareBreakDown";
import { useGetUserHistory } from "../slice/query";

interface FlightOrder {
  flightOrder: string;
  from: string;
  to: string;
  departure: string;
  cabin: string;
}

const BookedFlight = () => {
  const { isLoading, data: iteneries } = useGetUserHistory();

  // const iteneriesCount = ["1", "2", "3"];

  const [viewItenery, setViewItenery] = useState<number | null>(null);

  const handleViewItenary = (index: number) => {
    setViewItenery(index);
  };

  const BookedFlight = (singleFlight: FlightOrder, index: number) => (
    <div className="bg-white py-2 my-4 rounded-lg px-2 md:px-4">
      <div className="flex flex-col md:flex-row md:items-center gap-x-10 gap-y-4">
        <div className="flex gap-2 items-center ">
          <div>
            <div className="relative w-[50px] h-[50px] overflow-hidden mx-auto">
              <Image src={Gulf} alt="airline" className="rounded" />
            </div>
            <p className="text-gray-500 text-center py-1 text-sm">Oman Air</p>
          </div>

          <div className="flex flex-col items-center text-center gap-1">
            <p className="font-bold text-lg">2:50</p>
            <p className="text-gray-600">{singleFlight.from}</p>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-gray-500 flex items-center justify-center gap-1">
              <ClockIcon className="h-6 w-6" />
              19:00
            </p>
            <div className="relative">
              <div className="border-t border-dashed w-20 border-1 border-t-gray-900" />
              <IoAirplane className="text-primaryColor h-6 w-6 absolute top-0 right-[50%] translate-y-[-50%] translate-x-[50%]" />
            </div>
            <p className="text-gray-500 flex items-center gap-3 justify-center">
              <GiGymBag className="h-6 w-6" />
              20 kg
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <p className="font-bold text-lg">21:50</p>
            <p className="text-gray-600">{singleFlight.to}</p>
          </div>
        </div>
        <p className="text-gray-700">Monday, September 6</p>
      </div>

      <div className="py-8 md:py-12 flex items-center justify-between text-sm md:text-base">
        <p className="text-primaryColor bg-[#dff8fe] px-2 rounded-lg py-1">
          {singleFlight.cabin}
        </p>
        <div className="flex items-center gap-1 md:gap-3">
          <p>NGN 34,410,462</p>
          <button
            onClick={() => handleViewItenary(index)}
            className="text-white bg-[#1D91CC] px-3 md:px-8 md:py-2 py-1 rounded-lg"
          >
            View Itinerary
          </button>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full max-w-[912px] bg-gray-50 border border-gray-100 rounded p-1 mb-8">
      <div>
        <h3 className="bg-[#dff8fe] font-semibold p-4 rounded text-gray-800">
          Booked Flight
        </h3>
      </div>

      {iteneries?.success.data.map((item: any, index: number) => {
        return (
          <div className="w-full">
            {viewItenery !== index ? (
              <div>{BookedFlight(item, index)}</div>
            ) : (
              <div>
                <ContactInformation />
                <FlightFareBreakdown />
                <button
                  className="text-white bg-[#1D91CC] w-fit px-3 md:px-8 md:py-2 py-1 rounded-lg"
                  onClick={() => setViewItenery(null)}
                >
                  close
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default BookedFlight;

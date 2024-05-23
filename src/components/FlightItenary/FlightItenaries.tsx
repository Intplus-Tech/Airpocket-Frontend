// import ContactInformation from "./ContactInformation";
// import Flight from "./Flight";
// import FlightFareBreakdown from "./FlightFareBreakdown";

const FlightItinerary = () => {
  return (
    <div className="w-full max-w-[912px] bg-gray-50 border border-gray-100 rounded p-1">
      <div>
        <h3 className="bg-[#dff8fe]  p-4 rounded flex gap-x-4 items-center">
          Booked Flight
          <span className="font-semibold text-gray-800 flex gap-x-4 items-center">
            <span> &gt; </span> <span>Flight Itinerary</span>
          </span>
        </h3>
      </div>
      <div className="bg-white py-2 my-4 rounded-lg pl-2 md:pl-4 space-y-8">
        <Flight
          title="Departure Flight:"
          flightRoute="Murtala Muhammed Intl (LOS) - Hamad International (DOH)"
        />
        <Flight
          title="Return Flight:"
          flightRoute="Hamad International (DOH) - Murtala Muhammed Intl (LOS)"
        />
      </div>
      {/* <ContactInformation />
      <FlightFareBreakdown /> */}
    </div>
  );
};
export default FlightItinerary;

import { ClockIcon } from "@heroicons/react/24/outline";
import { IoAirplane } from "react-icons/io5";
import { GiGymBag } from "react-icons/gi";
import { Image } from "../Image/Index";

interface Props {
  title: string;
  flightRoute: string;
}

export const Flight = ({ title, flightRoute }: Props) => {
  return (
    <div className="md:px-10 md:py-4">
      <div className="border-b border-b-gray-300 border-dashed pb-8 text-sm md:text-base">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500 font-semibold">{flightRoute}</p>
      </div>

      {/* Each departure flight */}
      <div className="flex flex-col md:flex-row md:items-center gap-x-10 gap-y-4 py-8">
        <div className="flex gap-2 items-center ">
          <div>
            <div className="relative w-[50px] h-[50px] overflow-hidden mx-auto">
              <Image
                src="/images/oman_air.png"
                alt="airline"
                className="rounded"
              />
            </div>
            <p className="text-gray-500 text-center py-1 text-sm">Oman Air</p>
          </div>

          <div className="flex flex-col items-center text-center gap-1">
            <p className="font-bold text-lg">2:50</p>
            <p className="text-gray-600">Istanbul (SAW)</p>
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
            <p className="text-gray-600">Dubai (DXB)</p>
          </div>
        </div>
        <p className="text-gray-700">Monday, September 6</p>
      </div>
    </div>
  );
};

export const FlightFareBreakdown = () => {
  return (
    <div className="bg-white py-6 my-4 rounded-lg pl-2  space-y-8 md:px-10 pr-2">
      <div className="text-sm">
        <h3 className="font-semibold">Flight Fare Breakdown</h3>
        <div>
          <div className="flex justify-between items-center border-b py-4 text-gray-600 border-gray-300">
            <p>Total Fare</p>
            <p className="font-semibold">NGN 11,120,980</p>
          </div>
          <div className="flex justify-between items-center py-8 text-gray-600">
            <p>Transaction Fee</p>
            <p className="font-semibold">0</p>
          </div>
          <div className="flex justify-between items-center py-4 text-gray-600">
            <p>Total</p>
            <p className="font-bold text-base">NGN 11,120,080</p>
          </div>
        </div>
      </div>
    </div>
  );
};

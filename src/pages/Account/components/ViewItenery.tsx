// import ContactInformation from "./ContactInformation";
// import Flight from "./Flight";
// import FlightFareBreakdown from "./FlightFareBreakdown";

import {
  Flight,
  FlightFareBreakdown,
} from "@/components/FlightItenary/FlightItenaries";
import { ContactInformation } from "./ContactInformation";

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
      <ContactInformation />
      <FlightFareBreakdown />
    </div>
  );
};
export default FlightItinerary;

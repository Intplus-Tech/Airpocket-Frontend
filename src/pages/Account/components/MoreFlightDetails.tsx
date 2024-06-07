import { ContactInformation } from "./ContactInformation";
import { FlightFareBreakdown } from "./FlightFareBreakDown";

import {
  BookingInformation,
  FlightInformation,
  FlightOffer,
} from "@/types/typs";
import FlightDetails from "@/components/FllightDetails/FlightDetail";

type AllProp = {
  singleFlight: {
    bookingInformation: BookingInformation;
    data: FlightInformation;
  } | null;
  setStep: React.Dispatch<React.SetStateAction<string>>;
};

const MoreFlightDetails = ({ singleFlight }: AllProp) => {
  // const { bookingInformation, data: flightInformation } = singleFlight;
  const bookingInformation: BookingInformation | undefined =
    singleFlight?.bookingInformation;
  const flightInformation: FlightInformation | undefined = singleFlight?.data;
  console.log(bookingInformation);
  return (
    <main className="px-2 py-3">
      <div className="bg-white ">
        <FlightDetails
          SINGLE_FLIGHT_DETAILS={
            flightInformation?.flightOffers as FlightOffer[] | null
          }
        />
      </div>
      <div className="bg-white my-4">
        <ContactInformation />
        <FlightFareBreakdown />
      </div>
    </main>
  );
};

export default MoreFlightDetails;

import { useState } from "react";
import { useSelector } from "react-redux";

import FlightDetails from "@/components/FllightDetails/FlightDetail";
import FlightDetailForm from "./components/FlightDetailForm";
import PassengerDetailsPreview from "./components/PassengerDetailsPreview";
import { RootState } from "@/store/store";
import { getItemFromStorage } from "@/utils/locaStorage";

type PassengerDetialProp = {
  passengers: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
};

export const PassengerDetails = ({
  passengers,
  setCurrentStep,
}: PassengerDetialProp) => {
  const [step, setStep] = useState("flightDetailsForm");

  const flightSearchQuery = getItemFromStorage("flight-search-query");
  const { adult, children, infants } = flightSearchQuery;
  const inputsArray = Array.from(
    { length: adult + children + infants },
    (_, index) => index + 1
  );

  console.log(inputsArray);
  const SINGLE_FLIGHT_DETAILS = {
    id: "1",
    airline: "Arik Air",
    departureTime: "02:50",
    arrivalTime: "21:15",
    arrivalDay: "Monday, September 6",
    departure: "INSTABUL-(IST)",
    destination: "Dubai",
    estimatedTime: "01:20 mins",
    desc: "20kg 0 stops Economy ",
    price: "₦",
  };
  // mx-4 md:mx-6 min-[1059px]:mx
  return (
    <main className="max-w-screen-lg overflow-hidden mx-6 min-[1059px]:mx-auto  ">
      {/* SINGLE_FLIGHT_STOPS Details */}

      <FlightDetails SINGLE_FLIGHT_DETAILS={SINGLE_FLIGHT_DETAILS} />

      {/* SINGLE_FLIGHT_STOPS Details */}
      {step === "flightDetailsForm" ? (
        <FlightDetailForm inputsArray={inputsArray} setStep={setStep} />
      ) : (
        <PassengerDetailsPreview
          setStep={setStep}
          setCurrentStep={setCurrentStep}
        />
      )}
    </main>
  );
};

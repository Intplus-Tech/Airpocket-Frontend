import { useState } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import FlightDetails from "@/components/FllightDetails/FlightDetail";
import FlightDetailForm from "./components/FlightDetailForm";
import PassengerDetailsPreview from "./components/PassengerDetailsPreview";
import { getItemFromStorage } from "@/utils/locaStorage";
import { Generic } from "@/types/typs";

type PassengerDetialProp = {
  passengers: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const PassengerDetails = ({
  passengers,
  setCurrentStep,
}: PassengerDetialProp) => {
  const [step, setStep] = useState("flightDetailsForm");
  const [passengerFormData, setPassengerFormData] = useState<Generic[] | null>(
    null
  );

  const flightSearchQuery = getItemFromStorage("flight-search-query");
  const isLoading = useSelector(
    (state: RootState) => state.selectFlight.isLoading
  );
  const result = useSelector((state: RootState) => state.selectFlight.result);

  const { adult, children, infants } = flightSearchQuery;
  const inputsArray = Array.from(
    { length: adult + children + infants },
    (_, index) => index + 1
  );

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

      <div>
        {isLoading ? (
          <div className="flex flex-col gap-1 border mb-4 rounded-md">
            <div className=" flex gap-2  justify-between h-[6rem]  px-2 py-1">
              <span className="h-fit">
                <Skeleton className="w-[10rem] h-[5rem]" />
              </span>
              <span className="h-fit">
                <Skeleton className="w-[10rem] h-[5rem]" />
              </span>
              <span className="h-fit">
                <Skeleton className="w-[10rem] h-[5rem]" />
              </span>
              <span className="h-fit">
                <Skeleton className="w-[10rem] h-[5rem]" />
              </span>
              <span className="h-fit">
                <Skeleton className="w-[10rem] h-[5rem]" />
              </span>
            </div>
            <div className="flex items-center justify-between px-2">
              <span>
                <Skeleton className=" w-[15rem]" />
              </span>
              <span>
                <Skeleton className=" w-[10rem]" />
              </span>
            </div>
          </div>
        ) : (
          <FlightDetails SINGLE_FLIGHT_DETAILS={result} />
        )}
      </div>

      {/* SINGLE_FLIGHT_STOPS Details */}
      {step === "flightDetailsForm" ? (
        <div>
          {isLoading ? (
            <div className="border h-[10rem]  px-1 py-1">
              <Skeleton className="" count={5} />
            </div>
          ) : (
            <FlightDetailForm
              inputsArray={inputsArray}
              setStep={setStep}
              setPassengerFormData={setPassengerFormData}
            />
          )}
        </div>
      ) : (
        <PassengerDetailsPreview
          setStep={setStep}
          setCurrentStep={setCurrentStep}
          passengerFormData={passengerFormData}
        />
      )}
    </main>
  );
};

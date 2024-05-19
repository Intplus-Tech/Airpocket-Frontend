import { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import FlightDetails from "@/components/FllightDetails/FlightDetail";
import FlightDetailForm from "./components/FlightDetailForm";
import PassengerDetailsPreview from "./components/PassengerDetailsPreview";
import { getItemFromStorage } from "@/utils/locaStorage";
import { Generic } from "@/types/typs";
import { flightSelect } from "@/Features/selectFlight/api";

type PassengerDetialProp = {
  passengers?: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const PassengerDetails = ({
  // passengers,
  setCurrentStep,
}: PassengerDetialProp) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState("flightDetailsForm");
  const [passengerFormData, setPassengerFormData] = useState<Generic[] | null>(
    null
  );

  const flightSearchQuery = getItemFromStorage("flight-search-query");
  const selectedFlight = getItemFromStorage("selected_flight");
  const isLoading = useSelector(
    (state: RootState) => state.selectFlight.isLoading
  );
  const result = useSelector((state: RootState) => state.selectFlight.result);
  console.log(result, "result");

  const { adult, children, infants } = flightSearchQuery;
  const inputsArray = Array.from(
    { length: adult + children + infants },
    (_, index) => index + 1
  );

  useEffect(() => {
    flightSelect(selectedFlight, dispatch);
  }, []);

  // mx-4 md:mx-6 min-[1059px]:mx
  return (
    <main className="max-w-screen-lg overflow-hidden mx-6 min-[1059px]:mx-auto  ">
      {/* SINGLE_FLIGHT_STOPS Details */}

      <div>
        {!result ? (
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
            <div className="border h-full px-1 py-1">
              <Skeleton className="h-[3rem] my-4" count={5} />
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
        <div>
          {isLoading ? (
            <div className="border h-full px-1 py-1">
              <Skeleton className="h-[3rem] my-4" count={5} />
            </div>
          ) : (
            <PassengerDetailsPreview
              setStep={setStep}
              setCurrentStep={setCurrentStep}
              passengerFormData={passengerFormData}
            />
          )}
        </div>
      )}
    </main>
  );
};

import { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";

import FlightDetails from "@/components/FllightDetails/FlightDetail";
import FlightDetailForm from "./components/FlightDetailForm";
import PassengerDetailsPreview from "./components/PassengerDetailsPreview";
import { getItemFromStorage } from "@/utils/locaStorage";
import { Generic } from "@/types/typs";
import { flightSelect } from "@/Features/selectFlight/api";
import { SkeletonComponent } from "@/components/Loader/Loader";

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
  const error = useSelector((state: RootState) => state.selectFlight.error);

  const { adult, children, infants } = flightSearchQuery;
  const inputsArray = Array.from(
    { length: adult + children + infants },
    (_, index) => index + 1
  );

  useEffect(() => {
    !result && !isLoading && flightSelect(selectedFlight, dispatch);
  }, []);

  if (isLoading) {
    return <SkeletonComponent />;
  }

  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }

  // mx-4 md:mx-6 min-[1059px]:mx
  return (
    <main className="max-w-screen-xl overflow-hidden lg:px-6 mx-6 min-[1059px]:mx-auto  ">
      <div>
        {/* SINGLE_FLIGHT_STOPS Details */}
        {result && (
          <div>
            <FlightDetails SINGLE_FLIGHT_DETAILS={result} />
          </div>
        )}
        {/* SINGLE_FLIGHT_STOPS Details */}
        {step === "flightDetailsForm" ? (
          <div>
            <FlightDetailForm
              inputsArray={inputsArray}
              setStep={setStep}
              setPassengerFormData={setPassengerFormData}
            />
          </div>
        ) : (
          <div>
            <PassengerDetailsPreview
              setStep={setStep}
              setCurrentStep={setCurrentStep}
              passengerFormData={passengerFormData}
            />
          </div>
        )}
      </div>
    </main>
  );
};

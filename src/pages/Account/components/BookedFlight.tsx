import { useState } from "react";

import { useGetUserHistory } from "../slice/query";
import { SingleFlight } from "./SingleFlight";
import {
  BookingInformation,
  FlightInformation,
  FlightOrder,
  flight,
} from "@/types/typs";
import MoreFlightDetails from "./MoreFlightDetails";
import { getSingleUserHistory } from "../slice/api";

const BookedFlight = () => {
  const { isLoading, data: iteneries } = useGetUserHistory();

  // const [viewItenery, setViewItenery] = useState<number | null>(null);
  const [step, setStep] = useState("allItenery");
  const [moreInfo, setMoreinfo] = useState<{
    bookingInformation: BookingInformation;
    data: FlightInformation;
  } | null>(null);

  const viewItenery = async (id: string) => {
    const response = await getSingleUserHistory(id);
    console.log(response);
    if (response.success) {
      setMoreinfo(response.success.data);
      console.log(moreInfo);
      setStep("singleItenery");
    }

    console.log(id);
    // setStep("singleItenery");
  };

  const renderStep = (step: string) => {
    if (step === "singleItenery") {
      return <MoreFlightDetails singleFlight={moreInfo} setStep={setStep} />;
    } else {
      return (
        <AllFlight
          allFlight={iteneries?.success.data}
          setStep={setStep}
          viewItenery={viewItenery}
        />
      );
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="w-full max-w-[912px] bg-gray-50 border border-gray-100 rounded p-1 mb-8">
      <div>
        <h3 className="bg-[#dff8fe] font-semibold p-4 rounded text-gray-800 cursor-pointer">
          <span onClick={() => setStep("allItenery")}> Booked Flight</span>{" "}
          {step === "singleItenery" && <span>{">"} FlightItenery</span>}
        </h3>
      </div>
      {iteneries?.success ? (
        renderStep(step)
      ) : (
        // <AllFlight allFlight={iteneries?.success.data} setStep={setStep} />
        <div className="text-center h-24 font-bold flex items-center justify-center">
          {iteneries?.error?.response}
        </div>
      )}
    </main>
  );
};

export default BookedFlight;

type AllFlightProps = {
  allFlight: FlightOrder;
  setStep: React.Dispatch<React.SetStateAction<string>>;
  viewItenery?: (id: string) => void;
};

const AllFlight = ({ allFlight, setStep, viewItenery }: AllFlightProps) => {
  return (
    <div>
      {allFlight.map((flight: flight) => {
        return (
          <div key={flight._id} className="w-full">
            <SingleFlight
              singleFlight={flight}
              setStep={setStep}
              viewItenery={viewItenery}
            />
          </div>
        );
      })}
    </div>
  );
};

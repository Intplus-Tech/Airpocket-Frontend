import { IoMdArrowBack } from "react-icons/io";

import FlightDetails from "@/components/FllightDetails/FlightDetail";
import CardPayment from "./components/CardPayment";
import { useEffect, useState } from "react";
// import Transfer from "./components/Transfer";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { selectFlightResult } from "@/types/typs";
import { getItemFromStorage, storeItem } from "@/utils/locaStorage";
import { payment } from "@/Features/paymentSlice/api";
import { flightSelect } from "@/Features/selectFlight/api";

// type paymentProps = {
//   setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
// };

const Payment = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("option1");
  const selectedFlight: selectFlightResult | null = useSelector(
    (state: RootState) => state.selectFlight.result
  );

  const flightSelected = getItemFromStorage("selected_flight");

  const { adult, children, infants } = getItemFromStorage(
    "flight-search-query"
  ) || { adult: 0, children: 0, infant: 0 };
  const isLoading = useSelector(
    (state: RootState) => state.selectFlight.isLoading
  );

  const {
    contact_info: { email },
  } = getItemFromStorage("passenger_form");

  const handlePayment = () => {
    payment(
      {
        email,
        amount:
          selectedFlight?.data.flightOffers[0].price.grandTotal *
          (adult + children + infants),
      },
      dispatch
    );
    storeItem("currentStep", 4);
    // setCurrentStep(4)
  };

  useEffect(() => {
    console.log("request fired");
    flightSelect(flightSelected, dispatch);
  }, []);

  if (isLoading) {
    return (
      <h1 className="w-full h-32 flex items-center justify-center font-bold">
        Loading...
      </h1>
    );
  }

  return (
    <main className="max-w-screen-lg overflow-hidden mx-6 min-[1059px]:mx-auto ">
      {selectedFlight && (
        <div>
          <FlightDetails SINGLE_FLIGHT_DETAILS={selectedFlight} />

          <div className="bg-white py-3 my-4 rounded-lg border px-2 md:px-8">
            <div className="flex justify-between items-center pt-2 pb-4 border-b border-b-gray-300">
              <div>
                <h4 className="font-semibold">Passenger Details</h4>
                <p className="text-gray-500 text-sm md:text-base ">
                  (Confirm now to secure your reservation)
                </p>
              </div>
            </div>

            <div className="py-4 pb-4 border-b border-b-gray-300 md:flex justify-between space-y-8 md:space-y-0">
              <div>
                <h4 className="font-semibold">Select your payment option</h4>
                <form className="text-gray-800 space-y-2 py-3">
                  {/* TODO: change the radio outline color to the primaryColor */}
                  <div className="flex gap-x-2 items-center">
                    <input
                      type="radio"
                      name=""
                      id=""
                      value="option1"
                      checked={selectedOption === "option1"}
                      onChange={() => setSelectedOption("option1")}
                      className="accent-primaryColor"
                    />
                    <label>Book</label>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <input
                      type="radio"
                      name=""
                      id=""
                      value="option1"
                      checked={selectedOption === "option2"}
                      onChange={() => setSelectedOption("option2")}
                      className="accent-primaryColor"
                    />
                    <label>Card Payment</label>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <input
                      type="radio"
                      name=""
                      id=""
                      value="option1"
                      checked={selectedOption === "option3"}
                      onChange={() => setSelectedOption("option3")}
                      className="accent-primaryColor"
                    />
                    <label>Transfer Payment</label>
                  </div>
                </form>
              </div>

              {selectedOption === "option1" && (
                <CardPayment
                  amount={
                    selectedFlight?.data.flightOffers[0].price?.grandTotal
                  }
                />
              )}
              {selectedOption === "option2" && (
                <CardPayment
                  amount={
                    selectedFlight?.data.flightOffers[0].price?.grandTotal
                  }
                />
              )}
              {/* {selectedOption === "option3" && <Transfer />} */}
            </div>

            <div className="text-sm py-8 px-2">
              <div className="flex flex-col md:flex-row gap-4 w-full items-start md:items-center md:justify-between text-primaryColor">
                <button className="flex items-center min-w-fit gap-x-2">
                  <IoMdArrowBack />
                  Return to the previous step
                </button>
                <button
                  onClick={handlePayment}
                  className="px-6 md:px-16 min-w-fit text-white bg-[#1D91CC] py-2 rounded-lg"
                >
                  Make payment
                  {/* Complete Your booking */}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Payment;

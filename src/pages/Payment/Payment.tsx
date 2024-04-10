import { IoMdArrowBack } from "react-icons/io";

import FlightDetails from "@/components/FllightDetails/FlightDetail";
import CardPayment from "./components/CardPayment";
import { useState } from "react";
import Transfer from "./components/Transfer";

type paymentProps = {
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
};

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

const Payment = ({ setCurrentStep }: paymentProps) => {
  const [selectedOption, setSelectedOption] = useState("option1");
  return (
    <main className="max-w-screen-lg overflow-hidden mx-6 min-[1059px]:mx-auto ">
      <FlightDetails SINGLE_FLIGHT_DETAILS={SINGLE_FLIGHT_DETAILS} />

      <div className="bg-white py-3 my-4 rounded-lg border px-2 md:px-8">
        <div className="flex justify-between items-center pt-2 pb-4 border-b border-b-gray-300">
          <div>
            <h4 className="font-semibold">Passenger Details</h4>
            <p className="text-gray-500 text-sm md:text-base ">
              (Confirm now to secure your reservation)
            </p>
          </div>
          <p className="flex gap-x-2 items-center min-w-fit">
            Time Left: <span className="text-red-500">07:23</span>
          </p>
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

          {selectedOption === "option1" && <CardPayment />}
          {selectedOption === "option2" && <CardPayment />}
          {selectedOption === "option3" && <Transfer />}
        </div>

        <div className="text-sm py-8 px-2">
          <div className="flex flex-col md:flex-row gap-4 w-full items-start md:items-center md:justify-between text-primaryColor">
            <button className="flex items-center min-w-fit gap-x-2">
              <IoMdArrowBack />
              Return to the previous step
            </button>
            <button
              onClick={() => setCurrentStep("confirmation")}
              className="px-6 md:px-16 min-w-fit text-white bg-[#1D91CC] py-2 rounded-lg"
            >
              Complete Your booking
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;

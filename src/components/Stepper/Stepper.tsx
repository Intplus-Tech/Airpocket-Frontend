import { useState } from "react";

import {
  Confirmation,
  PassengerDetails,
  Payment,
  SearchResults,
} from "@/pages";
import payment from "@/components/Stepper/assets/payment.svg";
import confirmation from "@/components/Stepper/assets/confirmation.svg";
import { Image } from "../Image/Index";
import Done from "./assets/Done.svg";
import { getItemFromStorage } from "@/utils/locaStorage";
import CompletedBooking from "../CompletedBooking/CompletedBooking";

const Stepper = () => {
  const step = getItemFromStorage("currentStep");
  const [currentStep, setCurrentStep] = useState(step || 2);

  const CHECKOUT_STEPS = [
    {
      id: "1",
      name: "Search Flights",
      stepKey: "searchFlight",
      // Component: () => <SearchResults />,
      Img: confirmation,
    },
    {
      id: "2",
      stepKey: "travellersDetail",

      name: "Traveler(s) Detials",
      // Component: () => <PassengerDetails passengers={2} />,
      Img: payment,
    },
    {
      id: "3",
      stepKey: "paymentOption",

      name: "Payment",
      // Component: () => <Payment />,
      Img: payment,
    },
    {
      id: "4",
      stepKey: "confirmation",

      name: "confirmation",
      // Component: () => <Confirmation />,
      Img: confirmation,
    },
  ];

  const stepToRender = (key: number) => {
    switch (key) {
      case 1:
        return <SearchResults />;

      case 2:
        return (
          <PassengerDetails passengers={2} setCurrentStep={setCurrentStep} />
        );

      case 3:
        return <Payment setCurrentStep={setCurrentStep} />;

      case 4:
        return <Confirmation setCurrentStep={setCurrentStep} />;

      case 5:
        return <CompletedBooking />;

      default:
        break;
    }
  };

  return (
    <section>
      <div className="flex w-full justify-between max-w-screen-xl mx-auto items-center relative  overflow-hidden pt-2">
        {CHECKOUT_STEPS.map((step, index) => (
          <div
            key={step.name}
            className=" flex items-center z-[50] justify-center mx-auto w-[7rem] rounded-[50%] h-[7rem] bg-white"
          >
            <div className=" flex flex-col items-center justify-center gap-4 ">
              <p
                className={`${
                  currentStep > index + 1 ? "bg-[#E8F4FA]" : "bg-[#EDEDED]"
                } rounded-[50%] h-14 w-14 flex items-center justify-center text-center z-50 `}
              >
                {currentStep > index + 1 ? (
                  <Image src={Done} alt="completed" className="mx-auto " />
                ) : (
                  <Image src={step.Img} alt={step.name} className="mx-auto " />
                )}
              </p>
              <p
                className={`text-center whitespace-nowrap text-sm  ${
                  currentStep > index + 1 && "text-[#E8F4FA]"
                } ${
                  currentStep === index + 1
                    ? "text-[#1D91CC] font-bold"
                    : "text-[#ADADAD] "
                }`}
              >
                {step.name}
              </p>
            </div>
          </div>
        ))}

        <div className="absolute h-[2px] w-full   top-[35%] left-0">
          <div className="h-full transition-all w-[80%]   bg-gray-100 duration-300 ease-in mx-auto "></div>
        </div>
      </div>
      <section className="my-8">{stepToRender(currentStep)}</section>
    </section>
  );
};

export default Stepper;

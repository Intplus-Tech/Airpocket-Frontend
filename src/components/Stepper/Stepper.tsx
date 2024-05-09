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

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState("travellersDetail");

  const CHECKOUT_STEPS = [
    {
      name: "search Flights",
      // Component: () => <SearchResults />,
      Img: confirmation,
    },
    {
      name: "Travellers Detials",
      // Component: () => <PassengerDetails passengers={2} />,
      Img: payment,
    },
    {
      name: "Payment option",
      // Component: () => <Payment />,
      Img: payment,
    },
    {
      name: "Delivered",
      // Component: () => <Confirmation />,
      Img: confirmation,
    },
  ];

  const stepToRender = (key: string) => {
    switch (key) {
      case "searchFlight":
        return <SearchResults />;

      case "travellersDetail":
        return (
          <PassengerDetails passengers={2} setCurrentStep={setCurrentStep} />
        );

      case "paymentOption":
        return <Payment setCurrentStep={setCurrentStep} />;

      case "confirmation":
        return <Confirmation />;

      default:
        break;
    }
  };

  return (
    <section>
      <div className="flex w-full justify-between max-w-screen-lg mx-auto items-center relative">
        {CHECKOUT_STEPS.map((step) => (
          // <div></div>
          <div
            key={step.name}
            // ref={(el) => (stepRef.current[index] = el)}
            className=" flex items-center z-[50] justify-center mx-auto w-full"
          >
            <div className=" flex flex-col items-center justify-center gap-4">
              <p className="bg-[#EDEDED] rounded-[50%] h-14 w-14 flex items-center z-50 ">
                <Image
                  src={step.Img}
                  alt={step.name}
                  className="mx-auto h-8 w-8"
                />
              </p>
              <p className="text-center whitespace-nowrap text-sm">
                {step.name}
              </p>
            </div>
          </div>
        ))}

        <div className="absolute h-[1px] w-full mx-6  bg-gray-100 top-[30%] left-0">
          <div className="h-full transition-all duration-300 ease-in mx-auto"></div>
        </div>
      </div>
      <section className="my-8">{stepToRender(currentStep)}</section>
    </section>
  );
};

export default Stepper;

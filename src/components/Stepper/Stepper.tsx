import { useEffect, useRef, useState } from "react";

import {
  Confirmation,
  PassengerDetails,
  Payment,
  SearchResults,
} from "@/pages";
import payment from "@/components/Stepper/assets/payment.svg";
import confirmation from "@/components/Stepper/assets/confirmation.svg";
import { Image } from "../Image/Index";

type Margin = {
  marginLeft: number | undefined;
  marginRight: number | undefined;
};

const Stepper = () => {
  const [margins, setMargins] = useState<Margin | null>({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentStep, setCurrentStep] = useState("travellersDetail");

  // type CHECKOUT_STEPSTYPE = {
  //   name: string;
  //   Component: () => JSX.Element;
  //   Img: string;
  // }[];

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
    console.log(key, "key");
    switch (key) {
      case "searchFlight":
        return <SearchResults setCurrentStep={setCurrentStep} />;

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

  useEffect(() => {
    if (stepRef?.current) {
      setMargins({
        marginLeft: stepRef.current[0]?.offsetHeight,
        marginRight: stepRef.current[CHECKOUT_STEPS.length - 1]?.offsetWidth,
      });
    }
  }, [stepRef, CHECKOUT_STEPS.length]);

  let style: string;
  if (margins?.marginLeft && margins.marginRight !== undefined) {
    style = `calc(100%-${margins.marginLeft + margins.marginRight}px)`;
  } else {
    // Handle the case where the number is undefined
    style = "";
  }

  return (
    <section>
      <div className="flex w-full justify-between max-w-screen-lg mx-auto items-center relative">
        {CHECKOUT_STEPS.map((step, index) => (
          // <div></div>
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
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
            {/* {index !== CHECKOUT_STEPS.length - 1 && (
            <p className="h-[1px] w-full mb-2 bg-red-300"></p>
          )} */}
          </div>
        ))}

        <div className="absolute h-[1px] w-full mx-6  bg-gray-100 top-[30%] left-0">
          <div
            className="h-full transition-all duration-300 ease-in mx-auto"
            // style={{
            //   width: style,
            //   marginLeft: margins?.marginLeft,
            //   marginRight: margins?.marginRight,
            // }}
          ></div>
        </div>
      </div>
      <section className="my-8">{stepToRender(currentStep)}</section>
    </section>
  );
};

export default Stepper;

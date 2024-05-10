import React from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";

import PassengerForm from "@/components/PassengerForm/PassengerForm";

type FLGHT_DETAIL_FORM_PROPS = {
  inputsArray: number[];
  setStep: React.Dispatch<React.SetStateAction<string>>;
};

type PassengerFormData = {
  passengers: {
    firstName: string;
    lastName: string;
    gender: string;
    passportNumber: string;
    day: string;
    month: string;
    year: string;
  }[];
};

const FlightDetailForm = ({
  inputsArray,
  setStep,
}: FLGHT_DETAIL_FORM_PROPS) => {
  const { register, control, handleSubmit } = useForm<PassengerFormData>();
  const { fields } = useFieldArray({
    control,
    name: "passengers",
  });

  const SubmitPassengerForm = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <section className="w-full">
      <div className="border rounded-md p-4 mx-4 md:mx-6 min-[1059px]:mx-0">
        <div className="flex items-center justify-between">
          <p className="font-bold">Passenger Details</p>
          <p>
            <span className="font-semibold">Time Left:</span>{" "}
            <span className="text-red-500">07:59</span>
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit(SubmitPassengerForm)}>
          <div>
            {inputsArray.map((_, index) => (
              <div key={index} className="border-b">
                <p className="font-bold mt-4">Passenger {index + 1}</p>
                <PassengerForm
                  index={index}
                  fields={fields}
                  register={register}
                />
              </div>
            ))}
          </div>
          <div className="w-[60%] mx-auto mt-4 bg-gray-300 rounded-md">
            <button type="submit" className="bg-transparent w-full py-2 ">
              Proceed
            </button>
          </div>
        </form>
      </div>
      {/* CONTACT_INFORMATION_FORM */}

      <div className="mt-6 border px-6 mx-4 md:mx-6 min-[1059px]:mx-0 h-full rounded-md py-6">
        <h1 className="font-bold">contact information</h1>
        <p className="text-[#868686]">
          In case the contact information of this form is inconsistent with the
          information entered in the user account, the ticket and purchase
          confirmation will be sent to the contact information of this form.
          Also, "announcement of ticket changes" or "receipt of confirmation"
          will be done from one of the channels of "user account contact
          information" or "information of the same form" .
        </p>
        <form action="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            <label
              htmlFor="Username"
              className="relative w-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="FirstName"
                className="peer w-full border-none py-1.5 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="FirstName"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                FirstName
              </span>
            </label>
            <label
              htmlFor="PhoneNumber"
              className="relative w-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="PhoneNumber"
                className="peer w-full border-none py-1.5 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="PhoneNumber"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                PhoneNumber
              </span>
            </label>
            <label
              htmlFor="PhoneNumber"
              className="relative w-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="PhoneNumber"
                className="peer w-full border-none py-1.5 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="PhoneNumber"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Phone Number
              </span>
            </label>
            <label
              htmlFor="email"
              className="relative w-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="email"
                id="email"
                className="peer w-full border-none py-1.5 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="email"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Email
              </span>
            </label>
          </div>
        </form>
      </div>
      {/* CONTACT_INFORMATION_FORM */}

      <div className="flex gap-4 px-6 mx-4 md:mx-6 mt-5 mb-10 text-center justify-center ">
        <p>
          <input type="checkbox" />
        </p>
        <p>
          By proceeding, I acknowledge that I have read and agreed to
          Airpocket’s Flight booking{" "}
          <span className="text-[#1D91CC]"> terms & conditions</span>
        </p>
      </div>

      <div className="w-[40%] mx-auto bg-[#1D91CC] rounded-md">
        <button
          onClick={() => setStep("flightDetailsPreview")}
          className="bg-transparent w-full py-2 text-white "
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default FlightDetailForm;

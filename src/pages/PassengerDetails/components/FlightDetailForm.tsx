import React, { ChangeEvent, useEffect, useState } from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
// import { parsePhoneNumberFromString } from "libphonenumber-js";

import { getCountryCode } from "countries-list";

import PassengerForm from "@/components/PassengerForm/PassengerForm";
import { Generic, TravellerFormData } from "@/types/typs";
import { storeItem } from "@/utils/locaStorage";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { AutosignUpAccount } from "@/Features/userSlice/api";

type FLGHT_DETAIL_FORM_PROPS = {
  inputsArray: number[];
  setStep: React.Dispatch<React.SetStateAction<string>>;
  setPassengerFormData: React.Dispatch<React.SetStateAction<Generic[] | null>>;
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
  setPassengerFormData,
}: FLGHT_DETAIL_FORM_PROPS) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PassengerFormData>();

  const [loading, setLoading] = useState(false);

  const { fields } = useFieldArray({
    control,
    name: "passengers",
  });

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const user = useSelector((state: RootState) => state.user.user);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    errors.passengers &&
      toast({
        description: "Please fill in your flight information",
      });
  }, [errors]);

  const SubmitPassengerForm = async (data: FieldValues) => {
    setLoading(true);
    if (!formData.email && !user?._id) {
      toast({
        description: "Please fill in your contact information or Login",
      });
      return;
    }
    const arrayOfEntries = Object.entries(data);
    const filteredArray = arrayOfEntries.filter(
      ([_, value]) => !Array.isArray(value) || value.length > 0
    );
    const arrayOfObjects = filteredArray.map(([_, value], index) => ({
      id: index + 1,
      ...value,
    }));

    const updatedArray = arrayOfObjects
      .map((item: TravellerFormData) => ({
        ...item,
        dateOfBirth: `${item.dob.year}-${item.dob.month}-${item.dob.day}`,
        contact: {
          ...item.contact,
          phones: [
            {
              ...item.contact.phones[0],
              deviceType: "MOBILE",
              countryCallingCode: "234",
            },
          ],
        },
        documents: [
          {
            ...item.documents[0],
            documentType: "PASSPORT",
            issuanceDate: `${item.isd.year}-${item.isd.month}-${item.isd.day}`,
            expiryDate: `${item.ped.year}-${item.ped.month}-${item.ped.day}`,
            issuanceCountry: getCountryCode(item.documents[0].nationality),
            validityCountry: getCountryCode(item.documents[0].nationality),
            nationality: getCountryCode(item.documents[0].nationality),
            holder: true,
          },
        ],
      }))
      .map(({ dob, isd, ped, ...rest }) => rest);

    storeItem("passenger_form", updatedArray);
    storeItem("contact_info", formData);

    if (formData.email) {
      await AutosignUpAccount(formData, dispatch);
      setPassengerFormData(updatedArray);
      setStep("flightDetailsPreview");
    } else {
      setPassengerFormData(updatedArray);
      setStep("flightDetailsPreview");
    }
    setLoading(false);
  };

  return (
    <section className="w-full">
      <form className="w-full" onSubmit={handleSubmit(SubmitPassengerForm)}>
        <div className="border rounded-md p-4  md:mx-6 min-[1059px]:mx-0">
          <div className="flex items-center justify-between">
            <p className="font-bold border-b pb-2 w-full">Passenger Details</p>
          </div>
          <div>
            {inputsArray.map((_, index) => (
              <div key={index} className="border-b">
                <p className="font-bold my-4">Passenger {index + 1}</p>
                <PassengerForm
                  index={index}
                  fields={fields}
                  register={register}
                  errors={errors}
                />
              </div>
            ))}
          </div>
          {/* <div className="w-[60%] mx-auto mt-4 bg-gray-300 rounded-md">
            <button type="submit" className="bg-transparent w-full py-2 ">
              Proceed
            </button>
          </div> */}
        </div>
        {/* </form> */}
        {/* CONTACT_INFORMATION_FORM */}
        {!user?._id && (
          <div className="mt-6 border px-6 mx-4 md:mx-6 min-[1059px]:mx-0 h-full rounded-md py-6">
            <h1 className="font-bold">Contact information</h1>
            <h1 className="font-bold text-red-400 animate-scale">
              Contact information automatically creates an account for you. If
              you already have an account Please Login
            </h1>
            <p className="text-[#868686]">
              The ticket and purchase confirmation will be sent to the contact
              information. Also, "announcement of ticket changes" or "receipt of
              confirmation" will be done from one of the channels of "user
              account contact information" or "information of the same form" .
            </p>
            {/* <form action=""> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
              <label
                htmlFor="Username"
                className="relative w-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="FirstName"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="peer w-full border-none py-1.5 px-2 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
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
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="peer w-full border-none py-1.5 px-2 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="lastname"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  LastName
                </span>
              </label>
              <label
                htmlFor="PhoneNumber"
                className="relative w-full block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="peer w-full border-none py-1.5 px-2 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Phone Number"
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full border-none py-1.5 px-2 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="email"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Email
                </span>
              </label>
            </div>
          </div>
        )}
        {/* CONTACT_INFORMATION_FORM */}

        <div className="flex gap-4 px-6 mx-4 md:mx-6 mt-5 mb-10 text-center justify-center ">
          <p>
            <input type="checkbox" />
          </p>
          <p className="text-[10px] sm:text-base">
            By proceeding, I acknowledge that I have read and agreed to
            Airpocket’s Flight booking{" "}
            <span className="text-[#1D91CC]"> terms & conditions</span>
          </p>
        </div>

        <div className="w-[40%] mx-auto bg-[#1D91CC] rounded-md">
          <button
            // onClick={() => {}}
            type="submit"
            className="bg-transparent w-full py-2 text-white "
          >
            {loading ? "Saving" : "Save"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default FlightDetailForm;

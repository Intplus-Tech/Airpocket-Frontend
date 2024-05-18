import { RootState } from "@/store/store";
import { Generic } from "@/types/typs";
import { formatCurrency } from "@/utils/monthDAys";
import { FaUser } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";

type PASSENGER_DETAILS_PREVIEW_PROPS = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  passengerFormData: Generic | null;
};

type PassengerFormDataProps = {
  id: number;
  passportNumber: string;
  firstName: string;
  lastName: string;
  gender: string;
  nationality: string;
  dob: {
    day: string;
    month: string;
    year: string;
  };
  ped: {
    day: string;
    month: string;
    year: string;
  };
};

const PassengerDetailsPreview = ({
  setStep,
  setCurrentStep,
  passengerFormData,
}: PASSENGER_DETAILS_PREVIEW_PROPS) => {
  const selectedFlight = useSelector(
    (state: RootState) => state.selectFlight.result
  );
  const { price } = selectedFlight?.data.flightOffers[0];

  return (
    <div className="bg-white py-3 my-4 rounded-lg border px-2 md:px-4">
      <div className="text-sm md:text-base flex justify-between items-center pt-2 pb-4 border-b border-b-gray-300">
        <h4 className="font-semibold">Passenger Details</h4>
        {/* <p className="flex gap-x-2 items-center">
          Time Left: <span className="text-red-500">07:23</span>
        </p> */}
      </div>

      <div className="py-4 text-sm md:text-base pt-2 pb-4 border-b border-b-gray-300">
        <div className="px-6 lg:px-8">
          {passengerFormData?.map((item: PassengerFormDataProps) => {
            return (
              <div key={item.id} className="space-y-4 py-4">
                {item.dob && (
                  <div>
                    <p className="flex items-center gap-x-2">
                      <FaUser />{" "}
                      <span className="capitalize">{`${item.firstName} ${item.lastName}`}</span>
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center gap-x-6 gap-y-2">
                      <p className="flex justify-between items-center gap-x-1 md:gap-x-2">
                        <span className="text-xs text-gray-500">
                          Age Category:{" "}
                        </span>
                        <span className="">{"Adult"}</span>
                      </p>

                      <p className="flex justify-between items-center gap-x-1 md:gap-x-2">
                        <span className="text-xs text-gray-500">
                          Date of birth:{" "}
                        </span>
                        <span className="">{`${item?.dob.day}/${item?.dob.month}/${item?.dob.year}`}</span>
                      </p>

                      <p className="flex justify-between items-center gap-x-1 md:gap-x-2">
                        <span className="text-xs sm:text-[18px] text-gray-500">
                          Ticket Price:{" "}
                        </span>
                        <span className="">
                          {formatCurrency(price.grandTotal)}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="text-sm pt-6 pb-5 space-y-3 border-b border-b-gray-300">
        <p className="text-gray-600 px-4">
          If you have a discount code, enter it and hit the Submit button.
        </p>
        <form className="flex gap-x-4 md:gap-x-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="discount code"
            className="border border-gray-300 rounded-lg px-6 py-2 focus:outline-none"
          />
          <button className="text-[#1D91CC] px-6 py-2 border border-[#1D91CC] rounded-lg">
            Submit
          </button>
        </form>
      </div> */}

      <div className="text-sm py-4 px-2 space-y-2">
        {/* <div className="flex gap-x-2 items-center">
          <input type="checkbox" name="" id="" />
          <p>Using wallet balance</p>
        </div> */}
        <div className="md:flex w-full gap-x-4 items-center justify-between space-y-2 md:space-y-0 text-[#1D91CC]">
          <button
            onClick={() => setStep("flightDetailsForm")}
            className="flex items-center min-w-fit gap-x-2"
          >
            <IoMdArrowBack />
            Return to the previous step
          </button>
          <div className="flex items-center gap-x-1 md:gap-x-2 justify-between">
            <p>
              Your Total Payment{" "}
              <span>
                {formatCurrency(price.grandTotal * passengerFormData?.length)}
              </span>
            </p>
            <button
              onClick={() => {
                setCurrentStep(3);
              }}
              className="px-3 min-w-fit text-white bg-[#1D91CC] py-2 rounded-lg"
            >
              Continue
              {/* Make Payment */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PassengerDetailsPreview;

import { FaUser } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

type PASSENGER_DETAILS_PREVIEW_PROPS = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
};

const PassengerDetailsPreview = ({
  setStep,
  setCurrentStep,
}: PASSENGER_DETAILS_PREVIEW_PROPS) => {
  const data = [
    {
      id: "1",
      name: "Mrs. Nafisat Doe",
      age_category: "Adult",
      date_of_birth: "25/04/1987",
      ticket_price: "NGN 11,470,154",
    },
    {
      id: "2",
      name: "Mrs. Nafisat Doe",
      age_category: "Adult",
      date_of_birth: "25/04/1987",
      ticket_price: "NGN 11,470,154",
    },
    {
      id: "3",
      name: "Mrs. Nafisat Doe",
      age_category: "Adult",
      date_of_birth: "25/04/1987",
      ticket_price: "NGN 11,470,154",
    },
  ];

  return (
    <div className="bg-white py-3 my-4 rounded-lg border px-2 md:px-4">
      <div className="text-sm md:text-base flex justify-between items-center pt-2 pb-4 border-b border-b-gray-300">
        <h4 className="font-semibold">Passenger Details</h4>
        <p className="flex gap-x-2 items-center">
          Time Left: <span className="text-red-500">07:23</span>
        </p>
      </div>

      <div className="py-4 text-sm md:text-base pt-2 pb-4 border-b border-b-gray-300">
        <div className="px-6 lg:px-8">
          {data.map(
            ({ id, name, age_category, date_of_birth, ticket_price }) => (
              <div key={id} className="space-y-4 py-4">
                <p className="flex items-center gap-x-2">
                  <FaUser /> <span>{name}</span>
                </p>
                <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
                  <p className="flex justify-between items-center gap-x-1 md:gap-x-2">
                    <span className="text-xs text-gray-500">
                      Age Category:{" "}
                    </span>
                    <span className="">{age_category}</span>
                  </p>
                  <p className="flex justify-between items-center gap-x-1 md:gap-x-2">
                    <span className="text-xs text-gray-500">
                      Date of birth:{" "}
                    </span>
                    <span className="">{date_of_birth}</span>
                  </p>
                  <p className="flex justify-between items-center gap-x-1 md:gap-x-2">
                    <span className="text-xs text-gray-500">
                      Ticket Price:{" "}
                    </span>
                    <span className="">{ticket_price}</span>
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="text-sm pt-6 pb-5 space-y-3 border-b border-b-gray-300">
        <p className="text-gray-600 px-4">
          If you have a discount code, enter it and hit the Submit button.
        </p>
        <form className="flex gap-x-4 md:gap-x-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="discount code"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <button className="text-[#1D91CC] px-4 py-2 border border-[#1D91CC] rounded-lg">
            Submit
          </button>
        </form>
      </div>

      <div className="text-sm py-4 px-2 space-y-2">
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" name="" id="" />
          <p>Using wallet balance</p>
        </div>
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
              Your Total Payment <span>NGN11,470,154</span>
            </p>
            <button
              onClick={() => {
                setCurrentStep("paymentOption");
              }}
              className="px-2 min-w-fit text-white bg-[#1D91CC] py-1 rounded-lg"
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PassengerDetailsPreview;

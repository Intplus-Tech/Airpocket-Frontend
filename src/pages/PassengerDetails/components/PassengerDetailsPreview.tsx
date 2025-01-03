import { useToast } from "@/components/ui/use-toast";
import { storeFlightDetails } from "@/Features/paymentSlice/reducer";
import { bookFlight } from "@/pages/Confirmation/slice/api";
import { RootState } from "@/store/store";
import { FlightOffer, Generic, TravellerFormData } from "@/types/typs";
import { getItemFromStorage, storeItem } from "@/utils/locaStorage";
import { formatCurrency } from "@/utils/monthDAys";
import { Loader } from "lucide-react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

type PASSENGER_DETAILS_PREVIEW_PROPS = {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  passengerFormData: Generic | null;
};

const PassengerDetailsPreview = ({
  setStep,
  setCurrentStep,
  passengerFormData,
}: PASSENGER_DETAILS_PREVIEW_PROPS) => {
  const { toast } = useToast();
  const selectedFlight: FlightOffer[] | null = useSelector(
    (state: RootState) => state.selectFlight.result
  );

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);
  // const paymentData = getItemFromStorage("paymentData");
  const TravellerDetails = getItemFromStorage("passenger_form");
  // const selectedflight = getItemFromStorage("selected_flight");
  const searchQuery = getItemFromStorage("flight-search-query");

  const handleBookFlight = async () => {
    setLoading(true);
    const bookingData = searchQuery.returnDate
      ? {
          flightOffers: selectedFlight,
          travelers: TravellerDetails,
          // payment: paymentData?._id,
          cabin: searchQuery.travelClass,
          from: searchQuery.originLocationCode,
          to: searchQuery.destinationLocationCode,
          departure: searchQuery.depatureTimeDate,
          destination: searchQuery.returnTimeDate,
          user: user?._id,
        }
      : {
          flightOffers: selectedFlight,
          travelers: TravellerDetails,
          // payment: paymentData?._id,
          cabin: searchQuery.travelClass,
          from: searchQuery.originLocationCode,
          to: searchQuery.destinationLocationCode,
          departure: searchQuery.depatureTimeDate,
          user: user?._id,
        };

    const response = await bookFlight(bookingData);
    console.log(response);

    if (response.success) {
      toast({ title: "Your flight has been booked successfull" });
      dispatch(storeFlightDetails(response.success));
      storeItem("PNR", response.success.PNR);
      storeItem("currentStep", 3);
      setCurrentStep(3);
    } else {
      toast({ title: "Something went wrong" });
    }
    setLoading(false);
  };

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
          {passengerFormData?.map((item: TravellerFormData) => {
            return (
              <div key={item.id} className="space-y-4 py-4">
                {item.dateOfBirth && (
                  <div>
                    <p className="flex items-center gap-x-2">
                      <FaUser />{" "}
                      <span className="capitalize">{`${item.name.firstName} ${item.name.lastName}`}</span>
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
                        <span className="">{`${item.dateOfBirth}`}</span>
                      </p>

                      <p className="flex justify-between items-center gap-x-1 md:gap-x-2">
                        <span className="text-xs sm:text-[18px] text-gray-500">
                          Ticket Price:{" "}
                        </span>
                        <span className="">
                          {formatCurrency(
                            Number(selectedFlight?.[0].price.grandTotal)
                          )}
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
        <div className="md:flex w-full gap-x-4 items-center justify-between space-y-2 md:space-y-0 ">
          <button
            onClick={() => setStep("flightDetailsForm")}
            className="flex items-center min-w-fit gap-x-2"
          >
            <IoMdArrowBack />
            Return to the previous step
          </button>

          <div className="flex items-center gap-x-1 md:gap-x-2 justify-between">
            <p className="text-[#1D91CC]">
              Payment{" "}
              <span>
                {formatCurrency(
                  Number(selectedFlight?.[0].price.grandTotal) *
                    passengerFormData?.length
                )}
              </span>
            </p>
            <button
              onClick={handleBookFlight}
              className=" min-w-fit text-white bg-[#1D91CC] py-2 px-8 rounded-lg"
            >
              {loading ? (
                <Loader className="animate-spin mx-auto w-full" />
              ) : (
                "Book Flight"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PassengerDetailsPreview;

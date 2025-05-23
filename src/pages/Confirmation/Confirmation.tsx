import { useState } from "react";

import { Image } from "@/components/Image/Index";
import confirmation from "./assets/confirm.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getItemFromStorage } from "@/utils/locaStorage";
import { useConfirmPaypment } from "./slice/query";
import { CircleX } from "lucide-react";
import { bookFlight } from "./slice/api";
import { useToast } from "@/components/ui/use-toast";
import Loader from "@/components/Loader/Loader";

type Props = {
  setCurrentStep: React.Dispatch<any>;
};

const Confirmation = ({ setCurrentStep }: Props) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  const paymentData = getItemFromStorage("paymentData");
  const TravellerDetails = getItemFromStorage("passenger_form");
  const selectedFlight = getItemFromStorage("selected_flight");
  const searchQuery = getItemFromStorage("flight-search-query");

  const { isLoading, data } = useConfirmPaypment({ id: paymentData?._id });

  if (loading) {
    return (
      <section className="fixed w-[100vw] h-full bg-[#1B96D6] bg-opacity-30 top-0 left-0 z-[100] ">
        <Loader />
      </section>
    );
  }

  const handleBookFlight = async () => {
    setLoading(true);
    const bookingData = searchQuery.returnDate
      ? {
          flightOffers: [selectedFlight],
          travelers: TravellerDetails,
          payment: paymentData?._id,
          cabin: searchQuery.travelClass,
          from: searchQuery.originLocationCode,
          to: searchQuery.destinationLocationCode,
          departure: searchQuery.depatureTimeDate,
          destination: searchQuery.returnTimeDate,
          user: user?._id,
        }
      : {
          flightOffers: [selectedFlight],
          travelers: TravellerDetails,
          payment: paymentData?._id,
          cabin: searchQuery.travelClass,
          from: searchQuery.originLocationCode,
          to: searchQuery.destinationLocationCode,
          departure: searchQuery.depatureTimeDate,
          user: user?._id,
        };

    const response = await bookFlight(bookingData);

    if (response.success) {
      toast({ title: "Your flight has been booked successfull" });
      setCurrentStep(5);
    } else {
      toast({ title: "Something went wrong" });
    }
    setLoading(false);
  };

  return (
    <section className="max-w-xl sm:mx-auto mx-4 min-h-[80vh] rid place-items-center h-full ">
      <div className="grid place-items-center h-full ">
        {data && data.data?.gateway_response === "Successful" ? (
          <div>
            <p className="bg-[#F3FDFA] px-6 py-2 text-center rounded-md flex items-center justify-center gap-1 md:gap-2 capitalize">
              <span>
                <Image src={confirmation} alt="confirmation" />
              </span>
              Your payment has been successfully completed.
            </p>
            <div className="my-4 py-2 px-2 flex items-center justify-center max-w-[40rem] text-center">
              <p className=" cursor-pointer">
                Thank you, Just one Step left for your booking order to be
                Completed.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => handleBookFlight()}
                className="bg-[#1D91CC] px-4 py-2 rounded-md text-white"
              >
                {loading ? "Loading..." : " Complete your Booking"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="bg-[#F3FDFA] px-6 py-2 text-center rounded-md flex items-center justify-center gap-1 md:gap-2 capitalize">
              <span>
                <CircleX className="text-red-500" />
              </span>
              Your payment has Failed.
            </p>

            <div className="my-4 py-2 px-2 flex items-center justify-center max-w-[40rem] text-center">
              <p className=" cursor-pointer">Please Try again</p>
            </div>
          </div>
        )}

        {isLoading && (
          <section className="fixed w-[100vw] h-full bg-[#1B96D6] bg-opacity-30 top-0 left-0 z-[100] ">
            <Loader />
          </section>
        )}
      </div>
    </section>
  );
};

export default Confirmation;

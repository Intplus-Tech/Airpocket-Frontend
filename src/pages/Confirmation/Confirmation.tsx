import { Image } from "@/components/Image/Index";
import confirmation from "./assets/confirm.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getItemFromStorage } from "@/utils/locaStorage";
import { useConfirmPaypment } from "./slice/query";
import { CircleX } from "lucide-react";
import { bookFlight } from "./slice/api";
import { useToast } from "@/components/ui/use-toast";

const Confirmation = () => {
  const { toast } = useToast();
  const user = useSelector((state: RootState) => state.user.user);
  const paymentData = getItemFromStorage("paymentData");
  const TravellerDetails = getItemFromStorage("passenger_form");
  const selectedFlight = getItemFromStorage("selected_flight");
  const searchQuery = getItemFromStorage("flight-search-query");
  const { isLoading, data } = useConfirmPaypment({ id: paymentData._id });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleBookFlight = async () => {
    const bookingData = searchQuery.returnDate
      ? {
          flightOffers: [selectedFlight],
          travelers: TravellerDetails,
          payment: paymentData?._id,
          cabin: "ECONOMY",
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
          cabin: "ECONOMY",
          from: searchQuery.originLocationCode,
          to: searchQuery.destinationLocationCode,
          departure: searchQuery.depatureTimeDate,
          user: user?._id,
        };

    const response = await bookFlight(bookingData);

    response.success
      ? toast({ title: "Your flight has been booked successfull" })
      : toast({ title: "Something went wrong" });
  };

  return (
    <section className="max-w-xl sm:mx-auto mx-4">
      {data?.success && !isLoading ? (
        <div>
          <p className="bg-[#F3FDFA] px-6 py-2 text-center rounded-md flex items-center justify-center gap-1 md:gap-2 capitalize">
            <span>
              <Image src={confirmation} alt="confirmation" />
            </span>
            Your payment has been successfully completed.
          </p>
          <div className="my-4 py-2 px-2 flex items-center justify-center max-w-[40rem] text-center">
            <p className=" cursor-pointer">
              Thank you, your booking order will be processed soon.A
              confirmation email with all the details has been sent to
              <span className="text-[#1D91CC] pl-2">{user?.email}</span>.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => handleBookFlight()}
              className="bg-[#1D91CC] px-3 py-2 rounded-md text-white"
            >
              Complete your Booking
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
        </div>
      )}
    </section>
  );
};

export default Confirmation;

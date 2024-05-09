import { useSelector } from "react-redux";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Gulf from "../Table/assets/logo.svg";
import { Image } from "../Image/Index";
import { SearchResult } from "@/types/typs";
import Flight from "./assets/flight.svg";
import FilghtDetail from "@/pages/SearchResults/components/FlightDetails/FilghtDetail";
import { convertTime, extractTime, formatCurrency } from "@/utils/monthDAys";
import Clock from "./assets/clock.svg";
import { RootState } from "@/store/store";
import { useToast } from "../ui/use-toast";

type AvailableFlightData = {
  availableFlight: SearchResult;
};
const FlightAvailable = ({ availableFlight }: AvailableFlightData) => {
  const { toast } = useToast();
  const user = useSelector((state: RootState) => state.user.user);

  const navigate = useNavigate();

  const handleBookAction = () => {
    if (user?._id) {
      navigate("/flight-details");
    } else {
      toast({
        description: "Please Login to Continue",
      });
    }
  };

  return (
    <main className="mt-6">
      <section className=" mb-4">
        <div className="flex gap-4">
          <span className="text-sm font-bold">Sort By :</span>
          <span className="underline text-[#1B96D6]">Recommended</span>
          <span>Fastest</span> <span>cheapest</span>
        </div>

        <article className="border rounded-md pb-3  min-w-full overflow-x-auto">
          {availableFlight?.data?.map((flight) => {
            const { itineraries, travelerPricings } = flight;
            const { segments, duration } = itineraries[0];
            const { departure } = segments[0];
            const { arrival } = segments[segments.length - 1];
            const departureTime = extractTime(departure.at);
            const arrivalTime = extractTime(arrival.at);
            const realTime = convertTime(duration);

            return (
              <section
                key={flight.id}
                className="flex flex-col md:flex-row  md:items-center border-b py-3  justify-between mx-6  h-[10rem] "
              >
                <div className="flex items-center justify-between gap-8">
                  <div className="flex flex-col gap-2">
                    <Image
                      src={Gulf}
                      alt="airline Logo"
                      className="w-[30px] h-[30px] shrink-0 flex"
                    />
                    <span className="text-xs text-[#868686]">
                      {flight.airline}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-sm md:text-base font-bold">
                      {departureTime}
                    </span>
                    <p className="text-sm text-[#868686]">
                      {departure.iataCode}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 items-center justify-center">
                    <p className="flex gap-1 items-center">
                      <Image src={Clock} alt="clock" />
                      <span className="text-[#868686] text-center text-sm">
                        {` ${realTime?.hours}hrs`}
                        {` ${realTime?.minutes}mins`}
                      </span>
                    </p>
                    <Image src={Flight} alt="Flight" height={70} width={100} />
                    <p className="flex gap-1">
                      <span className="text-[#868686] text-center text-sm">
                        {` ${segments.length} stops`}
                      </span>
                      <span className="text-[#868686] text-center text-sm">
                        {travelerPricings[0].fareDetailsBySegment[0].cabin}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm md:text-bases font-bold">
                      {arrivalTime}
                    </span>
                    <p className="text-sm text-[#868686]">{arrival.iataCode}</p>
                  </div>
                </div>

                <div className="pb-4 md:mt-[-1rem]">
                  <div className="flex flex-col justify-center gap-2">
                    <Dialog>
                      <DialogTrigger>
                        <p className="text-sm text-[#1B96D6] text-end underline">
                          View Details
                        </p>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <FilghtDetail data={flight} />
                      </DialogContent>
                    </Dialog>

                    <div className="flex gap-4 items-center">
                      <p className="text-[#1B96D6]">
                        {formatCurrency(flight.price.grandTotal)}
                      </p>
                      <p>
                        <button
                          onClick={() => handleBookAction()}
                          className="w-full px-8 py-2 whitespace-nowrap bg-[#1B96D6] rounded-md text-white text-sm"
                        >
                          Book Now
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </article>
      </section>
    </main>
  );
};

export default FlightAvailable;

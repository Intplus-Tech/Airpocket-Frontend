import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Gulf from "../Table/assets/logo.svg";
import { Image } from "../Image/Index";
import { Generic } from "@/types/typs";
import Flight from "./assets/flight.svg";
import FilghtDetail from "@/pages/SearchResults/components/FlightDetails/FilghtDetail";
import { convertTime, extractTime, formatCurrency } from "@/utils/monthDAys";
import Clock from "./assets/clock.svg";
import { flightSelect } from "@/Features/selectFlight/api";
import { storeItem } from "@/utils/locaStorage";

type AvailableFlightData = {
  availableFlight: { [x: string]: any }[] | undefined;
};
const FlightAvailable = ({ availableFlight }: AvailableFlightData) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBookAction = (data: Generic) => {
    navigate("/flight-details");
    storeItem("currentStep", 2);

    flightSelect(data, dispatch);
    storeItem("selected_flight", data);
  };

  return (
    <main className="mt-6">
      <section className=" mb-4">
        <div className="flex gap-4 py-4 items-center">
          <span className="text-sm font-bold">Sort By :</span>
          <span className="underline text-[#1B96D6]">Recommended</span>
          <span>Fastest</span> <span>cheapest</span>
        </div>

        <article className="border rounded-md pb-3">
          {availableFlight?.length ? (
            availableFlight?.map((flight) => {
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
                          {`${realTime?.hours}hrs  ${realTime?.minutes}mins` ||
                            "N/A"}
                        </span>
                      </p>
                      <Image
                        src={Flight}
                        alt="Flight"
                        height={70}
                        width={100}
                      />
                      <p className="flex gap-1">
                        <span className="text-[#868686] text-center text-sm">
                          {` ${segments.length - 1} stops`}
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
                      <p className="text-sm text-[#868686]">
                        {arrival.iataCode}
                      </p>
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
                        <DialogContent className="w-full px-6 overflow-y-auto max-h-[80vh] bg-slate-50">
                          <FilghtDetail data={flight} />
                        </DialogContent>
                      </Dialog>

                      <div className="flex gap-4 items-center">
                        <p className="text-[#1B96D6]">
                          {formatCurrency(flight.price.grandTotal)}
                        </p>
                        <p>
                          <button
                            onClick={() => handleBookAction(flight)}
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
            })
          ) : (
            <div className="h-[20rem] flex items-center justify-center font-bold">
              No flight match your filter
            </div>
          )}
        </article>
      </section>
    </main>
  );
};

export default FlightAvailable;

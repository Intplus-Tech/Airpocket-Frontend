import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Gulf from "../Table/assets/logo.svg";
import { Image } from "../Image/Index";
import { AvailableFlightProps } from "@/types/typs";
import Flight from "./assets/flight.svg";
import FilghtDetail from "@/pages/SearchResults/components/FlightDetails/FilghtDetail";

type AvailableFlightData = {
  availableFlight: AvailableFlightProps;
};
const FlightAvailable = ({ availableFlight }: AvailableFlightData) => {
  return (
    <main className="mt-6">
      <section className=" mb-4">
        <div className="flex gap-4">
          <span className="text-sm font-bold">Sort By :</span>
          <span className="underline text-[#1B96D6]">Recommended</span>
          <span>Fastest</span> <span>cheapest</span>
        </div>

        <article className="border rounded-md pb-3 max-w-[20rem] min-w-full overflow-x-auto">
          {availableFlight?.map((flight) => (
            <section
              key={flight.id}
              className="flex items-center border-b min-w-[40rem] justify-between mx-6 h-[10rem] "
            >
              <div className="flex flex-col gap-2">
                <Image src={Gulf} alt="airline Logo" height={70} width={70} />
                <span className="text-xs text-[#868686]">{flight.airline}</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-base font-bold">
                  {flight.departureTime}
                </span>
                <p className="text-sm text-[#868686]">{flight.departure}</p>
              </div>

              <div className="flex flex-col gap-1 items-center justify-center">
                <span className="text-[#868686] text-center text-sm">
                  {flight.estimatedTime}
                </span>
                <Image src={Flight} alt="Flight" height={70} width={100} />
                <span className="text-[#868686] text-center text-sm">
                  {flight.desc}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-bases font-bold">
                  {flight.arrivalTime}
                </span>
                <p className="text-sm text-[#868686]">{flight.destination}</p>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <Dialog>
                    <DialogTrigger>
                      <p className="text-sm text-[#1B96D6] text-end underline">
                        View Details
                      </p>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <FilghtDetail />
                    </DialogContent>
                  </Dialog>

                  <div className="flex gap-4 items-center">
                    <p className="text-[#1B96D6]">NGN 3,142.456</p>
                    <p>
                      <button className="w-full px-8 py-2 bg-[#1B96D6] rounded-md text-white text-sm">
                        Book Now
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </article>
      </section>
    </main>
  );
};

export default FlightAvailable;

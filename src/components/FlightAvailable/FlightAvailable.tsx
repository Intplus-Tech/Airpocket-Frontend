import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Image } from "../Image/Index";
import { FilterProps, Generic } from "@/types/typs";
import Flight from "./assets/flight.svg";
import FilghtDetail from "@/pages/SearchResults/components/FlightDetails/FilghtDetail";
import { convertTime, extractTime, formatCurrency } from "@/utils/monthDAys";
import Clock from "./assets/clock.svg";
import { flightSelect } from "@/Features/selectFlight/api";
import { storeItem } from "@/utils/locaStorage";
import { RootState } from "@/store/store";
import { handleImageError } from "@/utils/Constant";
import { getAirline } from "@/constants/AirlineCode";

type AvailableFlightData = {
  availableFlight: { [x: string]: any }[] | undefined;
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
  filters: FilterProps;
};

const FlightAvailable = ({
  availableFlight,
  setFilters,
  filters,
}: AvailableFlightData) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dictionaries = useSelector(
    (state: RootState) => state.search.result?.dictionaries
  );

  const handleBookAction = (data: Generic) => {
    storeItem("dictionaries", dictionaries);
    navigate("/flight-details");
    storeItem("currentStep", 2);

    flightSelect(data, dispatch);

    storeItem("selected_flight", data);
  };

  const handleSort = (key: string) => {
    if (key === "Fastest") {
      setFilters((prev) => ({
        ...prev,
        sort: {
          fastest: true,
        },
      }));
    } else if (key === "Cheapest") {
      setFilters((prev) => ({
        ...prev,
        sort: {
          cheapest: true,
        },
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        sort: {
          recommended: true,
        },
      }));
    }
  };

  return (
    <main className="mt-6">
      <section className=" mb-4">
        <div className="flex gap-4 py-4 items-center">
          <span className="text-sm font-bold">Sort By :</span>
          <span
            onClick={() => handleSort("Recommended")}
            className={`  cursor-pointer ${
              filters.sort?.recommended && "text-[#1B96D6] underline"
            } `}
          >
            Recommended
          </span>
          <span
            className={`  cursor-pointer ${
              filters.sort?.fastest && "text-[#1B96D6] underline"
            } `}
            onClick={() => handleSort("Fastest")}
          >
            Fastest
          </span>{" "}
          <span
            className={`  cursor-pointer ${
              filters.sort?.cheapest && "text-[#1B96D6] underline"
            } `}
            onClick={() => handleSort("Cheapest")}
          >
            cheapest
          </span>
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
              const realTime2 =
                itineraries[1] && convertTime(itineraries[1].duration);

              return (
                <section key={flight.id} className="border-b">
                  <section className="flex flex-col gap-4 py-3 ">
                    <section className="flex flex-col md:flex-row  md:items-center  justify-between mx-6  h-[5rem] ">
                      <div className="w-full flex items-center justify-around gap-8">
                        <div className="flex flex-col gap-2">
                          <Image
                            // src={`${CLOUDINARY}/${segments[0].carrierCode}`}
                            src={
                              getAirline(segments[0].carrierCode)
                                ?.logo as string
                            }
                            alt="airline Logo"
                            handleError={handleImageError}
                            className="w-[30px] h-[30px] shrink-0 flex"
                          />
                          <span className="text-xs text-[#868686]">
                            {
                              dictionaries?.carriers[
                                segments[0].carrierCode as unknown as number
                              ]
                            }
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
                              {
                                travelerPricings[0].fareDetailsBySegment[0]
                                  .cabin
                              }
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
                    </section>

                    {itineraries[1] && (
                      <section className="flex flex-col md:flex-row  md:items-center py-3  justify-between mx-6  h-[10rem] ">
                        <div className="flex items-center justify-around w-full gap-8">
                          <div className="flex flex-col gap-2">
                            <Image
                              src={
                                getAirline(
                                  itineraries[1].segments[0].carrierCode
                                )?.logo as string
                              }
                              alt="airline Logo"
                              handleError={handleImageError}
                              className="w-[30px] h-[30px] shrink-0 flex"
                            />
                            <span className="text-xs text-[#868686]">
                              {
                                dictionaries?.carriers[
                                  segments[segments.length - 1]
                                    .carrierCode as unknown as number
                                ]
                              }
                            </span>
                          </div>

                          <div className="flex flex-col gap-2">
                            <span className="text-sm md:text-base font-bold">
                              {extractTime(
                                itineraries[1].segments[0].departure.at
                              )}
                            </span>
                            <p className="text-sm text-[#868686]">
                              {itineraries[1].segments[0].departure.iataCode}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1 items-center justify-center">
                            <p className="flex gap-1 items-center">
                              <Image src={Clock} alt="clock" />
                              <span className="text-[#868686] text-center text-sm">
                                {`${realTime2?.hours}hrs  ${realTime2?.minutes}mins` ||
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
                                {` ${itineraries[1].segments.length - 1} stops`}
                              </span>
                              <span className="text-[#868686] text-center text-sm">
                                {
                                  travelerPricings[0]?.fareDetailsBySegment[1]
                                    .cabin
                                }
                              </span>
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-sm md:text-bases font-bold">
                              {arrivalTime}
                            </span>
                            <p className="text-sm text-[#868686]">
                              {
                                itineraries[1].segments[
                                  itineraries[1].segments.length - 1
                                ]?.arrival?.iataCode
                              }
                            </p>
                          </div>
                        </div>
                      </section>
                    )}
                  </section>

                  <div className="pb-4 md:mt-[-1rem]">
                    <div className="flex  items-center justify-around  gap-2">
                      <Dialog>
                        <DialogTrigger>
                          <p className="text-sm text-[#1B96D6] text-end underline">
                            View Details
                          </p>
                        </DialogTrigger>
                        <DialogContent className="w-full px-6 overflow-y-auto h-[35rem] bg-slate-50 ">
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

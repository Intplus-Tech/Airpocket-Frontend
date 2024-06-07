import Gulf from "@/pages/SearchResults/assets/Gulf.svg";
import Flight from "@/components/FlightAvailable/assets/flight.svg";

import { Image } from "../Image/Index";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";
import { FlightOffer } from "@/types/typs";
import {
  // convertTime,
  extractTime,
  formatCurrency,
  formatDate,
} from "@/utils/monthDAys";

type SINGLE_FLIGHT_DETAILS_PROPS = {
  SINGLE_FLIGHT_DETAILS: FlightOffer[] | null;
};
// max-w-[20rem] min-w-full overflow-x-auto ARTICLE
//  min-w-[60rem] SECTION
const FlightDetails = ({
  SINGLE_FLIGHT_DETAILS,
}: SINGLE_FLIGHT_DETAILS_PROPS) => {
  if (SINGLE_FLIGHT_DETAILS) {
    const { itineraries, price, travelerPricings } = SINGLE_FLIGHT_DETAILS?.[0];
    const { segments } = itineraries[0];
    const { departure } = segments[0] || {};
    const { arrival } = segments[segments.length - 1];
    const departureTime = extractTime(departure.at);
    const arrivalTime = extractTime(arrival.at);
    const arrivalDate = formatDate(arrival.at);
    // const realTime = convertTime(duration);
    return (
      // <div>hey</div>
      <section
        key={SINGLE_FLIGHT_DETAILS[0].id}
        className="border mb-4 rounded-md"
      >
        <section className=" rounded-md my-8 w-full">
          <article className="  pb-3    p-4 ">
            <section className="flex items-center  justify-between h-[4rem]  ">
              <div className="flex flex-col gap-2 w-[40%] md:w-full">
                <Image src={Gulf} alt="airline Logo" height={70} width={70} />
                <span className="text-xs text-[#868686]">
                  {/* {SINGLE_FLIGHT_DETAILS[0].id} */}
                  Oman Air
                </span>
              </div>

              <div className="flex flex-col gap-2 w-full items-center">
                <span className="text-sm md:text-base font-bold">
                  {departureTime}
                </span>
                <p className="text-xs md:text-sm text-[#868686]">
                  {departure.iataCode}
                </p>
              </div>

              <div className="flex flex-col gap-1 items-center justify-center w-full">
                <span className="text-[#868686] text-center text-sm">
                  {/* {duration} */}
                </span>
                <Image src={Flight} alt="Flight" height={70} width={100} />
                <span className="text-[#868686] text-center text-sm">
                  {`${segments.length - 1} stop`}
                </span>
              </div>
              <div className="flex flex-col gap-2 w-full items-center">
                <span className="text-sm md:text-base font-bold">
                  {arrivalTime}
                </span>
                <p className="text-sm text-[#868686]">{arrival.iataCode}</p>
              </div>

              <div className="w-full">
                <p className="text-sm md:text-base">{arrivalDate}</p>
              </div>
            </section>
          </article>

          {!itineraries[1] && (
            <article className="w-full flex justify-between items-center px-2 md:px-4 py-4">
              <p className="text-[#1D91CC] bg-[#E8F4FA] rounded-md p-[8px]">
                {travelerPricings[0].fareDetailsBySegment[0].cabin}
              </p>
              <p className="text-[#1D91CC] text-xs sm:text-base">
                Your total payment :
                {`${formatCurrency(Number(price.grandTotal))}`}
              </p>
            </article>
          )}
        </section>

        {itineraries[1] && (
          <section className=" rounded-md my-8 w-full">
            <article className="  pb-3    p-4 ">
              <section className="flex items-center justify-between h-[4rem]  ">
                <div className="flex flex-col gap-2 w-[40%] md:w-full">
                  <Image src={Gulf} alt="airline Logo" height={70} width={70} />
                  <span className="text-xs text-[#868686]">
                    {SINGLE_FLIGHT_DETAILS[0].id}
                  </span>
                </div>

                <div className="flex flex-col gap-2 w-full items-center">
                  <span className="text-sm md:text-base font-bold">
                    {extractTime(itineraries[1]?.segments[0]?.departure.at)}
                  </span>
                  <p className="text-xs md:text-sm text-[#868686]">
                    {itineraries[1]?.segments[0]?.departure.iataCode}
                  </p>
                </div>

                <div className="flex flex-col gap-1 items-center justify-center w-full">
                  <span className="text-[#868686] text-center text-sm">
                    {/* {duration} */}
                  </span>
                  <Image src={Flight} alt="Flight" height={70} width={100} />
                  <span className="text-[#868686] text-center text-sm">
                    {`${itineraries[1]?.segments.length - 1} stop`}
                  </span>
                </div>
                <div className="flex flex-col gap-2 w-full items-center">
                  <span className="text-sm md:text-base font-bold">
                    {extractTime(itineraries[1]?.segments[0]?.arrival.at)}
                  </span>
                  <p className="text-sm text-[#868686]">
                    {
                      itineraries[1]?.segments[segments.length - 1]?.arrival
                        .iataCode
                    }
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-sm md:text-base">
                    {formatDate(
                      itineraries[1]?.segments[segments.length - 1]?.arrival.at
                    )}
                  </p>
                </div>
              </section>
            </article>

            <article className="w-full flex justify-between items-center px-2 md:px-4 py-4">
              <p className="text-[#1D91CC] bg-[#E8F4FA] rounded-md p-[8px]">
                {travelerPricings[0].fareDetailsBySegment[0].cabin}
              </p>
              <p className="text-[#1D91CC] text-xs sm:text-base">
                Your total payment :
                {`${formatCurrency(Number(price.grandTotal))}`}
              </p>
            </article>
          </section>
        )}
      </section>
    );
  } else {
    <div className="flex items-center justify-center h-[10rem]">
      <h1>something went wrong</h1>
    </div>;
  }
};
export default FlightDetails;

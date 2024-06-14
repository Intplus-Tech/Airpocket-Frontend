import { useState } from "react";
import { useSelector } from "react-redux";

import { Image } from "@/components/Image/Index";
import Flight from "../../assets/verticalstop.svg";
import { SingleSearchResult } from "@/types/typs";
import {
  convertTime,
  extractTime,
  formatCurrency,
  formatDate,
} from "@/utils/monthDAys";
import { RootState } from "@/store/store";
import { handleImageError } from "@/utils/Constant";
import { getAirline } from "@/constants/AirlineCode";

const FilghtDetail = (singleFlight: SingleSearchResult) => {
  const [componentType, setComponentType] = useState("flightDetails");

  const FlightInformation = () => {
    if (!singleFlight?.data) {
      return null;
    }
    const { itineraries, travelerPricings, price } = singleFlight?.data;
    const { segments, duration } = itineraries[0];
    const dictionaries = useSelector(
      (state: RootState) => state.search.result?.dictionaries
    );
    const realTime2 = itineraries[1] && convertTime(itineraries[1].duration);
    // const { arrival } = segments[segments.length - 1];
    // const departureTime = extractTime(departure.at);
    // const arrivalTime = extractTime(arrival.at);
    const realTime = convertTime(duration);

    return (
      <main className="h-full w-full ">
        <section>
          <div className="flex items-center justify-between mt-4">
            <p className="flex gap-4 items-center w-full">
              <Image
                src={getAirline(segments[0].carrierCode)?.logo as string}
                alt="airline Logo"
                handleError={handleImageError}
                className="w-[30px] h-[30px] shrink-0 flex"
              />
              <span className="font-bold">
                {
                  dictionaries?.carriers[
                    segments[0].carrierCode as unknown as number
                  ]
                }
              </span>
            </p>
            <p className="w-full">
              Total: {` ${realTime?.hours}hrs`}
              {` ${realTime?.minutes}mins`}
            </p>
            <div className="flex flex-col gap-2 justify-end w-full">
              <p className="bg-[#FFF2F2] text-[#C30000] text-xs md:text-sm text-center w-fit rounded-md">
                Refundable {"(Penalty Applies)"}
              </p>
              <p className="bg-[#E8F4FA] text-[#1D91CC]  w-fit flex items-end self-end rounded-md px-2">
                {travelerPricings[0].fareDetailsBySegment[0].cabin}
              </p>
            </div>
          </div>

          {/* stops */}
          <div className="mt-4">
            {segments.map((segment: any, index: number) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <p className="w-full flex gap-4">
                      <span className=" font-bold px-1">
                        {extractTime(segment.departure.at)}
                      </span>
                      <span> {segment?.departure.iataCode}</span>
                    </p>
                    <p className="w-full">{formatDate(segment.departure.at)}</p>
                  </div>
                  <span>
                    <Image src={Flight} alt="Flight logo" />
                  </span>
                </div>
              );
            })}

            <div className="flex items-center gap-2 my-5">
              <p>
                <span className="font-bold pr-3">
                  {extractTime(segments[segments.length - 1].arrival.at)}
                </span>
                {segments[segments.length - 1].arrival.iataCode}
              </p>
              <p>{formatDate(segments[segments.length - 1].arrival.at)} </p>
            </div>
            {/* <p className="flex flex-col w-full">
              <span>{`Price Per Persenger  ${formatCurrency(
                price.grandTotal
              )}  `}</span>
            </p> */}
          </div>

          <hr className="my-5" />
          {itineraries[1] && (
            <div>
              <div className="flex items-center justify-between py-2">
                <p className="flex gap-4 items-center w-full">
                  <Image
                    src={
                      getAirline(itineraries[1].segments[0].carrierCode)
                        ?.logo as string
                    }
                    alt="airline Logo"
                    handleError={handleImageError}
                    className="w-[30px] h-[30px] shrink-0 flex"
                  />
                  <span className="font-bold">
                    {
                      dictionaries?.carriers[
                        itineraries[1].segments[0]
                          .carrierCode as unknown as number
                      ]
                    }
                  </span>
                </p>
                <p className="w-full">
                  Total: {` ${realTime2?.hours}hrs`}
                  {` ${realTime2?.minutes}mins`}
                </p>
              </div>

              {itineraries[1].segments.map((segment: any, index: number) => {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <p className="w-full flex gap-4">
                        <span className=" font-bold px-1">
                          {extractTime(segment.departure.at)}
                        </span>
                        <span> {segment?.departure.iataCode}</span>
                      </p>
                      <p className="w-full">
                        {formatDate(segment.departure.at)}
                      </p>
                    </div>
                    <span>
                      <Image src={Flight} alt="Flight logo" />
                    </span>
                  </div>
                );
              })}

              <div className="flex items-center gap-2 my-5">
                <p>
                  <span className="font-bold pr-3">
                    {extractTime(
                      itineraries[1].segments[
                        itineraries[1].segments.length - 1
                      ].arrival.at
                    )}
                  </span>
                  {
                    itineraries[1].segments[itineraries[1].segments.length - 1]
                      .arrival.iataCode
                  }
                </p>
                <p>
                  {formatDate(
                    itineraries[1].segments[itineraries[1].segments.length - 1]
                      .arrival.at
                  )}{" "}
                </p>
              </div>
            </div>
          )}

          <p className="flex flex-col w-full">
            <span>{`Price Per Persenger  ${formatCurrency(
              price.grandTotal
            )}  `}</span>
            {/* <span>Price Per Child ₦11.742,342</span> */}
          </p>
        </section>
      </main>
    );
  };

  const GeneralInformation = () => {
    return (
      <section className="w-full">
        <div className="max-w-[35rem] mx-auto flex flex-col gap-16 mt-5">
          <div>
            <h1 className="text-lg font-bold">Refundable</h1>
            <p>Non refundable</p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Price</h1>
            <p>
              Total fare displayed above has been rounded off and may thus show
              a slight difference.
            </p>
          </div>
        </div>
      </section>
    );
  };
  return (
    <main>
      <div className=" mt-4 border-b pb-2 flex gap-4 z-50">
        <p
          onClick={() => setComponentType("flightDetails")}
          className={`cursor-pointer ${
            componentType === "flightDetails" && "text-[#1D91CC]"
          }`}
        >
          Flight Information
        </p>
        <p
          onClick={() => setComponentType("generalInfomation")}
          className={`cursor-pointer ${
            componentType === "generalInfomation" && "text-[#1D91CC]"
          }`}
        >
          General Information
        </p>
      </div>
      {componentType === "flightDetails" && <FlightInformation />}
      {componentType === "generalInfomation" && <GeneralInformation />}
    </main>
  );
};

export default FilghtDetail;

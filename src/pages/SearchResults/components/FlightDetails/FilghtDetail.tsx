import { useState } from "react";

import { Image } from "@/components/Image/Index";
import Gulf from "../../assets/Gulf.svg";
import Flight from "../../assets/verticalstop.svg";
import { SingleSearchResult } from "@/types/typs";
import {
  convertTime,
  extractTime,
  formatCurrency,
  formatDate,
} from "@/utils/monthDAys";

const FilghtDetail = (singleFlight: SingleSearchResult) => {
  const [componentType, setComponentType] = useState("flightDetails");

  const FlightInformation = () => {
    if (!singleFlight?.data) {
      return null;
    }
    const { itineraries, travelerPricings, price } = singleFlight?.data;
    const { segments, duration } = itineraries[0];
    // const { departure } = segments[0];
    // const { arrival } = segments[segments.length - 1];
    // const departureTime = extractTime(departure.at);
    // const arrivalTime = extractTime(arrival.at);
    const realTime = convertTime(duration);

    return (
      <main className="h-full w-full ">
        <section>
          <div className="flex items-center justify-between mt-4">
            <p className="flex gap-4 items-center w-full">
              <Image src={Gulf} alt="Airline logo" />
              <span className="font-bold">Gulf</span>
            </p>
            <p className="w-full">
              Total: {` ${realTime?.hours}hrs`}
              {` ${realTime?.minutes}mins`}
            </p>
            <div className="flex flex-col gap-2 justify-end w-full">
              <p className="bg-[#FFF2F2] text-[#C30000] text-xs md:text-base text-center w-fit rounded-md">
                Refundable {"(Penalty Applies)"}
              </p>
              <p className="bg-[#E8F4FA] text-[#1D91CC]  w-fit flex items-end self-end rounded-md px-2">
                {travelerPricings[0].fareDetailsBySegment[0].cabin}
              </p>
            </div>
          </div>

          {/* stops */}
          <div className="mt-4">
            {segments.map((segment: any) => {
              return (
                <div className="flex flex-col gap-2">
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

            {/* 
          <div className="mt-6 flex gap-4 items-center">
            <span>
              <Image src={Flight} alt="Flight logo" />
            </span>
            <span className="text-[#A9791C] bg-[#FFF8E1] pl-8 h-fit flex items-center py-2 px-4">
              Stopover in Amman, Queen Alia Airport
            </span>
          </div> */}
            {/* <div className="flex items-center gap-2 my-5">
            <p>
              <span className="font-bold pr-3">
                {extractTime(segments[1]?.departure.at)}
              </span>
              {segments[1]?.departure.iataCode}
            </p>
            <p>{formatDate(segments[1]?.departure.at)} </p>
          </div> */}

            {/* <div>
            <span>
              <Image src={Flight} alt="Flight logo" />
            </span>
          </div> */}

            <div className="flex items-center gap-2 my-5">
              <p>
                <span className="font-bold pr-3">
                  {extractTime(segments[segments.length - 1].arrival.at)}
                </span>
                {segments[segments.length - 1].arrival.iataCode}
              </p>
              <p>{formatDate(segments[segments.length - 1].arrival.at)} </p>
            </div>
            <p className="flex flex-col w-full">
              <span>{`Price Per Persenger  ${formatCurrency(
                price.grandTotal
              )}  `}</span>
              {/* <span>Price Per Child ₦11.742,342</span> */}
            </p>
          </div>
        </section>
      </main>
    );
  };
  const GeneralInformation = () => {
    return (
      <section className="w-full">
        <h1 className="font-bold">About </h1>
        <div className="max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ullamcorper a lacus vestibulum sed. Scelerisque eleifend donec pretium
          vulputate sapien. Eu lobortis elementum nibh tellus molestie. Quis
          varius quam quisque id diam. Aliquam sem et tortor consequat id porta
          nibh venenatis cras. Duis ut diam quam nulla. In metus vulputate eu
          scelerisque. Id aliquet lectus proin nibh nisl condimentum. Purus sit
          amet volutpat consequat mauris nunc congue nisi. Ullamcorper sit amet
          risus nullam eget felis eget nunc. Consectetur adipiscing elit ut
          aliquam purus. Quis viverra nibh cras pulvinar mattis nunc.
        </div>
      </section>
    );
  };
  return (
    <main>
      <div className=" mt-4 border-b pb-2 flex gap-4 z-50">
        <p
          onClick={() => setComponentType("flightDetails")}
          className="cursor-pointer"
        >
          Flight Information
        </p>
        <p
          onClick={() => setComponentType("generalInfomation")}
          className="cursor-pointer border-b active"
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

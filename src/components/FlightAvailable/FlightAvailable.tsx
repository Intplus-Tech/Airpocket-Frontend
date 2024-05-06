import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import Gulf from "../Table/assets/logo.svg";
import { Image } from "../Image/Index";
import { SearchResult } from "@/types/typs";
import Flight from "./assets/flight.svg";
import FilghtDetail from "@/pages/SearchResults/components/FlightDetails/FilghtDetail";
import { convertTime, extractTime, formatCurrency } from "@/utils/monthDAys";
import Clock from "./assets/clock.svg";

type AvailableFlightData = {
  availableFlight: SearchResult;
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
          {availableFlight?.data?.map((flight) => {
            const { itineraries, travelerPricings } = flight;
            const { segments, duration } = itineraries[0];
            const { departure } = segments[0];
            const { arrival } = segments[segments.length - 1];
            const departureTime = extractTime(departure.at);
            const arrivalTime = extractTime(arrival.at);
            const realTime = convertTime(duration);
            console.log(flight.price);

            return (
              <section
                key={flight.id}
                className="flex items-center border-b min-w-[40rem] justify-between mx-6 h-[10rem] "
              >
                <div className="flex flex-col gap-2">
                  <Image src={Gulf} alt="airline Logo" height={70} width={70} />
                  <span className="text-xs text-[#868686]">
                    {flight.airline}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm md:text-base font-bold">
                    {departureTime}
                  </span>
                  <p className="text-sm text-[#868686]">{departure.iataCode}</p>
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
                      <p className="text-[#1B96D6]">
                        {formatCurrency(flight.price.grandTotal)}
                      </p>
                      <p>
                        <button className="w-full px-8 py-2 bg-[#1B96D6] rounded-md text-white text-sm">
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

{
  /*
  {
                "type": "flight-offer",
                "id": "1",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "lastTicketingDate": "2024-10-30",
                "lastTicketingDateTime": "2024-10-30",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT26H25M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "SYD",
                                    "terminal": "1",
                                    "at": "2024-10-30T12:50:00"
                                },
                                "arrival": {
                                    "iataCode": "XMN",
                                    "terminal": "3",
                                    "at": "2024-10-30T18:25:00"
                                },
                                "carrierCode": "MF",
                                "number": "802",
                                "aircraft": {
                                    "code": "789"
                                },
                                "operating": {
                                    "carrierCode": "MF"
                                },
                                "duration": "PT8H35M",
                                "id": "53",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "XMN",
                                    "terminal": "3",
                                    "at": "2024-10-31T08:30:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2024-10-31T11:15:00"
                                },
                                "carrierCode": "MF",
                                "number": "853",
                                "aircraft": {
                                    "code": "738"
                                },
                                "operating": {
                                    "carrierCode": "MF"
                                },
                                "duration": "PT3H45M",
                                "id": "54",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "NGN",
                    "total": "374797.00",
                    "base": "141144.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "374797.00"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "MF"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "NGN",
                            "total": "374797.00",
                            "base": "141144.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "53",
                                "cabin": "ECONOMY",
                                "fareBasis": "SOW6AAUS",
                                "brandedFare": "YSTANDARD",
                                "brandedFareLabel": "ECONOMY STANDARD",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE  TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE  TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "54",
                                "cabin": "ECONOMY",
                                "fareBasis": "SOW6AAUS",
                                "brandedFare": "YSTANDARD",
                                "brandedFareLabel": "ECONOMY STANDARD",
                                "class": "S",
                                "includedCheckedBags": {
                                    "quantity": 1
                                },
                                "amenities": [
                                    {
                                        "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                        "isChargeable": false,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUNDABLE  TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE  TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
*/
}

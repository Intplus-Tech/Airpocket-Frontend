import TableComponent from "@/components/Table/Table";
import { useDispatch, useSelector } from "react-redux";

import { Image } from "@/components/Image/Index";
import SearchBcg from "./assets/SearchFlight.jpeg";
import Filters from "@/components/Filters/Filters";
import FlightAvailable from "@/components/FlightAvailable/FlightAvailable";
import SearchParams from "./components/SearchParams/SearchParams";
import { RootState } from "@/store/store";
import NotFilght from "./assets/Noflight.svg";
import { useEffect, useState } from "react";
import { searchFlight } from "@/Features/searchslice/api";
import { getItemFromStorage } from "@/utils/locaStorage";
import MobileFilters from "@/components/MobileFilters/MobileFilters";
import { FilterProps, SearchResult } from "@/types/typs";
import { extractHour } from "@/utils/monthDAys";
import Loader from "@/components/Loader/Loader";

const SearchResults = () => {
  const DEFAULT_CUSTOM_PRICE = [0, 5000000] as [number, number];
  const DEFAULT_CUSTOM_DEPARTURE_TIME = [0, 24] as [number, number];
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterProps>({
    price: { range: DEFAULT_CUSTOM_PRICE },
    stops: null,
    departureTime: {
      range: DEFAULT_CUSTOM_DEPARTURE_TIME,
    },
    sort: {
      recommended: true,
      cheapest: false,
      fastest: false,
    },
  });

  const [filteredResult, setFilteredResult] = useState<
    { [x: string]: any }[] | undefined
  >([]);
  const searchResult: SearchResult | undefined = useSelector(
    (state: RootState) => state.search.result
  );

  const isLoading = useSelector((state: RootState) => state.search.isLoading);

  const flightQuery = getItemFromStorage("flight-search-query");
  const filterByPriceRange = () => {
    const filtered = (searchResult?.data ?? []).filter((result) => {
      const priceMatch =
        result.price.grandTotal >= filters.price.range[0] &&
        result.price.grandTotal <= filters.price.range[1];

      const timeMatch =
        extractHour(result?.itineraries[0]?.segments[0]?.departure.at) >=
          filters.departureTime.range[0] &&
        extractHour(result?.itineraries[0]?.segments[0].departure.at) <=
          filters.departureTime?.range[1];

      const stopsMatch =
        filters.stops !== null
          ? result.itineraries[0].segments.length - 1 === Number(filters.stops)
          : true;

      return priceMatch && timeMatch && stopsMatch;
    });
    const minPrice = Math.min(
      ...filtered.map((result) => result.price.grandTotal)
    );

    const resultsWithMinPrice = filtered.filter(
      (result) => Number(result.price.grandTotal) === minPrice
    );

    filters.sort?.cheapest
      ? setFilteredResult(resultsWithMinPrice)
      : setFilteredResult(filtered);
  };

  useEffect(() => {
    filterByPriceRange();
  }, [
    !isLoading,
    filters.price.range[0],
    filters.price.range[1],
    filters.departureTime.range[0],
    filters.departureTime.range[1],
    filters.stops,
    filters.sort?.cheapest,
  ]);

  useEffect(() => {
    if (!searchResult) {
      searchFlight(
        {
          ...flightQuery,
        },
        dispatch
      );
    }
  }, []);

  // if (isLoading) {
  //   return (
  //     <section className="fixed w-[100vw] h-full bg-[#1B96D6] bg-opacity-30 top-0 left-0 z-[100] ">
  //       <Loader />
  //     </section>
  //   );
  // }

  return (
    <main className="mb-8">
      <div className="fixed bottom-[5rem] w-full flex items-center md:hidden z-[150]">
        <div className="w-[90vw] mx-auto">
          <MobileFilters filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <div className="absolute top-0  w-full">
        <Image
          src={SearchBcg}
          alt="Searh"
          className="bg-cover mx-auto min-h-[200px] md:min-h-[250px] lg:min-h-[301px]"
        />
        <div
          className={`absolute w-full z-20 ${
            isOpen ? "top-[6rem] md:top-[8rem] " : "bottom-[-2rem]"
          }  `}
        >
          <SearchParams isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <div className=" mt-[12rem] md:mt-[15rem] lg:mt-[18rem] xl:mt-[18rem] w-full">
        <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-3 sm:mx-auto sm:px-3 md:px-6 md:mx-auto flex  gap-6">
          <div
            className={`hidden lg:block  w-[310px] ${
              isOpen && "lg:mt-[6rem] "
            } `}
          >
            <Filters filters={filters} setFilters={setFilters} />
          </div>
          {/* Flight Tables min-[1028px]:block*/}
          <div
            className={`h-full w-full ${
              isOpen &&
              "lg:mt-[6rem] md:mt-[13rem] sm:mt-[7rem] min-[576px]:mt-[10rem]  mt-[26rem]"
            } `}
          >
            {!searchResult || searchResult.data.length === 0 ? (
              <div className="w-full h-[100vh] flex  justify-center">
                <div>
                  <Image
                    src={NotFilght}
                    alt="Flight not found"
                    className="mt-10 mx-auto"
                  />
                  <p className="text-[12px] text-center font-bold text-[#868686]">
                    No flights were found for Istanbul to Dubai on this date.
                  </p>
                  <p className="text-[#ADADAD] text-center font-bold">
                    Search on a different date
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <TableComponent />
                <FlightAvailable
                  availableFlight={filteredResult}
                  setFilters={setFilters}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {isLoading && (
        <section className="fixed w-[100vw] h-full bg-[#1B96D6] bg-opacity-30 top-0 left-0 z-[100] ">
          <Loader />
        </section>
      )}
    </main>
  );
};

export default SearchResults;

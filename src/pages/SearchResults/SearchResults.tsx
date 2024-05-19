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

const SearchResults = () => {
  const DEFAULT_CUSTOM_PRICE = [0, 500000] as [number, number];
  const DEFAULT_CUSTOM_DEPARTURE_TIME = [0, 24] as [number, number];
  const dispatch = useDispatch();
  const [filters, setFilters] = useState<FilterProps>({
    price: { range: DEFAULT_CUSTOM_PRICE },
    stops: null,
    departureTime: {
      range: DEFAULT_CUSTOM_DEPARTURE_TIME,
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
    const filtered = searchResult?.data?.filter((result) => {
      const priceMatch =
        result.price.grandTotal >= filters.price.range[0] &&
        result.price.grandTotal <= filters.price.range[1];
      const timeMatch =
        extractHour(result.itineraries[0].segments[0].departure.at) >=
          filters.departureTime.range[0] &&
        extractHour(result.itineraries[0].segments[0].departure.at) <=
          filters.departureTime.range[1];
      return priceMatch && timeMatch;
    });
    setFilteredResult(filtered);
  };

  useEffect(() => {
    filterByPriceRange();
  }, [
    filters.price.range[0],
    filters.price.range[1],
    filters.departureTime.range[0],
    filters.departureTime.range[1],
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

  if (isLoading) {
    return <h1 className="font-bold text-4xl text-center">loading</h1>;
  }

  return (
    <main className="mb-8">
      <div className="fixed bottom-[5rem] w-full flex items-center md:hidden">
        <div className="w-[90vw] mx-auto">
          <MobileFilters />
        </div>
      </div>

      <div className="absolute top-0 z-[-10] w-full">
        <Image
          src={SearchBcg}
          alt="Searh"
          className="bg-cover mx-auto min-h-[200px] md:min-h-[250px] lg:min-h-[301px]"
        />
        <div className="absolute bottom-[-2rem] w-full ">
          <SearchParams />
        </div>
      </div>

      <div className=" mt-[12rem] md:mt-[15rem] lg:mt-[18rem] xl:mt-[18rem] w-full">
        <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-3 sm:mx-auto sm:px-3 md:px-6 md:mx-auto flex  gap-6">
          <div className="hidden lg:block  w-[310px]">
            <Filters filters={filters} setFilters={setFilters} />
          </div>
          {/* Flight Tables min-[1028px]:block*/}
          <div className="h-full w-full ">
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
                <FlightAvailable availableFlight={filteredResult} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default SearchResults;

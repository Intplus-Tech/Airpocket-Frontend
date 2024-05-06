import TableComponent from "@/components/Table/Table";
import { useDispatch, useSelector } from "react-redux";

import { Image } from "@/components/Image/Index";
import SearchBcg from "./assets/SearchFlight.jpeg";
import Filters from "@/components/Filters/Filters";
import FlightAvailable from "@/components/FlightAvailable/FlightAvailable";
import SearchParams from "./components/SearchParams/SearchParams";
import { RootState } from "@/store/store";
import NotFilght from "./assets/Noflight.svg";
import { useEffect } from "react";
import { searchFlight } from "@/Features/searchslice/api";
import { getItemFromStorage } from "@/utils/locaStorage";

// type searchResultProps = {
//   setCurrentStep?: React.Dispatch<React.SetStateAction<string>>;
// };

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector((state: RootState) => state.search.result);
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const isLoading = useSelector((state: RootState) => state.search.isLoading);
  const flightQuery = getItemFromStorage("flight-search-query");
  console.log("fightfquery", flightQuery);

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
        <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-8 md:mx-auto flex  gap-6">
          <div className="hidden min-[1028px]:block w-[310px]">
            <Filters />
          </div>
          {/* Flight Tables */}
          <div className="h-full w-full ">
            {searchResult ? (
              <div>
                <TableComponent />
                <FlightAvailable availableFlight={searchResult} />
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default SearchResults;

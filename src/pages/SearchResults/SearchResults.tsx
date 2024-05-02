import TableComponent from "@/components/Table/Table";

import { Image } from "@/components/Image/Index";
import SearchBcg from "./assets/SearchFlight.jpeg";
import Filters from "@/components/Filters/Filters";
import FlightAvailable from "@/components/FlightAvailable/FlightAvailable";
import { AvailableFlightProps } from "@/types/typs";
import SearchParams from "./components/SearchParams/SearchParams";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

// type searchResultProps = {
//   setCurrentStep?: React.Dispatch<React.SetStateAction<string>>;
// };

const SearchResults = () => {
  const searchResult = useSelector((state: RootState) => state.search.result);

  const AVAILABLE_FLIGHT: AvailableFlightProps = [
    {
      id: "1",
      airline: "Arik Air",
      departureTime: "02:50",
      arrivalTime: "21:15",
      departure: "INSTABUL-(IST)",
      destination: "Dubai",
      estimatedTime: "01:20 mins",
      desc: "20kg 0 stops Economy ",
      price: "₦",
    },
    {
      id: "2",
      airline: "Fly Emirates",
      departureTime: "02:50",
      arrivalTime: "21:15",
      departure: "INSTABUL-(IST)",
      destination: "Dubai",
      estimatedTime: "01:20 mins",
      desc: "20kg 0 stops Economy ",
      price: "₦",
    },
    {
      id: "3",
      airline: "quartar Airways",
      departureTime: "02:50",
      arrivalTime: "21:15",
      departure: "INSTABUL-(IST)",
      destination: "Dubai",
      estimatedTime: "01:20 mins",
      desc: "20kg 0 stops Economy ",
      price: "₦",
    },
  ];

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
            <TableComponent />
            <FlightAvailable availableFlight={searchResult} />
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default SearchResults;

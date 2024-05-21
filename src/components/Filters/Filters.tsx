import Pricerange from "./components/Pricerange/Pricerange";
import Airline from "./components/Airline/Airline";
import Stops from "./components/Stops/Stops";
import CountrySelect from "./components/AirportSelect/AirportSelect";
import { X } from "lucide-react";
import { FilterProps } from "@/types/typs";

type FlightProps = {
  setCloseModal?: React.Dispatch<React.SetStateAction<boolean>>;
  filters: FilterProps;
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
};

const Filters = ({ setCloseModal, filters, setFilters }: FlightProps) => {
  return (
    <section className="bg-[#EDEDED] bg-opacity-40 min-h-[100vh] flex items-start  justify-center px-8 rounded-md">
      <div className="mt-10 w-[294px]">
        <div className=" flex justify-between">
          <h1>Filters</h1>

          <X
            className="text-[#1B96D6]"
            onClick={() => setCloseModal?.(false)}
          />
        </div>
        <div className=" mt-8">
          <div>
            <Pricerange filters={filters} setFilters={setFilters} />
          </div>
          <div>
            <Airline />
          </div>
          <div>
            <Stops filters={filters} setFilters={setFilters} />
          </div>
          <div>
            <CountrySelect />
          </div>
        </div>
        <div
          onClick={() => setCloseModal?.(false)}
          className="md:hidden bg-[#1B96D6] text-white mt-6 mb-4 rounded-md"
        >
          <button className="w-full py-2 px-3 ">Apply Filters</button>
        </div>
      </div>
    </section>
  );
};

export default Filters;

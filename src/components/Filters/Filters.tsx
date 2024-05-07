import Pricerange from "./components/Pricerange/Pricerange";
import Airline from "./components/Airline/Airline";
import Stops from "./components/Stops/Stops";
import CountrySelect from "./components/AirportSelect/AirportSelect";
import { X } from "lucide-react";

type FlightProps = {
  setCloseModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Filters = ({ setCloseModal }: FlightProps) => {
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
            <Pricerange />
          </div>
          <div>
            <Airline />
          </div>
          <div>
            <Stops />
          </div>
          <div>
            <CountrySelect />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;

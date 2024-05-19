import { useState } from "react";

import Sort from "./assets/sort.svg";
import Filter from "./assets/filters.svg";
import { Image } from "../Image/Index";
import Filters from "../Filters/Filters";
import { FilterProps } from "@/types/typs";

const MobileFilters = () => {
  const [openFilter, setOpenFilters] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterProps>({
    price: {
      range: [0, 5000000],
    },
    stops: null,
    departureTime: {
      range: [0, 24],
    },
  });

  const handleFilter = () => {
    setActiveTab("filter");
    setOpenFilters(true);
  };
  const handleSort = () => {
    setActiveTab("sort");
  };

  return (
    <div className=" ">
      <div className="w-full text-white  bg-[#1B96D6] bg-opacity-90 flex items-center justify-between ">
        <p
          onClick={handleFilter}
          className={` ${
            activeTab === "filter" && "bg-[#465259]"
          } cursor-pointer flex gap-3 items-center w-full px-5 py-4 text-center`}
        >
          <Image src={Filter} alt="Filter" className="text-white" />
          <span className="text-lg">Filters</span>
        </p>
        <p
          onClick={handleSort}
          className={` ${
            activeTab === "sort" && "bg-[#465259]"
          } cursor-pointer flex gap-3 items-center w-full px-5 py-4 text-center`}
        >
          <Image src={Sort} alt="Sort" className="text-white" />
          <span className="text-lg">Sort</span>
        </p>
      </div>

      {openFilter && (
        <div className="fixed z-[10000] w-full h-full bg-zinc-200 top-0 left-0 overflow-auto">
          <Filters
            setCloseModal={setOpenFilters}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      )}
    </div>
  );
};

export default MobileFilters;

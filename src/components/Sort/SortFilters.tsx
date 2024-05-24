import { FilterProps } from "@/types/typs";
import { X } from "lucide-react";
type FlightProps = {
  // setCloseModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveTab?: React.Dispatch<React.SetStateAction<string | null>>;
  filters: FilterProps;
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
};

const SortFilters = ({ setActiveTab, filters, setFilters }: FlightProps) => {
  const SORT_FILTERS = [
    {
      id: "1",
      text: "Recommended",
    },
    {
      id: "2",
      text: "Fastest",
    },
    {
      id: "3",
      text: "Cheapest",
    },
  ];

  const handleSort = (key: string) => {
    if (key === "Fastest") {
      setFilters((prev) => ({
        ...prev,
        sort: {
          fastest: true,
        },
      }));
    } else if (key === "Cheapest") {
      setFilters((prev) => ({
        ...prev,
        sort: {
          cheapest: true,
        },
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        sort: {
          recommended: true,
        },
      }));
    }
  };

  return (
    <section className="bg-[#EDEDED] bg-opacity-40 min-h-[100vh] flex items-start  justify-center px-8 rounded-md">
      <div className="mt-10 w-[294px]">
        <div className=" flex justify-between">
          <h1>Sort By</h1>

          <X className="text-[#1B96D6]" onClick={() => setActiveTab?.(null)} />
        </div>

        <div className="mt-4">
          {SORT_FILTERS.map((item) => (
            <p
              className="py-1 cursor-pointer"
              key={item.id}
              onClick={() => handleSort(item.text)}
            >
              {item.text}
            </p>
          ))}
        </div>

        <div
          onClick={() => setActiveTab?.(null)}
          className="md:hidden bg-[#1B96D6] text-white mt-6 mb-4 rounded-md"
        >
          <button className="w-full py-2 px-3 ">Apply Filters</button>
        </div>
      </div>
    </section>
  );
};

export default SortFilters;

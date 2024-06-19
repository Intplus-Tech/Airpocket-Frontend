import { ChangeEvent, useState } from "react";

import { AccordionComponent } from "@/components/Accordion/Accordion";
import { Image } from "@/components/Image/Index";
import CountryFlag from "../../assets/countryflag.svg";
import { FilterProps } from "@/types/typs";

type StopsProps = {
  filters: FilterProps;
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
};

const Stops = ({ setFilters }: StopsProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const airStopList = [
    { id: "0", key: "0", text: "zero" },
    { id: "1", key: "1", text: "One" },
    { id: "2", key: "2", text: "Two" },
    { id: "3", key: "3", text: "Three" },
  ];
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
    setFilters((prev) => ({
      ...prev,
      stops: event.target.value,
    }));
  };

  const renderStopPort = () => {
    return (
      <div>
        {airStopList.map((stop) => {
          return (
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id={stop.text}
                name="options"
                value={stop.key}
                checked={selected === stop.id}
                onChange={handleOptionChange}
              />
              <Image
                src={CountryFlag}
                alt={stop.text}
                className="h-8 w-8 flex items-end justify-center mt-1"
              />
              {stop.text}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <AccordionComponent title="Stop" content={renderStopPort()} />
    </div>
  );
};

export default Stops;

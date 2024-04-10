import { AccordionComponent } from "@/components/Accordion/Accordion";
import { Image } from "@/components/Image/Index";
import CountryFlag from "../../assets/countryflag.svg";

const Stops = () => {
  const airStopList = [
    { id: "1", name: "One", text: "One" },
    { id: "2", name: "Two", text: "Two" },
    { id: "3", name: "Three", text: "Three" },
  ];

  const renderStopPort = () => {
    return (
      <div>
        {airStopList.map((airline) => {
          return (
            <div className="flex gap-2 items-center">
              <input type="radio" />
              <Image
                src={CountryFlag}
                alt={airline.name}
                className="h-8 w-8 flex items-end justify-center mt-1"
              />
              {airline.text}
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

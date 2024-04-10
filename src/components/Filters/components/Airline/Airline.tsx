import { AccordionComponent } from "@/components/Accordion/Accordion";
import { Image } from "@/components/Image/Index";
import CountryFlag from "../../assets/countryflag.svg";

const Airline = () => {
  const airlineList = [
    { id: "1", name: "Pegasus", text: "Pegasus" },
    { id: "2", name: "Gulf", text: "Gulf" },
    { id: "3", name: "Emirates", text: "Emirates" },
    { id: "4", name: "Oman", text: "Oman" },
    { id: "5", name: "Quatar Airways", text: "Quatar Airways" },
    { id: "6", name: "FlyDubai", text: "FlyDubai" },
  ];

  const renderAirList = () => {
    return (
      <div>
        {airlineList.map((airline) => {
          return (
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
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
      <AccordionComponent title="Airlines Company" content={renderAirList()} />
    </div>
  );
};

export default Airline;

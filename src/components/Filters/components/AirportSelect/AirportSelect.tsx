import { AccordionComponent } from "@/components/Accordion/Accordion";
import { Image } from "@/components/Image/Index";
import CountryFlag from "../../assets/countryflag.svg";

const AirportSelect = () => {
  const airPortList = [
    { id: "1", name: "Instanbul-SAW", text: "Instanbul-SAW" },
    { id: "2", name: "Amman-AMM", text: "Amman-AMM" },
    { id: "3", name: "Instabul-IST", text: "Instabul-IST" },
    { id: "4", name: "Doha-DOH", text: "Doha-DOH" },
    { id: "5", name: "Muscat-MCT", text: "Muscat-MCT" },
    { id: "6", name: "Athen-AT", text: "Athen-AT" },
  ];

  const renderAirPort = () => {
    return (
      <div>
        {airPortList.map((airline) => {
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
      <AccordionComponent title="Country" content={renderAirPort()} />
    </div>
  );
};

export default AirportSelect;

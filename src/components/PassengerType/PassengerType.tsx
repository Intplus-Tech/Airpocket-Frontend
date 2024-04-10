import { Minus, Plus } from "lucide-react";
import { PassengersProps } from "../../types/typs";

const PassengerType = () => {
  const passengers: PassengersProps = [
    { id: "1", text: "Adults(13 and above)" },
    { id: "2", text: "Children (Age 2-12)" },
    { id: "3", text: "Infants (under 2)" },
  ];

  return (
    <div className=" py-2 pr-2 z-20">
      {passengers.map(({ id, text }) => (
        <div className="w-full flex gap-3 justify-between items-center">
          <p
            className="py-2 px-4 text-sm whitespace-nowrap hover:bg-gray-50"
            key={id}
          >
            {text}
          </p>
          <div className="flex items-center justify-between gap-3">
            <button className="rounded-[50%] border  p-[5px]">
              <Minus size={12} />
            </button>
            3
            <button className="rounded-[50%] border  p-[5px]">
              <Plus size={12} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PassengerType;

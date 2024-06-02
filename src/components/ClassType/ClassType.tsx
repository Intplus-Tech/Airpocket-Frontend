import { PassengersProps } from "../../types/typs";

type ClassTypProps = {
  classType: string;
  setClassType: React.Dispatch<React.SetStateAction<string>>;
  setOpenDropdownType: React.Dispatch<React.SetStateAction<string | null>>;
};

const ClassType = ({ setClassType, setOpenDropdownType }: ClassTypProps) => {
  const passengers: PassengersProps = [
    { id: "1", text: "Economy", value: "ECONOMY" },
    { id: "2", text: " Premium Economy", value: "PREMIUM_ECONOMY" },
    { id: "3", text: "Business Class", value: "BUSINESS" },
    { id: "4", text: "First Class", value: "FIRST" },
  ];

  const selectClassType = (type: string) => {
    setClassType(type);
  };

  const handleclick = (text: string | undefined) => {
    selectClassType(text?.toUpperCase() as string);
    setOpenDropdownType(null);
  };

  return (
    <div
      className="text-lg z-20 "
      onMouseLeave={() => {
        setOpenDropdownType(null);
      }}
    >
      {passengers.map(({ id, text, value }) => (
        <p
          onClick={() => handleclick(value)}
          className="py-2 px-4 text-sm whitespace-nowrap hover:bg-gray-50 cursor-pointer"
          key={id}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default ClassType;

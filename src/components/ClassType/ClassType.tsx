import { PassengersProps } from "../../types/typs";

type ClassTypProps = {
  classType: string;
  setClassType: React.Dispatch<React.SetStateAction<string>>;
  setOpenDropdownType: React.Dispatch<React.SetStateAction<string | null>>;
};

const ClassType = ({ setClassType, setOpenDropdownType }: ClassTypProps) => {
  const passengers: PassengersProps = [
    { id: "1", text: "Economy" },
    { id: "2", text: "Economy Premium" },
    { id: "3", text: "Business Class" },
    { id: "4", text: "First Class" },
  ];

  const selectClassType = (type: string) => {
    setClassType(type);
  };

  const handleclick = (text: string) => {
    selectClassType(text);
    setOpenDropdownType(null);
    console.log("hey");
  };

  return (
    <div
      className="text-lg z-20 "
      onMouseLeave={() => {
        setOpenDropdownType(null);
      }}
    >
      {passengers.map(({ id, text }) => (
        <p
          onClick={() => handleclick(text)}
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

import { PassengersProps } from "../../types/typs";

type ClassTypProps = {
  classType: string;
  setClassType: React.Dispatch<React.SetStateAction<string>>;
};

const ClassType = ({ setClassType }: ClassTypProps) => {
  const passengers: PassengersProps = [
    { id: "1", text: "Economy" },
    { id: "1", text: "Economy Premium" },
    { id: "1", text: "Business Class" },
    { id: "1", text: "First Class" },
  ];

  const selectClassType = (type: string) => {
    setClassType(type);
  };

  return (
    <div className="text-lg z-20 ">
      {passengers.map(({ id, text }) => (
        <p
          onClick={() => selectClassType(text)}
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

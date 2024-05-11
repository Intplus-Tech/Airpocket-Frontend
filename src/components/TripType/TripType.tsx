type TriptypProps = {
  tripType: string;
  setTripType: React.Dispatch<React.SetStateAction<string>>;
  setOpenDropdownType: React.Dispatch<React.SetStateAction<string | null>>;
};

const TripType = ({
  tripType,
  setTripType,
  setOpenDropdownType,
}: TriptypProps) => {
  const selectTripType = (type: string) => {
    setTripType(type);
  };
  return (
    <div
      className="w-full z-20 "
      onMouseLeave={() => {
        setOpenDropdownType(null);
      }}
    >
      <p
        onClick={() => selectTripType("One Way")}
        className={`hover:bg-gray-50 px-4 py-2 text-sm cursor-pointer ${
          tripType === "One Way" && "bg-gray-50"
        }`}
      >
        One Way
      </p>
      <p
        onClick={() => selectTripType("Round Trip")}
        className={`hover:bg-gray-50 px-4 py-2 text-sm cursor-pointer ${
          tripType === "Round Trip" && "bg-gray-50"
        }`}
      >
        Round Trip
      </p>
    </div>
  );
};

export default TripType;

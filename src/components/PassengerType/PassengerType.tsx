import React from "react";
import { Minus, Plus } from "lucide-react";
import { PassengersProps } from "@/types/typs";
// import { setSearchQuery } from "@/Features/searchslice/reducers
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type Props = {
  passengerNumber: {
    [key: string]: number;
  };
  setPassengerNumber: React.Dispatch<
    React.SetStateAction<{
      [key: string]: number;
    }>
  >;
};

const passengers: PassengersProps = [
  { id: "adult", text: "Adults(13 and above)" },
  { id: "children", text: "Children (Age 2-12)" },
  { id: "infants", text: "Infants (under 2)" },
];
const PassengerType = ({ setPassengerNumber, passengerNumber }: Props) => {
  // const dispatch = useDispatch()
  const searchQuery = useSelector((state: RootState) => state.search.query);
  console.log(searchQuery);
  // const [passengerNumber, setPassengerNumber] = useState<{
  //   [key: string]: number;
  // }>({
  //   adult: 0,
  //   children: 0,
  //   infants: 0,
  // });

  const handleIncrease = (id: string) => {
    setPassengerNumber((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const handleDecrease = (id: string) => {
    if (passengerNumber[id] > 0) {
      setPassengerNumber((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] - 1,
      }));
    }
  };

  return (
    <div className=" py-2 pr-2 z-20">
      {passengers.map(({ id, text }) => (
        <div
          key={id}
          className="w-full flex gap-3 justify-between items-center"
        >
          <p
            className="py-2 px-4 text-sm whitespace-nowrap hover:bg-gray-50"
            key={id}
          >
            {text}
          </p>
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => handleDecrease(id)}
              className="rounded-[50%] border  p-[5px]"
            >
              <Minus size={12} />
            </button>
            {passengerNumber[id]}
            <button
              onClick={() => handleIncrease(id)}
              type="button"
              className="rounded-[50%] border p-[5px]"
            >
              <Plus size={12} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PassengerType;

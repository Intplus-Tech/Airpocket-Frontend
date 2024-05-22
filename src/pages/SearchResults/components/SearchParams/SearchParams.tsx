import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { useDispatch } from "react-redux";
import { FieldValues } from "react-hook-form";

import MaxwidthWrapper from "@/components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import Editbtn from "../../assets/Editbtn.svg";
import { Image } from "@/components/Image/Index";
import ToandFro from "../../assets/toandfro.svg";
import { getItemFromStorage, storeItem } from "@/utils/locaStorage";
import { formatDateString, formatDateWithDateFns } from "@/utils/monthDAys";
import { searchFlight, searchKeyWord } from "@/Features/searchslice/api";
import { useToast } from "@/components/ui/use-toast";
import { setSearchQuery } from "@/Features/searchslice/reducers";
import SearchForm from "@/components/SearchForm/SearchForm";

interface suggestionList {
  value: string;
  label: string;
}
[];

type SearchParamsProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const SearchParams = ({ setIsOpen, isOpen }: SearchParamsProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = useState(false);
  const flightSearchQuery = getItemFromStorage("flight-search-query");
  const [openDropdownType, setOpenDropdownType] = useState<string | null>(null);
  const [tripType, setTripType] = useState<string>("One Way");
  const [classType, setClassType] = useState("Economy");
  const [depature, setDeparute] = useState<suggestionList | null>(null);
  const [destination, setDestination] = useState<suggestionList | null>(null);
  const [openDestinationDropdown, setOpenDestinationDropdown] = useState(false);
  const [openDepatureDropdown, setOpenDepartureDropdown] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<suggestionList[]>([]);
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [passengerNumber, setPassengerNumber] = useState<{
    [key: string]: number;
  }>({
    adult: 1,
    children: 0,
    infants: 0,
  });

  const [value] = useDebounce(query, 500);
  // const user = useSelector((state:RootState)=>state.user.user)
  const handleChangeDepature = (selectedCountry: suggestionList | null) => {
    setDeparute(selectedCountry);
  };
  const handleChangeDestination = (selectedCountry: suggestionList | null) => {
    setDestination(selectedCountry);
  };

  const handleInputDepatureChange = (inputValue: string) => {
    setQuery(inputValue);
  };
  const handleInputDestinationChange = (inputValue: string) => {
    setQuery(inputValue);
  };

  const handleSearchKeyWork = async () => {
    const respnse = await searchKeyWord({ key: value });

    const result = respnse.success?.data.data.map((item: any) => ({
      value: item.iataCode,
      label: `${item.address.cityName} (${item.iataCode})`,
    }));

    setSuggestions(result);
  };
  console.log(flightSearchQuery);
  const handleSearchFlight = async (data: FieldValues) => {
    if (!depature?.value && !checkInDate) {
      toast({
        description: "Please enter a departur Date",
      });
      return;
    }
    searchFlight(
      {
        ...data,
        ...passengerNumber,
        travelClass: classType.toUpperCase(),
        depatureDate: formatDateString(checkInDate),
        returnDate: formatDateString(checkOutDate),
        originLocationCode: depature?.value,
        destinationLocationCode: destination?.value,
      },
      dispatch
    );

    dispatch(
      setSearchQuery({
        travelClass: classType,
        originLocationCode: depature?.label,
        destinationLocationCode: destination?.label,
        depatureDate: String(checkInDate),
        returnDate: String(checkOutDate),
        adult: passengerNumber.adult,
        children: passengerNumber.children,
        infants: passengerNumber.infants,
      })
    );

    storeItem("flight-search-query", {
      travelClass: classType,
      originLocationCode: depature?.value,
      destinationLocationCode: destination?.value,
      originLocation: depature?.label,
      destinationLocation: destination?.label,
      depatureDate: formatDateString(checkInDate),
      returnDate: formatDateString(checkOutDate),
      depatureTimeDate: String(checkInDate),
      returnTimeDate: String(checkOutDate),
      adult: passengerNumber.adult,
      children: passengerNumber.children,
      infants: passengerNumber.infants,
    });
  };

  useEffect(() => {
    value && handleSearchKeyWork();
  }, [value]);

  if (!flightSearchQuery) {
    navigate("/");
    return;
  }

  return (
    <MaxwidthWrapper>
      {!isOpen ? (
        <main className="relative h-fit bg-[#F9F9F9] rounded-md  block px-6 py-4 ">
          <section className="flex items-center justify-between h-full">
            <div className=" hidden md:flex items-center justify-between flex-[5]">
              <div className="flex flex-col justify-center items-center h-full">
                <p className="text-sm text-[#404040] flex items-start w-full">
                  Departure
                </p>
                <p className="font-bold text-sm">
                  {flightSearchQuery.originLocation}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center h-full">
                <p className="text-sm text-[#404040]">Destination</p>
                <p className="font-bold text-sm">
                  {flightSearchQuery.destinationLocation}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center h-full">
                <p className="text-sm text-[#404040]">Departing</p>
                <p className="font-bold text-sm">
                  {formatDateWithDateFns(flightSearchQuery.depatureTimeDate)}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center h-full">
                <p className="text-sm text-[#404040]">Returning</p>
                <p className="font-bold text-sm">
                  {formatDateWithDateFns(flightSearchQuery?.returnTimeDate)}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center h-full">
                <p className="text-sm text-[#404040]">Cabin</p>
                <p className="font-bold text-sm">
                  {flightSearchQuery.travelClass}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center h-full">
                <p className="text-sm text-[#404040]">Travellers</p>
                <p className="font-bold text-sm">1 passengers</p>
              </div>
            </div>

            <div className=" flex flex-col md:hidden  justify-center flex-[5]">
              <div className="flex items-center gap-4 py-2 ">
                <p className="font-bold text-sm  md:text-xl capitalize w-fit text-center ">
                  {flightSearchQuery.originLocation || "lagos"}
                </p>
                <Image
                  src={ToandFro}
                  alt="To and From"
                  width={25}
                  height={25}
                  className=" shrink-0 flex"
                />
                <p className="font-bold text-sm md:text-xl capitalize ">
                  {flightSearchQuery.destinationLocation || "Abuja"}
                </p>
              </div>

              <div className="flex  items-center">
                <p className=" text-[10px] sm:text-base capitalize">
                  {formatDateWithDateFns(
                    flightSearchQuery.depatureDate,
                    "short"
                  ) || "Jan 13"}
                </p>
                <p className="text-sm font-bold px-[5px] ">-</p>
                <p className=" text-[10px] sm:text-base pr-[5px] capitalize">
                  {formatDateWithDateFns(flightSearchQuery.returnDate, "short")}
                </p>
                <p className="h-[20px] w-[2px] bg-[#ABABAB] text-[#ABABAB] mx-1"></p>
                <p className="font-bold text-[10px] sm:text-base">
                  {flightSearchQuery.travelClass}
                </p>
                <p className="h-[20px] w-[2px] bg-[#ABABAB] text-[#ABABAB] mx-1"></p>
                <p className="font-bold text-[10px] sm:text-base">
                  1 passengers
                </p>
              </div>
            </div>

            <div
              onClick={() => setIsOpen(true)}
              className="  flex justify-end cursor-pointer  ml-6 w-[2.5rem] "
            >
              <Image
                src={Editbtn}
                alt="Edit Button"
                className="text-end cursor-pointer w-full"
              />
            </div>
          </section>
        </main>
      ) : (
        <section>
          <SearchForm
            handleSearchFlight={handleSearchFlight}
            setOpenDropdownType={setOpenDropdownType}
            openDropdownType={openDropdownType}
            passengerNumber={passengerNumber}
            setPassengerNumber={setPassengerNumber}
            classType={classType}
            setClassType={setClassType}
            suggestions={suggestions}
            handleChangeDepature={handleChangeDepature}
            handleInputDepatureChange={handleInputDepatureChange}
            setOpenDepartureDropdown={setOpenDepartureDropdown}
            handleChangeDestination={handleChangeDestination}
            handleInputDestinationChange={handleInputDestinationChange}
            setOpenDestinationDropdown={setOpenDestinationDropdown}
            openDepatureDropdown={openDepatureDropdown}
            openDestinationDropdown={openDestinationDropdown}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            setCheckInDate={setCheckInDate}
            setCheckOutDate={setCheckOutDate}
            tripType={tripType}
            setTripType={setTripType}
            destination={destination}
            depature={depature}
            setIsOpen={setIsOpen}
          />
        </section>
      )}
    </MaxwidthWrapper>
  );
};

export default SearchParams;

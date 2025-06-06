import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
// import Select from "react-select";

import { Image } from "../../../components/Image/Index";

import Test from "../../../assets/test1.png";
import { searchFlight, searchKeyWord } from "@/Features/searchslice/api";
import { setSearchQuery } from "@/Features/searchslice/reducers";
import { storeItem } from "@/utils/locaStorage";
import { formatDateString, isDateLessThanYesterday } from "@/utils/monthDAys";
import { useToast } from "@/components/ui/use-toast";
import SearchForm from "@/components/SearchForm/SearchForm";

interface suggestionList {
  value: string;
  label: string;
  country: string;
  airport?: string;
  cityName?: string;
}
[];

const Hero = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  // const { handleSubmit } = useForm();
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
      label: `${item.address.cityName} (${item.iataCode}) ${item.name} ${item.subType}`,
      country: item.address.countryName,
      cityName: `${item.address.cityName} (${item.iataCode})`,
      airport: `${item.name} ${item.subType}`,
    }));

    setSuggestions(result);
  };

  useEffect(() => {
    value && handleSearchKeyWork();
  }, [value]);

  const storeDepartureAndDestination = () => {
    if (depature && destination) {
      storeItem("location", {
        depature: depature,
        destination: destination,
      });
    }
  };

  useEffect(() => {
    storeDepartureAndDestination();
  }, [depature, destination]);

  const handleSearchFlight = async (data: FieldValues) => {
    if (passengerNumber.adult < passengerNumber.infants) {
      toast({
        variant: "destructive",
        title: "Number of infants can't exceed number of adults",
      });
      return;
    }

    if (
      isDateLessThanYesterday(checkInDate) ||
      isDateLessThanYesterday(checkOutDate)
    ) {
      toast({
        variant: "destructive",
        description: " Date must not be in the past",
      });
      return;
    }

    if (!depature?.value || !destination?.value || !checkInDate) {
      toast({
        variant: "destructive",
        description: "Departure, destination and checkin data are required",
      });
      return;
    }

    if (depature?.country === destination?.country) {
      storeItem("flight_type", "LOCAL");
    } else {
      storeItem("flight_type", "INTERNATIONAL");
    }

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
      originLocation: depature?.cityName,
      destinationLocation: destination?.cityName,
      depatureDate: formatDateString(checkInDate),
      returnDate: formatDateString(checkOutDate),
      depatureTimeDate: String(checkInDate),
      returnTimeDate: String(checkOutDate),
      adult: passengerNumber.adult,
      children: passengerNumber.children,
      infants: passengerNumber.infants,
    });

    const response = await searchFlight(
      {
        ...data,
        ...passengerNumber,
        travelClass: classType.toUpperCase(),
        depatureDate: formatDateString(checkInDate),
        returnDate: formatDateString(checkOutDate),
        originLocationCode: depature?.value,
        adult: passengerNumber.adult,
        children: passengerNumber.children,
        infants: passengerNumber.infants,
        destinationLocationCode: destination?.value,
      },
      dispatch
    );
    response.error && toast({ title: response.error.response });
  };

  return (
    <div className="h-full w-full relative ">
      <Image
        src={Test}
        alt="Airpocket hero image"
        className="w-full h-[37rem] min-[576px]:h-[22rem] md:h-[30rem] rounded-lg mx-auto max-w-screen-2xl bg-slate-700 "
      />
      <div className="  absolute top-[3%] sm:top-[4%] md:top-[15%] w-full px-2 md:px-14">
        <h1 className=" block capitalize text-white font-bold tracking-widest text-center text-sm sm:text-lg  lg:text-3xl">
          FLY HIGH, PAY LESS
        </h1>

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
        />
      </div>
    </div>
  );
};

export default Hero;

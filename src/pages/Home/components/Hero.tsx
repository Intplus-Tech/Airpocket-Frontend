import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import Select from "react-select";

import { Image } from "../../../components/Image/Index";
import Arrow_down from "../../../assets/arrow_down.svg";
import Arrow_right from "../../../assets/Arrow-right.svg";
import TripType from "../../../components/TripType/TripType";
import PassengerType from "../../../components/PassengerType/PassengerType";
import ClassType from "../../../components/ClassType/ClassType";
import Test from "../../../assets/test1.png";
import { searchFlight, searchKeyWord } from "@/Features/searchslice/api";
import { setSearchQuery } from "@/Features/searchslice/reducers";
import { storeItem } from "@/utils/locaStorage";
import { DatePickerComponent } from "@/components/DatePicker/DatePickerComponent";
import { formatDateString } from "@/utils/monthDAys";

interface suggestionList {
  value: string;
  label: string;
}
[];

const Hero = () => {
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();
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

  console.log(checkInDate);
  const handleSearchKeyWork = async () => {
    const respnse = await searchKeyWord({ key: value });

    const result = respnse.success?.data.data.map((item: any) => ({
      value: item.iataCode,
      label: `${item.address.cityName} (${item.iataCode})`,
    }));

    setSuggestions(result);
  };

  useEffect(() => {
    value && handleSearchKeyWork();
  }, [value]);

  const handleSearchFlight = async (data: FieldValues) => {
    console.log(data);
    if (!depature?.value && !checkInDate) {
      console.log("please input search query");
      return;
    }
    searchFlight(
      {
        ...data,
        ...passengerNumber,
        travelClass: classType,
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

  return (
    <div className="h-full w-full relative ">
      <Image
        src={Test}
        alt="Airpocket hero image"
        className="w-full h-[37rem] min-[576px]:h-[22rem] md:h-[30rem] rounded-lg mx-auto max-w-screen-2xl bg-slate-200 "
      />
      <div className="absolute top-[3%] sm:top-[4%] md:top-[15%] w-full px-6 md:px-14">
        <h1 className="capitalize text-white font-bold tracking-widest text-center text-sm sm:text-lg  lg:text-3xl">
          Embark on a journey to secure the ideal gateway
        </h1>

        <div className="bg-white shadow-sm md:shadow-lg rounded-md mt-4 lg:mt-6 px-6 py-6   w-full mx-auto">
          <form onSubmit={handleSubmit(handleSearchFlight)} className=" w-full">
            {/* all three */}
            <div className="flex flex-col min-[576px]:flex-row gap-8 w-full sm:w-fit">
              {/* grid grid-cols-1 min-[576px]:grid-cols-2 */}
              <div
                onClick={() => setOpenDropdownType("trip")}
                className=" rounded-md gap-2 relative sm:w-fit "
              >
                <div className="flex items-center justify-between sm:justify-center bg-[#afdeeb] bg-opacity-40 px-1 py-2 md:px-6 md:py-3 rounded-md w-full sm:w-fit relative">
                  {tripType}
                  <Image src={Arrow_down} alt="Arrow_down" />
                </div>
                <div className="absolute top-[2.4rem] z-10 w-fit bg-white shadow-md rounded-sm ">
                  {openDropdownType === "trip" && (
                    <TripType
                      tripType={tripType}
                      setTripType={setTripType}
                      setOpenDropdownType={setOpenDropdownType}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-8  ">
                {/* sm:ml-[-4rem] lg:ml-[-6rem] */}
                <div
                  onClick={() => setOpenDropdownType("passenger")}
                  className="w-full sm:w-fit  relative  flex items-center justify-center bg-[#afdeeb] bg-opacity-40 px-1 py-2 md:px-6 md:py-3 rounded-md gap-2 text-xs sm:text-base"
                >
                  Passenger{" "}
                  {passengerNumber.adult +
                    passengerNumber.children +
                    passengerNumber.infants}
                  <Image src={Arrow_down} alt="Arrow_down" />
                  <div className="absolute top-[2.4rem] z-[10] left-0 w-72  bg-white shadow-md rounded-md ">
                    {openDropdownType === "passenger" && (
                      <PassengerType
                        setOpenDropdownType={setOpenDropdownType}
                        passengerNumber={passengerNumber}
                        setPassengerNumber={setPassengerNumber}
                      />
                    )}
                  </div>
                </div>
                <div
                  onClick={() => setOpenDropdownType("class")}
                  className=" w-full sm:w-fit relative flex items-center justify-center bg-[#afdeeb]  bg-opacity-40 px-1 py-2 md:px-6 md:py-3 rounded-md gap-2 text-xs sm:text-base whitespace-nowrap"
                >
                  {classType} <Image src={Arrow_down} alt="Arrow_down" />
                  <div className="absolute top-[2.4rem] z-[10] w-fit bg-white shadow-md rounded-sm ">
                    {openDropdownType === "class" && (
                      <ClassType
                        classType={classType}
                        setClassType={setClassType}
                        setOpenDropdownType={setOpenDropdownType}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 min-[576px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-8 mt-6 flex-wrap">
              <div className="flex flex-col ">
                <label className="text-sm md:text-base">Departure</label>
                <Select
                  options={suggestions}
                  onChange={handleChangeDepature}
                  value={depature}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  onInputChange={(input) => {
                    if (input) {
                      handleInputDepatureChange(input);
                      setOpenDepartureDropdown(true);
                    } else {
                      setOpenDepartureDropdown(false);
                    }
                  }}
                  menuIsOpen={openDepatureDropdown}
                  isClearable
                  // isSearchable
                  placeholder=""
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      backgroundColor: "#e5edf1",
                      // zIndex: -10,
                    }),
                  }}
                  className="peer border-none rounded-lg w-full h-10  bg-[#283841] bg-opacity-10   "
                />
              </div>
              {/* <div className="flex items-end h-16 w-[2px] bg-[#283841] bg-opacity-10" /> */}
              <div className="flex flex-col ">
                <label className="text-sm md:text-base">Destination</label>
                <Select
                  options={suggestions}
                  onChange={handleChangeDestination}
                  value={destination}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  onInputChange={(input) => {
                    if (input) {
                      handleInputDestinationChange(input);
                      setOpenDestinationDropdown(true);
                    } else {
                      setOpenDestinationDropdown(false);
                    }
                  }}
                  menuIsOpen={openDestinationDropdown}
                  isClearable
                  isSearchable
                  placeholder=""
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      backgroundColor: "#e5edf1",
                      // zIndex: -10,
                    }),
                  }}
                  className="peer border-none rounded-xl w-full h-10  bg-[#283841] bg-opacity-10   "
                />
              </div>
              {/* <div className="flex items-end h-16 w-[2px] bg-[#283841] bg-opacity-10" /> */}

              <div className="flex flex-col ">
                <label className="text-sm md:text-base">Check in</label>
                <DatePickerComponent
                  date={checkInDate}
                  setDate={setCheckInDate}
                />
                {/* <input
                  type="date"
                  placeholder="choose date"
                  {...register("depatureDate")}
                  className="bg-[#283841] bg-opacity-10 p-2 h-[40px] rounded-md border-none outline-none"
                /> */}
              </div>
              {/* <div className="flex items-end h-16 w-[2px] bg-[#283841] bg-opacity-10" /> */}

              <div className="flex flex-col">
                <label className="text-sm md:text-base">Check out</label>
                <DatePickerComponent
                  date={checkOutDate}
                  setDate={setCheckOutDate}
                />

                {/* <input
                  type="date"
                  {...register("returnDate")}
                  className="bg-[#283841] bg-opacity-10 p-2 h-[40px] rounded-md border-none outline-none"
                /> */}
              </div>
              <div className="flex items-end text-white rounded-md ">
                <button
                  type="submit"
                  className="flex items-center sm:items-start gap-4 px-3 py-2 w-full sm:w-fit bg-[#03C3F8] rounded-md whitespace-nowrap text-sm"
                >
                  Search Flights
                  <Image
                    src={Arrow_right}
                    alt="arrow_right"
                    className="flex items-center"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;

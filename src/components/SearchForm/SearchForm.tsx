import { FieldValues, useForm } from "react-hook-form";
import Select from "react-select";

import Arrow_down from "@/assets/arrow_down.svg";
import Arrow_right from "@/assets/Arrow-right.svg";
import { Image } from "../Image/Index";
import PassengerType from "../PassengerType/PassengerType";
import ClassType from "../ClassType/ClassType";
import TripType from "../TripType/TripType";
import { DatePickerComponent } from "../DatePicker/DatePickerComponent";
import { X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

interface suggestionList {
  value: string;
  label: string;
  country: string;
}
[];

type Props = {
  setIsOpen?: (value: React.SetStateAction<boolean>) => void;
  handleSearchFlight: (data: FieldValues) => Promise<void>;
  setOpenDropdownType: (value: React.SetStateAction<string | null>) => void;
  openDropdownType: string | null;
  passengerNumber: {
    [key: string]: number;
  };
  setPassengerNumber: React.Dispatch<
    React.SetStateAction<{
      [key: string]: number;
    }>
  >;
  tripType: string;
  setTripType: React.Dispatch<React.SetStateAction<string>>;
  classType: string;
  setClassType: React.Dispatch<React.SetStateAction<string>>;
  suggestions: suggestionList[];
  handleChangeDepature: (selectedCountry: suggestionList | null) => void;
  handleInputDepatureChange: (inputValue: string) => void;
  setOpenDepartureDropdown: (value: React.SetStateAction<boolean>) => void;
  handleChangeDestination: (selectedCountry: suggestionList | null) => void;
  handleInputDestinationChange: (inputValue: string) => void;
  setOpenDestinationDropdown: (value: React.SetStateAction<boolean>) => void;
  destination: suggestionList | null;
  depature: suggestionList | null;
  openDepatureDropdown: boolean;
  openDestinationDropdown: boolean;
  checkInDate: Date | undefined;
  setCheckInDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  checkOutDate: Date | undefined;
  setCheckOutDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

const SearchForm = ({
  handleSearchFlight,
  setOpenDropdownType,
  openDropdownType,
  passengerNumber,
  setPassengerNumber,
  classType,
  setClassType,
  suggestions,
  handleChangeDepature,
  handleInputDepatureChange,
  setOpenDepartureDropdown,
  handleChangeDestination,
  handleInputDestinationChange,
  setOpenDestinationDropdown,
  openDepatureDropdown,
  openDestinationDropdown,
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  tripType,
  setTripType,
  destination,
  depature,
  setIsOpen,
}: Props) => {
  const { handleSubmit } = useForm();
  const { pathname } = useLocation();

  useEffect(() => {
    setOpenDropdownType(null);
  }, [tripType, classType]);

  return (
    <div className="bg-white shadow-sm md:shadow-lg rounded-xl mt-4 lg:mt-6 px-5 py-8 md:pt-16 md:pb-16   w-full mx-auto">
      <form onSubmit={handleSubmit(handleSearchFlight)} className=" w-full">
        {/* all three */}

        <div className="flex justify-between items-center">
          <div className="flex flex-col min-[576px]:flex-row min-[576px]:items-center gap-8 w-full sm:w-fit min-[576px]:w-full">
            {/* grid grid-cols-1 min-[576px]:grid-cols-2 */}
            <div
              onClick={() => {
                setOpenDropdownType((prevType) =>
                  prevType === "trip" ? null : "trip"
                );
              }}
              className=" rounded-md gap-2 relative sm:w-fit "
            >
              <div className="flex items-center justify-between sm:justify-center bg-[#afdeeb] bg-opacity-40 px-1 py-2 md:px-6 md:py-3 rounded-md w-full sm:w-fit relative">
                {tripType}
                <Image src={Arrow_down} alt="Arrow_down" />
              </div>
              <div className="absolute top-[2.4rem] z-10 w-full bg-white shadow-md rounded-sm ">
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
              <div
                onClick={() => setOpenDropdownType("passenger")}
                className="w-full sm:w-fit  relative  flex items-center justify-center bg-[#afdeeb] bg-opacity-40 px-1 py-2 md:px-6 md:py-3 rounded-md gap-2 text-xs sm:text-base"
              >
                <span className="whitespace-nowrap">
                  Passenger{" "}
                  {passengerNumber.adult +
                    passengerNumber.children +
                    passengerNumber.infants}
                </span>
                <Image src={Arrow_down} alt="Arrow_down" />
                <div className="absolute top-[2.4rem] z-[20] left-0 w-fit  bg-white shadow-md rounded-md ">
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
          {pathname !== "/" && (
            <p
              className="hidden min-[576px]:block"
              onClick={() => setIsOpen?.(false)}
            >
              <X className="text-[#1B96D6] cursor-pointer" />
            </p>
          )}
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
          <div className="flex flex-col   ">
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

          <div className="flex flex-col w-full">
            <label className="text-sm md:text-base">Check in</label>
            <DatePickerComponent date={checkInDate} setDate={setCheckInDate} />
          </div>
          {/* <div className="flex items-end h-16 w-[2px] bg-[#283841] bg-opacity-10" /> */}

          <div className="flex flex-col w-full">
            <label className="text-sm md:text-base">Check out</label>
            <DatePickerComponent
              date={checkOutDate}
              setDate={setCheckOutDate}
            />
          </div>
          <div className="flex items-end w-full sm:w-[10rem] justify-end text-white rounded-md ">
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
      {pathname !== "/" && (
        <p
          className="text-center w-full mt-6 min-[576px]:hidden "
          onClick={() => setIsOpen?.(false)}
        >
          <X className="text-[#1B96D6] cursor-pointer mx-auto" />
        </p>
      )}
    </div>
  );
};

export default SearchForm;

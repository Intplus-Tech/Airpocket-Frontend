import MaxwidthWrapper from "@/components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import Editbtn from "../../assets/Editbtn.svg";
import { Image } from "@/components/Image/Index";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ToandFro from "../../assets/toandfro.svg";
import { getItemFromStorage } from "@/utils/locaStorage";
import { formatDateWithDateFns } from "@/utils/monthDAys";

const SearchParams = () => {
  const searchQurey = useSelector((state: RootState) => state.search.query);
  const flightSearchQuery = getItemFromStorage("flight-search-query");
  return (
    <MaxwidthWrapper>
      <main className="h-fit bg-[#F9F9F9] rounded-md  block px-6 py-4">
        <section className="flex items-center justify-between h-full">
          <div className=" hidden md:flex items-center justify-between flex-[5]">
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-[#404040] flex items-start w-full">
                Departure
              </p>
              <p className="font-bold text-sm">
                {flightSearchQuery.originLocationCode}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-[#404040]">Destination</p>
              <p className="font-bold text-sm">
                {flightSearchQuery.destinationLocationCode}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-[#404040]">Departing</p>
              <p className="font-bold text-sm">
                {formatDateWithDateFns(flightSearchQuery.depatureDate)}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-[#404040]">Returning</p>
              <p className="font-bold text-sm">
                {formatDateWithDateFns(flightSearchQuery.returnData) || "N/A"}
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
                {flightSearchQuery.originLocationCode || "lagos"}
              </p>
              <Image
                src={ToandFro}
                alt="To and From"
                width={25}
                height={25}
                className=" shrink-0 flex"
              />
              <p className="font-bold text-sm md:text-xl capitalize ">
                {flightSearchQuery.destinationLocationCode || "Abuja"}
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
                {formatDateWithDateFns(flightSearchQuery.returnData) || "N/A"}
              </p>
              <p className="h-[20px] w-[2px] bg-[#ABABAB] text-[#ABABAB] mx-1"></p>
              <p className="font-bold text-[10px] sm:text-base">
                {flightSearchQuery.travelClass}
              </p>
              <p className="h-[20px] w-[2px] bg-[#ABABAB] text-[#ABABAB] mx-1"></p>
              <p className="font-bold text-[10px] sm:text-base">1 passengers</p>
            </div>
          </div>

          <div className="flex-[1]  flex justify-end ">
            <Image src={Editbtn} alt="Edit Button" className="text-end" />
          </div>
        </section>
      </main>
    </MaxwidthWrapper>
  );
};

export default SearchParams;

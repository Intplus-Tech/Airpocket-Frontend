import MaxwidthWrapper from "@/components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import Editbtn from "../../assets/Editbtn.svg";
import { Image } from "@/components/Image/Index";

const SearchParams = () => {
  return (
    <MaxwidthWrapper>
      <main className="h-[78px] bg-[#F9F9F9] rounded-md  block px-6">
        <section className="flex items-center justify-between h-full">
          <div className="flex items-center justify-between flex-[5]">
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-[#404040]">Departure</p>
              <p className="font-bold text-sm">Accra Ghana</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-[#404040]">Destination</p>
              <p className="font-bold text-sm">Cape Town South Afica</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-[#404040]">Departing</p>
              <p className="font-bold text-sm">Monday, sep6 6</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-[#404040]">Returning</p>
              <p className="font-bold text-sm">Sunday,oct 17</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-[#404040]">Cabin</p>
              <p className="font-bold text-sm">Economy</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-sm text-[#404040]">Travellers</p>
              <p className="font-bold text-sm">1 passengers</p>
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

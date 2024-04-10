import { Image } from "@/components/Image/Index";
import Gulf from "../../assets/Gulf.svg";
import Flight from "../../assets/verticalstop.svg";

const FilghtDetail = () => {
  return (
    <main>
      <div className=" mt-4 border-b pb-2  flex gap-4">
        <p>Flight Information</p>
        <p>General Information</p>
      </div>
      <section>
        <div className="flex items-center justify-between mt-4">
          <p className="flex gap-4 items-center w-full">
            <Image src={Gulf} alt="Airline logo" />
            <span className="font-bold">Gulf</span>
          </p>
          <p className="w-full">Total:19:00 Hours</p>
          <div className="flex flex-col gap-2 justify-end w-full">
            <p className="bg-[#FFF2F2] text-[#C30000] text-xs md:text-base text-center w-fit rounded-md">
              Refundable {"(Penalty Applies)"}
            </p>
            <p className="bg-[#E8F4FA] text-[#1D91CC]  w-fit flex items-end self-end rounded-md px-2">
              Economy
            </p>
          </div>
        </div>

        {/* stops */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <p className="w-full">
              <span className="font-bold">02:50</span> Istanbul, Istanbul
              Airport
            </p>
            <p className="w-full">Monday, September 6</p>

            <p className="flex flex-col w-full">
              <span>Price Per Adult ₦11.742,342</span>
              <span>Price Per Child ₦11.742,342</span>
            </p>
          </div>

          <div className="mt-6 flex gap-4 items-center">
            <span>
              <Image src={Flight} alt="Flight logo" />
            </span>
            <span className="text-[#A9791C] bg-[#FFF8E1] pl-8 h-fit flex items-center py-2 px-4">
              Stopover in Amman, Queen Alia Airport
            </span>
          </div>
          <div className="flex items-center gap-2 my-5">
            <p>
              <span className="font-bold pr-3">17:00</span>Amman, Queen Alia
              Airport
            </p>
            <p>Monday, September 6 </p>
          </div>

          <div>
            <span>
              <Image src={Flight} alt="Flight logo" />
            </span>
          </div>

          <div className="flex items-center gap-2 my-5">
            <p>
              <span className="font-bold pr-3">21:45</span>Dubai, Dubai Airport
            </p>
            <p>Monday, September 6 </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FilghtDetail;

import { Image } from "../Image/Index";
import Mobileapp from "./assets/Mobileapp.svg";
import Google from "./assets/googleplaystore.svg";
import Apple from "./assets/appstore.svg";

const MobileApp = () => {
  return (
    <section className=" mt-[5rem] lg:mt-[10rem]">
      <div className="bg-[#1B96D6] rounded-md h-[450px] relative flex">
        <div className=" h-full w-full flex justify-center items-center  lg:items-end flex-col">
          <div className="px-4">
            <p className="text-white font-bold text-xl capitalize">
              Our Mobile App is Coming Soon to All Stores
            </p>
            <p className="text-white max-w-[32rem] pt-2 pb-8">
              Download our Mobile App free today to book your flights, hotels,
              and visas and get amazing deals on the go!
            </p>

            <div className="flex  gap-4">
              <span>
                <Image src={Google} alt="Google" className="w-[12rem]" />
              </span>
              <span>
                <Image src={Apple} alt="App" className="w-[12rem]" />
              </span>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={Mobileapp}
            alt="MobileApp"
            className="absolute left-[4rem] top-[-8rem] hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;

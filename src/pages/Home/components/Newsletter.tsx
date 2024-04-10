import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Image } from "../../../components/Image/Index";
import Sisters from "../assets/Sisters.svg";

const Newsletter = () => {
  return (
    // <main className="max-w-screen-xl mx-auto bg-[#EEECEC] mt-8 mb-8">
    //   <div className="flex relative items-center justify-between h-[250px]">
    //     <div>
    //       <h1 className="text-[#1B96D6] text-[45px] ">
    //         Subscibe to Our Newsletter
    //       </h1>
    //       <p className="max-w-[30rem] text-[#333333]">
    //         Get weekly update about our product on your email, no spam
    //         guaranteed we promise ✌️
    //       </p>
    //     </div>

    //     <Image
    //       src={Sisters}
    //       alt="Sisters"
    //       className="absolute top-[-3rem] right-0 h-[296px]"
    //     />
    //   </div>
    // </main>
    <section className=" max-w-screen-xl mx-auto mt-16 my-8 px-2 w-full">
      <div className="w-full px-2 lg:px-10 mx-auto space-y-16 bg-[#EEECEC] rounded-md shadow-lg shadow-slate-300 max-h-[260px] overflow-y-visible lg:flex items-end justify-between">
        <div className="space-y-4 py-8 self-center">
          <h2 className="text-[#1B96D6] font-semibold text-2xl lg:text-3xl">
            Subscibe to Our Newsletter
          </h2>
          <p className="text-xs text-gray-600 lg:text-sm">
            Get weekly update about our product on your email, no spam
            guaranteed we promise ✌️
          </p>
          <form>
            <div className="relative">
              <span className="absolute left-4 top-[50%] translate-y-[-50%] bg-[#F8F8F8] p-2">
                <EnvelopeIcon className="h-4 w-4" />
              </span>
              <input
                type="email"
                placeholder="youremail123@gmail.com"
                className="bg-white py-4 pl-14 text-gray-600 focus:outline-none text-xs lg:text-sm w-[90%]"
              />
              <button
                type="submit"
                className="absolute top-4 right-0  py-3 px-6 bg-[#1B96D6] text-white text-sm"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
        <div className="hidden lg:block relativ w-[458px] h-full mb-8">
          <Image src={Sisters} alt="newsletter" className="" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

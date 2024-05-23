import { Image } from "@/components/Image/Index";
import confirmation from "./assets/confirm.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Confirmation = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <section className="max-w-xl sm:mx-auto mx-4">
      <div>
        <p className="bg-[#F3FDFA] px-6 py-2 text-center rounded-md flex items-center justify-center gap-1 md:gap-2 capitalize">
          <span>
            <Image src={confirmation} alt="confirmation" />
          </span>
          Your payment has been successfully completed.
        </p>
        <div className="my-4 py-2 px-2 flex items-center justify-center max-w-[40rem] text-center">
          <p className="">
            Thank you, your booking order will be processed soon.A confirmation
            email with all the details has been sent to
            <span className="text-[#1D91CC] pl-2">{user?.email}</span>.
          </p>
        </div>

        <div className="text-center">
          <button className="bg-[#1D91CC] px-3 py-2 rounded-md text-white">
            Complete your Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;

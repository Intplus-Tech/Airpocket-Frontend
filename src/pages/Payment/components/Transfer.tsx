import { Image } from "@/components/Image/Index";
import GtBank from "@/pages/Payment/assets/Gtbank.svg";
import Sterling from "@/pages/Payment/assets/Sterling.svg";

const Transfer = () => {
  return (
    <div className="py-2 space-y-2 md:w-[350px]">
      <h4 className="font-semibold">How to pay to confirm your booking</h4>
      <p className="text-gray-500">
        For faster processing, use your mobile banking app to pay for your
        reservation. Alternatively, visit any of our listed banks to complete
        your payment.
      </p>

      <div className="text-sm space-y-4 py-4 text-gray-500">
        <p className="flex w-full items-center justify-between gap-x-8">
          <span className="w-1/2">Booking Amount</span>
          <span className="text-primaryColor text-base w-1/2 flex justify-between">
            <span>NGN</span>
            11,470,15435
          </span>
        </p>
        <p className="flex w-full items-center justify-between gap-x-8">
          <span className="w-1/2">Reservation Fee</span>
          <span className="text-primaryColor w-1/2 text-base flex justify-between">
            <span>NGN</span>0
          </span>
        </p>
        <p className="flex w-full items-center justify-between font-semibold gap-x-8">
          <span className="w-1/2">Booking Amount</span>
          <span className="text-primaryColor text-base w-1/2 flex justify-between">
            <span>NGN</span>
            11,470,1543
          </span>
        </p>
      </div>

      <div>
        <div className="border rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="relative w-8 h-8">
              <Image src={GtBank} alt="GTBank logo" />
            </div>
            <button className="px-4 py-1 text-primaryColor border border-primaryColor rounded-lg">
              Copy
            </button>
          </div>
          <div className="flex justify-between items-center pt-4">
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 text-sm">Account Name:</p>
              <p className="text-gray-900 font-semibold">AirPockets Travels</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 text-sm">Account Number:</p>
              <p className="text-gray-900 font-semibold">1289147801</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-3">
        <div className="flex items-center justify-between">
          <div className="relative w-8 h-8">
            <Image src={Sterling} alt="GTBank logo" />
          </div>
          <button className="px-4 py-1 text-primaryColor border border-primaryColor rounded-lg">
            Copy
          </button>
        </div>
        <div className="flex justify-between items-center pt-4">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-sm">Account Name:</p>
            <p className="text-gray-900 font-semibold">AirPockets Travels</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-sm">Account Number:</p>
            <p className="text-gray-900 font-semibold">1289147801</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transfer;

import { getItemFromStorage } from "@/utils/locaStorage";
import { formatCurrency } from "@/utils/monthDAys";

type CardPaymentProp = {
  amount: number;
};

const CardPayment = ({ amount }: CardPaymentProp) => {
  const { adult, children, infants } = getItemFromStorage(
    "flight-search-query"
  ) || { adult: 0, children: 0, infant: 0 };
  return (
    <div className="py-2 space-y-2 md:w-[350px]">
      <h4 className="font-semibold"> Confirm your booking</h4>
      <p className="text-gray-500">Pay with debit card</p>

      <div className="text-sm space-y-4 py-4 text-gray-500">
        <p className="flex w-full items-center justify-between gap-x-8">
          <span className="w-1/2">Booking Amount</span>
          <span className="text-[#1D91CC] text-base w-1/2 flex justify-between">
            {formatCurrency(amount * (adult + children + infants)) || ""}
          </span>
        </p>
        <div className="h-36">
          <p className="flex w-full items-center justify-between gap-x-8">
            <span className="w-1/2">Reservation Fee</span>
            <span className="text-[#1D91CC] w-1/2 text-base flex justify-between">
              <span>NGN {"  "} 0</span>
            </span>
          </p>
          <p className="flex w-full items-center justify-between font-semibold gap-x-8">
            <span className="w-1/2">Booking Amount</span>
            <span className="text-[#1D91CC] text-base w-1/2 flex justify-between">
              {formatCurrency(amount * (adult + children + infants)) || ""}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardPayment;

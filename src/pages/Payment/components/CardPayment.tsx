const CardPayment = () => {
  return (
    <div className="py-2 space-y-2 md:w-[350px]">
      <h4 className="font-semibold">How to pay to confirm your booking</h4>
      <p className="text-gray-500">Pay with your Nigerian debit card</p>

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
    </div>
  );
};
export default CardPayment;

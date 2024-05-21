export const FlightFareBreakdown = () => {
  return (
    <div className="bg-white py-6 my-4 rounded-lg pl-2  space-y-8 md:px-10 pr-2">
      <div className="text-sm">
        <h3 className="font-semibold">Flight Fare Breakdown</h3>
        <div>
          <div className="flex justify-between items-center border-b py-4 text-gray-600 border-gray-300">
            <p>Total Fare</p>
            <p className="font-semibold">NGN 11,120,980</p>
          </div>
          <div className="flex justify-between items-center py-8 text-gray-600">
            <p>Transaction Fee</p>
            <p className="font-semibold">0</p>
          </div>
          <div className="flex justify-between items-center py-4 text-gray-600">
            <p>Total</p>
            <p className="font-bold text-base">NGN 11,120,080</p>
          </div>
        </div>
      </div>
    </div>
  );
};

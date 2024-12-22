// import { IoMdArrowBack } from "react-icons/io";

// import FlightDetails from "@/components/FllightDetails/FlightDetail";
// import CardPayment from "./components/CardPayment";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { FlightOffer } from "@/types/typs";
import { getItemFromStorage } from "@/utils/locaStorage";
import { flightSelect } from "@/Features/selectFlight/api";
import { formatDate } from "@/utils/monthDAys";
import { FLIGHT_TYPE } from "@/utils/Constant";
import { useScrolltop } from "@/utils/useScrolltop";
import { Image } from "@/components/Image/Index";
import { ClipboardCopy } from "lucide-react";

import Gtbank from "./assets/Gtbank.svg";
import Monipoint from "./assets/moniepoint.jpg";
import Uba from "./assets/Uba.jpg";

type paymentProps = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const Payment = ({ setCurrentStep }: paymentProps) => {
  console.log(setCurrentStep, "setCurrentStep");
  useScrolltop();

  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("option1");
  const [copying, setCopying] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const selectedFlight: FlightOffer[] | null = useSelector(
    (state: RootState) => state.selectFlight.result
  );

  const flightSelected = getItemFromStorage("selected_flight");
  const flightType = getItemFromStorage("flight_type");
  const PNR = getItemFromStorage("PNR");

  const flightDetails = useSelector(
    (state: RootState) => state.payment.flightDetails
  );
  console.log(flightDetails, "flieght details");

  const { adult, children, infants } = getItemFromStorage(
    "flight-search-query"
  ) || { adult: 0, children: 0, infant: 0 };
  const isLoading = useSelector(
    (state: RootState) => state.selectFlight.isLoading
  );

  useEffect(() => {
    !selectedFlight && !isLoading && flightSelect(flightSelected, dispatch);
  }, []);

  if (isLoading) {
    return (
      <h1 className="w-full h-32 flex items-center justify-center font-bold">
        Loading...
      </h1>
    );
  }

  interface BookingDetails {
    bookingId: string;
    pnr: string;
    bookingDate: string;
    status: string;
  }

  interface BankDetails {
    name: string;
    logo: string;
    accountName: string;
    accountNumber: string;
  }

  const bookingDetails: BookingDetails = {
    bookingId: "NmRdXb",
    pnr: "KoUDqM",
    bookingDate: "DEC 10, 2024",
    status: "PENDING",
  };

  const bankDetails: BankDetails[] = [
    {
      name: "GT Bank",
      logo: Gtbank,
      accountName: "Airpockets",
      accountNumber: " 0938639698",
    },
    {
      name: "Uba ",
      logo: Uba,
      accountName: "Airpockets ",
      accountNumber: " 1026689622",
    },
    {
      name: "Moniepoint ",
      logo: Monipoint,
      accountName: "Airpockets ",
      accountNumber: "9061137859 ",
    },
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopying(text);
      setToastMessage("Account number copied to clipboard");
      setTimeout(() => {
        setCopying(null);
        setToastMessage(null);
      }, 2000);
    } catch (err) {
      setToastMessage("Failed to copy account number");
      setTimeout(() => setToastMessage(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Booking Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-gray-500">BOOKING ID:</div>
            <div className="font-semibold">{flightDetails?.PNR || PNR}</div>
          </div>
          <div>
            <div className="text-gray-500">PNR:</div>
            <div className="font-semibold">{flightDetails?.PNR || PNR}</div>
          </div>
          <div>
            <div className="text-gray-500">BOOKING DATE:</div>
            <div className="font-semibold">
              {formatDate(flightDetails?.data.createdAt as string)}
            </div>
          </div>
          <div>
            <div className="text-gray-500">BOOKING STATUS:</div>
            <div className="font-semibold">{bookingDetails.status}</div>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold">
            Pay Cash or Transfer the amount of{" "}
            <span className="text-[#1D91CC]   bg-white">
              NGN
              {selectedFlight &&
                selectedFlight[0] &&
                Number(selectedFlight[0].price.grandTotal) *
                  (adult + children + infants) +
                  (FLIGHT_TYPE as any)[flightType].fixed}
            </span>{" "}
            to any of the banks below
          </h2>
          <p className="text-sm text-gray-500">
            {`To enable prompt ticketing and service, QUOTE your Transaction ID
            ${
              flightDetails?.PNR || PNR
            } Or PNR when transferring to any of the banks below.`}
          </p>
        </div>

        {/* Bank Details */}
        <div className="grid md:grid-cols-3 gap-4">
          {bankDetails.map((bank) => (
            <div
              key={bank.accountNumber}
              className="bg-white rounded-lg shadow-md p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={bank.logo}
                  alt={`${bank.name} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h3 className="font-semibold">{bank.name}</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="text-sm text-gray-500">Account Name:</div>
                  <div className="font-medium">{bank.accountName}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Account Number:</div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium">{bank.accountNumber}</div>
                    <button
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      onClick={() => copyToClipboard(bank.accountNumber)}
                      aria-label={`Copy ${bank.name} account number`}
                    >
                      <ClipboardCopy
                        className={`h-4 w-4 ${
                          copying === bank.accountNumber
                            ? "text-green-500"
                            : "text-gray-500"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Make Payment Button */}
        <div className="flex justify-center">
          <button
            onClick={() => (window.location.href = "tel:+234 816 971 5754")}
            className="bg-[#1D91CC]   text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Confirm Payment
          </button>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
            {toastMessage}
          </div>
        )}
      </div>
    </div>

    // <main className="max-w-screen-lg overflow-hidden mx-6 min-[1059px]:mx-auto ">
    //    {selectedFlight && (
    //     <div>
    //       <FlightDetails SINGLE_FLIGHT_DETAILS={selectedFlight} />

    //       <div className="bg-white py-3 my-4 rounded-lg border px-2 md:px-8">
    //         <div className="flex justify-between items-center pt-2 pb-4 border-b border-b-gray-300">
    //           <div>
    //             <h4 className="font-semibold">Passenger Details</h4>
    //             <p className="text-gray-500 text-sm md:text-base ">
    //               (Confirm now to secure your reservation)
    //             </p>
    //           </div>
    //         </div>

    //         <div className="py-4 pb-4 border-b border-b-gray-300 md:flex justify-between space-y-8 md:space-y-0">
    //           <div>
    //             <h4 className="font-semibold">Make Your Payment</h4>
    //             <form className="text-gray-800 space-y-2 py-3">
    //               <div className="flex gap-x-2 items-center">
    //                 <input
    //                   type="radio"
    //                   name=""
    //                   id=""
    //                   value="option1"
    //                   checked={selectedOption === "option2"}
    //                   onChange={() => setSelectedOption("option2")}
    //                   className="accent-primaryColor"
    //                 />
    //                 <label>Card Payment</label>
    //               </div>
    //             </form>
    //           </div>

    //           {selectedOption === "option1" && (
    //             <CardPayment
    //               amount={Number(selectedFlight?.[0].price?.grandTotal)}
    //             />
    //           )}
    //           {selectedOption === "option2" && (
    //             <CardPayment
    //               amount={Number(selectedFlight?.[0].price?.grandTotal)}
    //             />
    //           )}
    //         </div>

    //         <div className="text-sm py-8 px-2">
    //           <div className="flex flex-col md:flex-row gap-4 w-full items-start md:items-center md:justify-between text-primaryColor">
    //             <button
    //               className="flex items-center min-w-fit gap-x-2"
    //               onClick={handlePrev}
    //             >
    //               <IoMdArrowBack />
    //               Return to the previous step
    //             </button>
    //             <button
    //               onClick={handlePayment}
    //               className="px-6 md:px-16 min-w-fit text-white bg-[#1D91CC] py-4 mt-4 rounded-lg"
    //             >
    //               {loading ? "Loading..." : "    Make payment"}
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    //  </main>
  );
};

export default Payment;

// {
//   "message": "Successfully booked flight",
//   "PNR": "VSMAQA",
//   "data": {
//       "flightOrder": "eJzTd9cPC%2FZ1DHQEAAuuAm8%3D",
//       "from": "MAD",
//       "to": "BCN",
//       "departure": "Wed Dec 25 2024 00:00:00 GMT+0100 (West Africa Standard Time)",
//       "cabin": "Economy",
//       "user": "67615dd5cd634eb90577b4ce",
//       "flightInformation": "{\"type\":\"flight-order\",\"id\":\"eJzTd9cPC%2FZ1DHQEAAuuAm8%3D\",\"queuingOfficeId\":\"NCE4D31SB\",\"associatedRecords\":[{\"reference\":\"VSMAQA\",\"creationDate\":\"2024-12-17T11:31:00.000\",\"originSystemCode\":\"GDS\",\"flightOfferId\":\"1\"}],\"flightOffers\":[{\"type\":\"flight-offer\",\"id\":\"1\",\"source\":\"GDS\",\"nonHomogeneous\":false,\"lastTicketingDate\":\"2024-12-18\",\"itineraries\":[{\"segments\":[{\"departure\":{\"iataCode\":\"MAD\",\"terminal\":\"2\",\"at\":\"2024-12-25T07:30:00\"},\"arrival\":{\"iataCode\":\"BCN\",\"terminal\":\"1\",\"at\":\"2024-12-25T08:55:00\"},\"carrierCode\":\"UX\",\"number\":\"7701\",\"aircraft\":{\"code\":\"788\"},\"duration\":\"PT1H25M\",\"id\":\"37\",\"numberOfStops\":0,\"co2Emissions\":[{\"weight\":61,\"weightUnit\":\"KG\",\"cabin\":\"ECONOMY\"}]}]}],\"price\":{\"currency\":\"NGN\",\"total\":\"82579.00\",\"base\":\"37237.00\",\"fees\":[{\"amount\":\"0.00\",\"type\":\"TICKETING\"},{\"amount\":\"0.00\",\"type\":\"SUPPLIER\"},{\"amount\":\"0.00\",\"type\":\"FORM_OF_PAYMENT\"}],\"grandTotal\":\"82579.00\",\"billingCurrency\":\"NGN\"},\"pricingOptions\":{\"fareType\":[\"PUBLISHED\"],\"includedCheckedBagsOnly\":false},\"validatingAirlineCodes\":[\"UX\"],\"travelerPricings\":[{\"travelerId\":\"1\",\"fareOption\":\"STANDARD\",\"travelerType\":\"ADULT\",\"price\":{\"currency\":\"NGN\",\"total\":\"82579.00\",\"base\":\"37237.00\",\"taxes\":[{\"amount\":\"28531.00\",\"code\":\"JD\"},{\"amount\":\"1224.00\",\"code\":\"OG\"},{\"amount\":\"6898.00\",\"code\":\"QV\"},{\"amount\":\"8689.00\",\"code\":\"YR\"}],\"refundableTaxes\":\"36653.00\"},\"fareDetailsBySegment\":[{\"segmentId\":\"37\",\"cabin\":\"ECONOMY\",\"fareBasis\":\"NDYO5L\",\"brandedFare\":\"LITE\",\"class\":\"N\",\"includedCheckedBags\":{\"quantity\":0}}]}]}],\"travelers\":[{\"id\":\"1\",\"dateOfBirth\":\"1995-01-01\",\"gender\":\"MALE\",\"name\":{\"firstName\":\"Emmanuel\",\"lastName\":\"Chima\"},\"documents\":[{\"number\":\"1234567890\",\"issuanceDate\":\"2020-01-01\",\"expiryDate\":\"2025-01-01\",\"issuanceCountry\":\"NG\",\"issuanceLocation\":\"lagos\",\"nationality\":\"NG\",\"birthPlace\":\"Lagos\",\"documentType\":\"PASSPORT\",\"holder\":true}],\"contact\":{\"purpose\":\"STANDARD\",\"phones\":[{\"deviceType\":\"MOBILE\",\"countryCallingCode\":\"234\",\"number\":\"+2348138160644\"}]}}],\"ticketingAgreement\":{\"option\":\"CONFIRM\"},\"automatedProcess\":[{\"code\":\"IMMEDIATE\",\"queue\":{\"number\":\"0\",\"category\":\"0\"},\"officeId\":\"NCE4D31SB\"}]}",
//       "_id": "67616113cd634eb90577b4d8",
//       "createdAt": "2024-12-17T11:31:31.301Z",
//       "updatedAt": "2024-12-17T11:31:31.301Z",
//       "__v": 0
//   }
// }

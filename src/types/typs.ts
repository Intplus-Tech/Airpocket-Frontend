export type PassengersProps = {
  id: string;
  text: string;
  value?: string;
}[];

export type SearchResult = {
  message: string;
  data: { [x: string]: any }[];
  meta: { [x: string]: any }[];
  // Add other properties as needed
} | null;

export type SingleSearchResult = {
  data: { [x: string]: any };
} | null;

export type TestimonialsType = {
  id: string;
  text: string;
  img: any;
  name: string;
  country: string;
}[];

export type User = {
  [x: string]: any;
};

export type Generic = {
  [x: string]: any;
};

export interface countryList {
  value: string;
  label: string;
}
[];

export type UserDetail = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  verified: boolean;
};

export type selectFlightResult = {
  data: FlightOffer[] | null;
  // data: { [x: string]: any };
  // dictionaries: { [x: string]: any };
  // Add other properties as needed
};

export type FlightTableData = {
  carrierCode: string;
  price: number;
  stops: string;
};

export type FilterProps = {
  price: {
    range: [number, number];
  };
  stops: string | null;
  departureTime: {
    range: [number, number];
  };

  sort?: {
    recommended?: boolean;
    cheapest?: boolean;
    fastest?: boolean;
  };
};

type DateType = {
  day: string;
  month: string;
  year: string;
};

export type Person = {
  id: number;
  key: string;
  firstName: string;
  lastName: string;
  gender: string;
  nationality: string;
  passportNumber: string;
  dob: DateType;
  ped: DateType;
};

interface DateObject {
  day: string;
  month: string;
  year: string;
}

interface Phone {
  deviceType: string;
  countryCallingCode: string;
  number: string;
}

interface Contact {
  emailAddress: string;
  phones: Phone[];
}

interface Document {
  documentType: string;
  birthPlace: string;
  issuanceLocation: string;
  issuanceDate: string;
  number: string;
  expiryDate: string;
  issuanceCountry: string;
  validityCountry: string;
  nationality: string;
  holder: true;
}

export interface TravellerFormData {
  id: number;
  dateOfBirth: string;
  name: {
    firstName: string;
    lastName: string;
  };
  contact: Contact;
  gender: string;
  dob: DateObject;
  isd: DateObject;
  ped: DateObject;
  documents: Document[];
}
[];

export type FLIGHT_TYPES = {
  LOCAL: {
    rate: number;
  };
  INTERENATIONAL: {
    rate: number;
  };
};

export type ChangePassword = {
  password: string;
  passwordConfirm: string;
  id: string | undefined;
};

export type PassengerFormData = {
  passengers: {
    firstName: string;
    lastName: string;
    gender: string;
    passportNumber: string;
    day: string;
    month: string;
    year: string;
  }[];
};

export interface suggestionList {
  value: string;
  label: string;
  country: string;
}
[];

export type FlightOrder = {
  map(
    arg0: (flight: flight) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  allFlight: {
    _id: string;
    payment: string;
    flightOrder: string;
    from: string;
    to: string;
    departure: string;
    cabin: string;
    user: string;
    flightInformation: [];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
};

export type flight = {
  _id: string;
  payment: string;
  flightOrder: string;
  from: string;
  to: string;
  departure: string;
  cabin: string;
  user: string;
  flightInformation: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type BookingInformation = {
  cabin: string;
  createdAt: string;
  departure: string;
  flightInformation: string; // This is a stringified JSON object. Ideally, it should be parsed to an object.
  flightOrder: string;
  from: string;
  payment: Payment;
  to: string;
  updatedAt: string;
  user: string;
  __v: number;
  _id: string;
};

interface Payment {
  _id: string;
  email: string;
  amount: string;
  reference: string;
  status: string;
}

export type FlightInformation = {
  type: string;
  id: string;
  queuingOfficeId: string;
  associatedRecords: AssociatedRecord[];
  flightOffers: FlightOffer[];
  travelers: Traveler[];
  ticketingAgreement: TicketingAgreement;
  automatedProcess: AutomatedProcess[];
};

interface AssociatedRecord {
  reference: string;
  creationDate: string;
  originSystemCode: string;
  flightOfferId: string;
}

export type FlightOffer = {
  type: string;
  id: string;
  source: string;
  nonHomogeneous: boolean;
  lastTicketingDate: string;
  itineraries: Itinerary[];
  price: Price;
  pricingOptions: PricingOptions;
  validatingAirlineCodes: string[];
  travelerPricings: TravelerPricing[];
};

interface Itinerary {
  segments: Segment[];
}

interface Segment {
  departure: Location;
  arrival: Location;
  carrierCode: string;
  number: string;
  aircraft: Aircraft;
  duration: string;
  id: string;
  numberOfStops: number;
  co2Emissions: Co2Emission[];
}

interface Location {
  iataCode: string;
  terminal?: string;
  at: string;
}

interface Aircraft {
  code: string;
}

interface Co2Emission {
  weight: number;
  weightUnit: string;
  cabin: string;
}

interface Price {
  currency: string;
  total: string;
  base: string;
  fees: Fee[];
  grandTotal: string;
  billingCurrency: string;
}

interface Fee {
  amount: string;
  type: string;
}

interface PricingOptions {
  fareType: string[];
  includedCheckedBagsOnly: boolean;
}

interface TravelerPricing {
  travelerId: string;
  fareOption: string;
  travelerType: string;
  price: TravelerPrice;
  fareDetailsBySegment: FareDetailsBySegment[];
}

interface TravelerPrice {
  currency: string;
  total: string;
  base: string;
  taxes: Tax[];
  refundableTaxes: string;
}

interface Tax {
  amount: string;
  code: string;
}

interface FareDetailsBySegment {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  brandedFare: string;
  class: string;
  includedCheckedBags: IncludedCheckedBags;
}

interface IncludedCheckedBags {
  quantity: number;
}

interface Traveler {
  id: string;
  dateOfBirth: string;
  gender: string;
  name: Name;
  documents: Document[];
  contact: Contact;
}

interface Name {
  firstName: string;
  lastName: string;
}

interface Document {
  number: string;
  issuanceDate: string;
  expiryDate: string;
  issuanceCountry: string;
  issuanceLocation: string;
  nationality: string;
  birthPlace: string;
  documentType: string;
  holder: true;
}

interface Contact {
  purpose: string;
  phones: Phone[];
}

interface Phone {
  deviceType: string;
  countryCallingCode: string;
  number: string;
}

interface TicketingAgreement {
  option: string;
}

interface AutomatedProcess {
  code: string;
  queue: Queue;
  officeId: string;
}

interface Queue {
  number: string;
  category: string;
}

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

export interface selectFlightResult {
  data: { [x: string]: any };
  dictionaries: { [x: string]: any };
  // Add other properties as needed
}

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
